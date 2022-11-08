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
    docPointer: null,
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

    sortByTimestamp(arr) {
      return arr.sort((a, b) =>
        a.timestamp > b.timestamp ? -1 : a.timestamp < b.timestamp ? 1 : 0
      );
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

    addTweetToTimeline(id, element) {
      updateDoc(doc(db, "timelines", id), {
        tweets: arrayUnion(element),
      });
    },

    async createTimelineTweet(userId, tweetId, type, timestamp, retweetedBy) {
      const timeline = await this.getTimeline(userId);
      if (
        timeline.filter((t) => t.id === tweetId && t.type === type).length > 0
      )
        return; // no repeats
      this.addTweetToTimeline(userId, {
        id: tweetId,
        type,
        timestamp,
        retweetedBy,
      });
    },

    async addToAllFollowerTimelines(
      targetUserId,
      tweetId,
      type,
      timestamp,
      retweetedBy
    ) {
      const store = useUsersStore();
      const user = await store.getUser(targetUserId);
      return Promise.all(
        user.followers.map((follower) =>
          this.createTimelineTweet(
            follower,
            tweetId,
            type,
            timestamp,
            retweetedBy
          )
        )
      );
    },

    async removeFromTimeline(userId, tweetId) {
      const tweets = await this.getTimeline(userId);
      if (!tweets) return;
      const newTimeline = tweets.filter((tweet) => tweet.id !== tweetId);
      this.updateTimeline(userId, newTimeline);
    },

    async removeFromAllFollowerTimelines(targetUserId, tweetId) {
      const store = useUsersStore();
      const user = await store.getUser(targetUserId);
      return Promise.all(
        user.followers.map((follower) =>
          this.removeFromTimeline(follower, tweetId)
        )
      );
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

    removeAllLikes(arr, tweetId) {
      const users = useUsersStore();
      Promise.all(arr.map((user) => users.removeLike(user, tweetId)));
    },

    async hasLiked(id, userId) {
      return this.getTweet(id)
        .then((t) => t.likesFrom.includes(userId))
        .catch(() => false);
    },

    async addRetweet(id, userId, isRetweetofRetweet) {
      this.increment(id, "retweetCount", 1);
      this.addToFieldArray(id, "retweetsFrom", userId);

      const users = useUsersStore();
      const tweet = await this.getTweet(id);
      users.addRetweet(userId, id, tweet.authorId);
      this.createTimelineTweet(
        userId,
        id,
        "retweet",
        new Date().toISOString(),
        userId
      );
      this.addToAllFollowerTimelines(
        userId,
        id,
        "retweet",
        new Date().toISOString(),
        userId
      );

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
      this.removeFromTimeline(userId, id); // self
      this.removeFromAllFollowerTimelines(userId, id); // followers
    },

    removeAllRetweets(arr, tweetId) {
      const users = useUsersStore();
      Promise.all(arr.map((user) => users.removeRetweet(user, tweetId)));
    },

    async hasRetweeted(id, userId) {
      return this.getTweet(id)
        .then((t) => t.retweetsFrom.includes(userId))
        .catch(() => false);
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
        authorId,
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
      await setDoc(doc(db, "tweets", tweetId), newTweet);
      if (type === "reply" && replyingToTweet) {
        this.addToFieldArray(replyingToTweet, "repliesFrom", tweetId);
      }
      // update timelines and notify if tweet is a reply/mentions other users
      const users = useUsersStore();
      const containsMedia = media.length > 0 ? true : false;
      users.addTweet(
        authorId,
        tweetId,
        authorId,
        type,
        containsMedia,
        replyingToUser,
        timestamp
      );
      this.addTweetToTimeline(authorId, tweetId, type, timestamp); // self
      this.addToAllFollowerTimelines(authorId, tweetId, type, timestamp); // followers
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
      this.removeFromTimeline(userId, id); // self
      this.removeFromAllFollowerTimelines(userId, id); // followers
      this.removeAllLikesFromTweet([...tweet.likesFrom], id);
      this.removeAllRetweetsFromTweet([...tweet.retweetsFrom], id);
      if (tweet.media.length > 0) this.deleteMedia(id, tweet.media.length);
      if (tweet.replyingToUser)
        users.deleteReplyNotification(tweet.replyingToUser, id);
      return deleteDoc(doc(db, "tweets", id));
    },
  },
});
