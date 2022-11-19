import { defineStore } from "pinia";
import { useUsersStore } from "@/stores/users";
import { db, storage } from "@/firebase.js";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  arrayRemove,
  increment,
  arrayUnion,
} from "firebase/firestore";
import {
  ref,
  getDownloadURL,
  deleteObject,
  uploadBytesResumable,
} from "firebase/storage";
import ShortUniqueId from "short-unique-id";

var uid = new ShortUniqueId();

export const useTweetStore = defineStore("tweets", {
  state: () => ({
    tweets: [],
    infiniteScrollIndex: null,
    fetchLimit: 8,
    uploadProgress: null,
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

    sortTweets() {
      this.tweets.sort((a, b) =>
        a.timestamp > b.timestamp ? -1 : a.timestamp < b.timestamp ? 1 : 0
      );
    },

    setTweets(arr) {
      this.tweets = [...arr];
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

    async getTimelineTweets(id) {
      const docRef = await getDoc(doc(db, "timelines", id));
      if (docRef.exists()) return docRef.data().tweets;
      return null;
    },

    updateTimeline(id, arr) {
      updateDoc(doc(db, "timelines", id), { tweets: arr });
    },

    addToTimeline(id, element) {
      updateDoc(doc(db, "timelines", id), {
        tweets: arrayUnion(element),
      });
    },

    async createTimelineTweet(
      userId,
      tweetId,
      type,
      timestamp,
      fromUserId,
      replyingToUser = null
    ) {
      const timeline = await this.getTimelineTweets(userId);
      if (
        timeline.filter((t) => t.id === tweetId && t.type === type).length > 0
      )
        return; // no repeats
      this.addToTimeline(userId, {
        id: tweetId,
        type,
        timestamp,
        fromUserId,
        replyingToUser,
      });
    },

    async addToAllFollowerTimelines(
      targetUserId,
      tweetId,
      type,
      timestamp,
      fromUserId,
      replyingToUser
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
            fromUserId,
            replyingToUser
          )
        )
      );
    },

    async removeFromTimeline(userId, tweetId, isRetweet) {
      const timeline = await this.getTimelineTweets(userId);
      if (!timeline) return;
      const newTimeline = timeline.filter(
        (tweet) =>
          tweet.id !== tweetId || (isRetweet && tweet.type !== "retweet")
      );
      this.updateTimeline(userId, newTimeline);
    },

    async removeFromAllFollowerTimelines(targetUserId, tweetId, isRetweet) {
      const store = useUsersStore();
      const user = await store.getUser(targetUserId);
      return Promise.all(
        user.followers.map((follower) =>
          this.removeFromTimeline(follower, tweetId, isRetweet)
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

    removeLike(id, userId, authorId) {
      this.increment(id, "likeCount", -1);
      this.removeFromFieldArray(id, "likesFrom", userId);
      const users = useUsersStore();
      users.removeLike(userId, id);
      users.deleteNotification(authorId, id);
    },

    removeAllLikes(arr, tweetId, authorId) {
      const users = useUsersStore();
      Promise.all(arr.map((user) => users.removeLike(user, tweetId, authorId)));
    },

    async hasLiked(id, userId) {
      return this.getTweet(id)
        .then((t) => t.likesFrom.includes(userId))
        .catch(() => false);
    },

    async addRetweet(id, userId, retweeterOfRetweet) {
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
        retweeterOfRetweet ? retweeterOfRetweet : userId
      );
      this.addToAllFollowerTimelines(
        userId,
        id,
        "retweet",
        new Date().toISOString(),
        retweeterOfRetweet ? retweeterOfRetweet : userId
      );

      if (tweet.authorId !== userId && retweeterOfRetweet !== userId) {
        retweeterOfRetweet
          ? users.notify(tweet.authorId, userId, "retweet-retweet", id)
          : users.notify(tweet.authorId, userId, "retweet-origin", id);
      }
    },

    removeRetweet(id, userId, authorId) {
      this.increment(id, "retweetCount", -1);
      this.removeFromFieldArray(id, "retweetsFrom", userId);
      if (
        this.tweets.findIndex((t) => t.id === id && t.type === "retweet") >= 0
      )
        this.tweets.splice(
          this.tweets.findIndex((t) => t.id === id && t.type === "retweet"),
          1
        );
      const users = useUsersStore();
      users.removeRetweet(userId, id);
      this.removeFromTimeline(userId, id, true); // self
      this.removeFromAllFollowerTimelines(userId, id, true); // followers
      users.deleteNotification(authorId, id);
    },

    removeAllRetweets(arr, tweetId, authorId) {
      const users = useUsersStore();
      Promise.all(
        arr.map((user) => users.removeRetweet(user, tweetId, authorId))
      );
    },

    async hasRetweeted(id, userId) {
      return this.getTweet(id)
        .then((t) => t.retweetsFrom.includes(userId))
        .catch(() => false);
    },

    uploadImage(id, file, index = null) {
      if (!file) return "";
      return new Promise((resolve, reject) => {
        const imgRef = ref(storage, `tweet/${id}-${index}`);
        const uploadTask = uploadBytesResumable(imgRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            this.uploadProgress = Math.trunc(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
          },
          (error) => {
            console.log(error);
            reject(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              this.uploadProgress = null;
              resolve(downloadURL);
            });
          }
        );
      });
    },

    async addTweet(
      type = "status",
      text = "",
      mediaFiles = [],
      authorId,
      replyingToTweet = null,
      replyingToUser = null,
      mentionedUsers = null,
      isViewingTweet,
      isViewingOtherProfile
    ) {
      const users = useUsersStore();
      const tweetId = uid();
      const timestamp = new Date().toISOString();
      // upload images to storage
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

      // update client-side tweets
      const temp = Object.assign({}, newTweet, {
        replyingToUser: users.getUsername(replyingToUser),
      });
      if (isViewingTweet) this.tweets.push(temp);
      if (!isViewingOtherProfile) this.tweets.unshift(temp);

      // update server-side tweets
      await setDoc(doc(db, "tweets", tweetId), newTweet);
      if (type === "reply" && replyingToTweet) {
        this.addToFieldArray(replyingToTweet, "repliesFrom", tweetId);
      }

      // update timelines and notify if tweet is a reply/mentions other users
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
      this.createTimelineTweet(
        authorId,
        tweetId,
        type,
        timestamp,
        authorId,
        replyingToUser
      ); // self
      this.addToAllFollowerTimelines(
        authorId,
        tweetId,
        type,
        timestamp,
        null,
        replyingToUser
      );
      if (replyingToUser && replyingToUser !== authorId) {
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
      for (let i = 0; i < length; i++) {
        const imgRef = ref(storage, `tweet/${id}-${i}`);
        deleteObject(imgRef).catch((e) => {
          console.log(e);
        });
      }
    },

    async removeTweet(id, userId) {
      const tweet = await this.getTweet(id);
      if (!tweet) return;
      this.setTweets(this.tweets.filter((t) => t.id !== id));
      if (tweet.replyingToTweet && (await this.getTweet(tweet.replyingToTweet)))
        this.removeFromFieldArray(tweet.replyingToTweet, "repliesFrom", id);

      const users = useUsersStore();
      users.removeTweet(userId, id);
      this.removeFromTimeline(userId, id); // self
      this.removeFromAllFollowerTimelines(userId, id); // followers
      this.removeAllLikes([...tweet.likesFrom], id, tweet.authorId);
      // have to filter self otherwise the status tweet occasionally gets zombified even with await
      this.removeAllRetweets(
        [...tweet.retweetsFrom].filter((uid) => uid !== userId),
        id,
        tweet.authorId
      );
      if (tweet.media.length > 0) this.deleteMedia(id, tweet.media.length);
      // remove notifs that reference this tweet
      users.deleteNotification(userId, id);
      if (tweet.replyingToUser)
        users.deleteNotification(tweet.replyingToUser, id);
      return deleteDoc(doc(db, "tweets", id));
    },
  },
});
