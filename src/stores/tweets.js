import { defineStore } from "pinia";
import { useUsersStore } from "@/stores/users";
import { auth, db, storage } from "@/firebase.js";
import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  arrayRemove,
  increment,
  arrayUnion,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import ShortUniqueId from "short-unique-id";

var uid = new ShortUniqueId();

export const useTweetStore = defineStore("tweets", {
  state: () => ({
    tweets: [],
    lastDocTimestamp: null,
    fetchLimit: 4,
    isUploading: false,
  }),
  getters: {},
  actions: {
    async getTweet(id) {
      const docRef = await getDoc(doc(db, "tweets", id));
      if (docRef.exists()) return docRef.data();
      console.log(`Tweet ${id} does not exist.`);
      return null;
    },

    setTweets(arr) {
      this.tweets = [...arr];
    },

    updateTweet(id, obj) {
      updateDoc(doc(db, "tweets", id), obj);
    },

    increment(id, field, amount) {
      updateDoc(doc(db, "tweets", id), {
        [field]: increment(amount),
      });
    },

    async addToFieldArray(id, field, element) {
      const tweet = await this.getTweet(id);
      if (!tweet[field])
        throw new Error(`Tweet ${id}: '${field}' does not exist.`);
      updateDoc(doc(db, "tweets", id), {
        [field]: arrayUnion(element),
      });
    },

    async removeFromFieldArray(id, field, element) {
      // WARNING: SIMPLE ARRAYS ONLY
      return updateDoc(doc(db, "tweets", id), {
        [field]: arrayRemove(element),
      });
    },

    async getTimeline(id) {
      const docRef = await getDoc(doc(db, "timeline", id));
      if (docRef.exists()) return docRef.data();
      return null;
    },

    async queryTimeline() {
      //TO-DO
    },

    updateTimeline(id, arr) {
      updateDoc(doc(db, "timelines", id), { tweets: arr });
    },

    addToTimeline(id, element) {
      updateDoc(doc(db, "timelines", id), {
        tweets: arrayUnion(element),
      });
    },

    async addLike(id, userId, isRetweet) {
      this.increment(id, "likeCount", 1);
      this.addToFieldArray(id, "likesFrom", userId);

      const users = useUsersStore();
      users.addLike(userId, id);
      const tweet = await this.getTweet(id);
      if (tweet && tweet.authorId !== userId) {
        isRetweet
          ? users.notify(tweet.authorId, userId, "like-retweet", id)
          : users.notify(tweet.authorId, userId, "like-origin", id);
      }
    },

    removeLike(id, userId) {
      this.increment(id, "likeCount", -1);
      this.removeFromFieldArray(id, "likesFrom", userId);

      const users = useUsersStore();
      users.removeLike(userId, id);
    },

    removeAllLikes(arr) {
      const users = useUsersStore();
      Promise.all(arr.map((user) => users.removeLike(user, id)));
    },

    async hasLiked(id, userId) {
      const tweet = await this.getTweet(id);
      if (!tweet) return false;
      return tweet.likesFrom.includes(userId);
    },

    async addRetweet(id, userId, isRetweetofRetweet) {
      this.increment(id, "retweetCount", 1);
      this.addToFieldArray(id, "retweetsFrom", userId);

      const users = useUsersStore();
      users.addRetweet(userId, id);
      users.addToLocalTimeline(
        userId,
        id,
        "retweet",
        new Date().toISOString(),
        userId
      );
      users.addToAllFollowerTimelines(
        userId,
        id,
        "retweet",
        new Date().toISOString(),
        userId
      );
      const tweet = await this.getTweet(id);
      if (tweet.authorId !== userId) {
        isRetweetofRetweet
          ? users.notify(tweet.authorId, userId, "retweet-retweet", id)
          : users.notify(tweet.authorId, userId, "retweet-origin", id);
      }
    },

    removeRetweet(id, userId) {
      this.increment(id, "retweetCount", -1);
      this.removeFromFieldArray(id, "retweetsFrom", userId);

      const users = useUsersStore();
      users.removeRetweet(userId, id);
      users.removeFromLocalTimeline(userId, id); // self
      users.removeFromAllFollowerTimelines(userId, id); // followers
    },

    removeAllRetweets(arr) {
      const users = useUsersStore();
      Promise.all(arr.map((user) => users.removeRetweet(user, id)));
    },

    async hasRetweeted(id, userId) {
      const tweet = await this.getTweet(id);
      if (!tweet) return false;
      return tweet.retweetsFrom.includes(userId);
    },

    async uploadImage(id, file, index = null) {
      if (!file) return "";
      const imgRef = ref(storage, `tweet/${id}${index ? `-${index}` : ""}`);
      await uploadBytes(imgRef, file);
      return getDownloadURL(imgRef);
    },

    async addTweet(
      type = "status",
      text = "",
      mediaFiles = [],
      authorId,
      replyingToTweet = null,
      replyingToUser = null,
      mentionedUsers = null
    ) {
      const tweetId = uid();
      const timestamp = new Date().toISOString();
      let media = [];
      if (mediaFiles.length > 0) {
        await Promise.all(
          mediaFiles.map((file, index) =>
            this.uploadImage(tweetId, file, index)
          )
        )
          .then((urls) => (media = [...urls]))
          .catch((e) => console.log(e));
      }
      const newTweet = {
        id: tweetId,
        type,
        text,
        media,
        authorId: authorId,
        replyCount: 0,
        retweetCount: 0,
        likeCount: 0,
        quoteCount: 0,
        timestamp,
        replyingToTweet,
        replyingToUser,
        mentionedUsers,
        quoting: null,
        repliesFrom: [],
        retweetsFrom: [],
        quotesFrom: [],
        likesFrom: [],
      };
      this.tweets.unshift(newTweet);
      await setDoc(doc(db, "tweets", id), newTweet);
      if (type === "reply" && replyingToTweet) {
        replyOrigin.addToFieldArray(replyingToTweet, "repliesFrom", tweetId);
      }
      // update timelines and notify if tweet is a reply/mentions other users
      const users = useUsersStore();
      const containsMedia = media.length > 0 ? true : false;
      users.addTweet(authorId, tweetId, type, containsMedia, timestamp);
      users.addToLocalTimeline(authorId, tweetId, type, timestamp); // self
      users.addToAllFollowerTimelines(authorId, tweetId, type, timestamp); // followers
      if (type === "reply" && replyingToUser !== authorId) {
        users.notify(replyingToUser, authorId, type, tweetId);
      }
      if (mentionedUsers && mentionedUsers.length > 0) {
        Promise.all(
          newTweet.mentionedUsers.map((id) => {
            if (id !== authorId) users.notify(id, authorId, "mention", tweetId);
          })
        );
      }
    },

    async deleteMedia(id, length) {
      for (const index of Array.from(length)) {
        const imgRef = ref(storage, `tweets/${id}-${index}`);
        deleteObject(imgRef).catch((e) => {
          console.log(e);
        });
      }
    },

    async removeTweet(id, userId) {
      const tweet = await this.getTweet(id);
      if (!tweet) return;
      this.setTweets(this.tweets.filter((t) => t.id !== id));
      if (tweet.replyingToTweet)
        this.removeFromFieldArray(id, "repliesFrom", id);

      const users = useUsersStore();
      users.removeTweet(userId, id);
      users.removeFromLocalTimeline(userId, id); // self
      users.removeFromAllFollowerTimelines(userId, id); // followers
      this.removeAllLikesFromTweet([...tweet.likesFrom]);
      this.removeAllRetweetsFromTweet([...tweet.retweetsFrom]);
      if (tweet.media.length > 0) this.deleteMedia(id, tweet.media.length);
      if (tweet.replyingToUser)
        users.deleteReplyNotification(tweet.replyingToUser, id);
      return tweet.deleteDoc(doc(db, "tweets", id));
    },
  },
});
