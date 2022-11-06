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
  query,
  arrayRemove,
  increment,
  arrayUnion,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ShortUniqueId from "short-unique-id";

const date = new Date();
const iso = date.toISOString();
var uid = new ShortUniqueId();

export const useTweetStore = defineStore("tweets", {
  state: () => ({
    tweets: [],
    lastDocTimestamp: null,
    fetchLimit: 4,
  }),
  getters: {},
  actions: {
    setTweets(arr) {
      this.tweets = [...arr];
    },

    async updateTweet(id, obj) {
      await updateDoc(doc(db, "tweets", id), obj);
    },

    async increment(id, field, amount) {
      await updateDoc(doc(db, "tweets", id), {
        [field]: increment(amount),
      });
    },

    async addToFieldArray(id, field, element) {
      const tweet = await this.getTweet(id);
      if (!tweet[field])
        throw new Error(`Tweet ${id}: '${field}' does not exist.`);
      await updateDoc(doc(db, "tweets", id), {
        [field]: arrayUnion(element),
      });
    },

    async removeFromFieldArray(id, field, element) {
      // WARNING: SIMPLE ARRAYS ONLY
      await updateDoc(doc(db, "tweets", id), {
        [field]: arrayRemove(element),
      });
    },

    async getTimeline(id) {
      const docRef = await getDoc(doc(db, "timeline", id));
      if (docRef.exists()) return docRef.data();
      return null;
    },

    async updateTimeline(id, arr) {
      await updateDoc(doc(db, "timelines", id), { tweets: arr });
    },

    async addToTimeline(id, element) {
      await updateDoc(doc(db, "timelines", id), {
        tweets: arrayUnion(element),
      });
    },

    async getTweet(id) {
      const docRef = await getDoc(doc(db, "tweets", id));
      if (docRef.exists()) return docRef.data();
      return null;
    },

    addLike(id, userId, isRetweet) {
      if (!userId) return;
      const tweet = this.getTweet(id);
      if (!tweet) throw new Error(`tweet id ${id} does not exist`);
      tweet.likeCount++;
      tweet.likesFrom.push(userId);

      const users = useUsersStore();
      users.addLike(userId, id);
      if (tweet.authorId !== userId) {
        isRetweet
          ? users.notify(tweet.authorId, userId, "like-retweet", id)
          : users.notify(tweet.authorId, userId, "like-origin", id);
      }
    },

    removeLike(id, userId) {
      if (!userId) return;
      const tweet = this.getTweet(id);
      if (!tweet) throw new Error(`tweet id ${id} does not exist`);
      tweet.likeCount--;
      tweet.likesFrom.splice(tweet.likesFrom.indexOf(userId), 1);

      const users = useUsersStore();
      users.removeLike(userId, id);
    },

    removeAllLikesFromTweet(id) {
      const tweet = this.getTweet(id);
      if (!tweet) throw new Error(`tweet id ${id} does not exist`);
      const users = useUsersStore();
      tweet.likesFrom.forEach((user) => users.removeLike(user, id));
    },

    hasLiked(id, userId) {
      const tweet = this.getTweet(id);
      if (!tweet) return false;
      return tweet.likesFrom.includes(userId);
    },

    addRetweet(id, userId, isRetweetofRetweet) {
      if (!userId) return;
      const tweet = this.getTweet(id);
      if (!tweet) throw new Error(`tweet id ${id} does not exist`);
      tweet.retweetCount++;
      tweet.retweetsFrom.push(userId);

      const users = useUsersStore();
      users.addRetweet(userId, id);
      users.addToLocalTimeline(
        userId,
        id,
        "retweet",
        new Date().toISOString(),
        userId
      ); // self
      users.addToAllFollowerTimelines(
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
      if (!userId) return;
      const tweet = this.getTweet(id);
      if (!tweet) throw new Error(`tweet id ${id} does not exist`);
      tweet.retweetCount--;
      tweet.retweetsFrom.splice(tweet.retweetsFrom.indexOf(userId), 1);

      const users = useUsersStore();
      users.removeRetweet(userId, id);
      users.removeFromLocalTimeline(userId, id); // self
      users.removeFromAllFollowerTimelines(userId, id); // followers
    },

    removeAllRetweetsFromTweet(id) {
      const tweet = this.getTweet(id);
      if (!tweet) throw new Error(`tweet id ${id} does not exist`);
      const users = useUsersStore();
      tweet.retweetsFrom.forEach((user) => users.removeRetweet(user, id));
    },

    hasRetweeted(id, userId) {
      const tweet = this.getTweet(id);
      if (!tweet) return false;
      return tweet.retweetsFrom.includes(userId);
    },

    addTweet(
      type = "status",
      text = "",
      media = [],
      authorId,
      replyingToTweet = null,
      replyingToUser = null,
      mentionedUsers = null
    ) {
      const timestamp = new Date().toISOString();
      const newTweet = {
        id: uid(),
        type,
        text,
        media: [...media],
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

      if (type === "reply" && replyingToTweet) {
        this.getTweet(replyingToTweet).repliesFrom.push(newTweet.id);
      }

      const users = useUsersStore();
      const containsMedia = media.length > 0 ? true : false;
      users.addTweet(authorId, newTweet.id, type, containsMedia, timestamp);
      users.addToLocalTimeline(authorId, newTweet.id, type, timestamp); // self
      users.addToAllFollowerTimelines(authorId, newTweet.id, type, timestamp); // followers
      if (type === "reply" && replyingToUser !== authorId) {
        users.notify(replyingToUser, authorId, type, newTweet.id);
        return;
      }
      if (mentionedUsers && mentionedUsers.length > 0) {
        newTweet.mentionedUsers.forEach((id) => {
          if (users.getUser(id) && id !== authorId)
            users.notify(id, authorId, "mention", newTweet.id);
        });
      }
    },

    removeTweet(id, userId) {
      const tweet = this.getTweet(id);
      const index = this.tweets.findIndex((t) => t.id === id);
      if (!tweet || index < 0) throw new Error(`tweet id ${id} does not exist`);
      const replyingToTweet = this.getTweet(tweet.replyingToTweet);
      // remove from other tweet's replies
      if (replyingToTweet)
        replyingToTweet.repliesFrom = replyingToTweet.repliesFrom.filter(
          (replyId) => replyId !== id
        );
      this.removeAllLikesFromTweet(id);
      this.removeAllRetweetsFromTweet(id);
      this.tweets.splice(index, 1);

      const users = useUsersStore();
      users.removeTweet(userId, id);
      users.removeFromLocalTimeline(userId, id); // self
      users.removeFromAllFollowerTimelines(userId, id); // followers
      if (tweet.replyingToUser)
        users.deleteReplyNotification(tweet.replyingToUser, id);
    },
  },
});
