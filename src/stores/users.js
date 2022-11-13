import { defineStore } from "pinia";
import { auth, db, storage } from "@/firebase.js";
import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  query,
  where,
  arrayUnion,
  arrayRemove,
  increment,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useTweetStore } from "./tweets";

export const useUsersStore = defineStore("users", {
  state: () => ({
    currentUser: null,
    currentId: null,
    notifications: { new: [], old: [] },
    docPointer: null,
    fetchLimit: 4,
  }),
  getters: {}, // can't be async so
  actions: {
    async getUser(id) {
      const docRef = await getDoc(doc(db, "users", id));
      if (docRef.exists()) return docRef.data();
      return null;
    },

    async getUserTweets(id) {
      const docRef = await getDoc(doc(db, "user-tweets", id));
      if (docRef.exists()) return docRef.data().tweets;
      return null;
    },

    async getUserProps(id) {
      return this.getUser(id)
        .then((user) => ({
          id,
          name: user.name,
          username: user.username,
          avatarUrl: user.avatarUrl,
        }))
        .catch(() => null);
    },

    updateDocInCollection(collection, id, obj) {
      updateDoc(doc(db, collection, id), obj).catch((e) => console.log(e));
    },

    increment(id, field, amount) {
      updateDoc(doc(db, "users", id), {
        [field]: increment(amount),
      }).catch((e) => console.log(e));
    },

    async addToFieldArray(collection, id, field, element) {
      updateDoc(doc(db, collection, id), {
        [field]: arrayUnion(element),
      }).catch((e) => console.log(e));
    },

    async removeFromFieldArray(collection, id, field, element) {
      // WARNING: SIMPLE ARRAYS ONLY
      return updateDoc(doc(db, collection, id), {
        [field]: arrayRemove(element),
      }).catch((e) => console.log(e));
    },

    setCurrentUser(user, id) {
      this.currentUser = user || null;
      this.currentId = id || null;
    },

    async syncCurrentUserToAuth(id) {
      this.setCurrentUser(await this.getUser(id), id);
    },

    createUser(id, name, username) {
      const newUser = {
        id,
        isAdmin: false,
        isPrivate: false,
        name,
        username,
        description: "",
        location: "",
        website: "",
        birthday: "",
        avatarUrl: "",
        headerUrl: "",
        followingCount: 0,
        followerCount: 0,
        tweetCount: 0,
        timestamp: new Date().toISOString(),
        likes: [],
        following: [],
        followers: [],
      };
      this.setCurrentUser(newUser, id);
      setDoc(doc(db, "users", id), newUser);
      setDoc(doc(db, "user-tweets", id), { tweets: [] });
      setDoc(doc(db, "notifications", id), { old: [], new: [] });
      setDoc(doc(db, "timelines", id), { tweets: [] });
      return newUser;
    },

    async getName(id) {
      if (!id) return null;
      const user = await this.getUser(id);
      return user ? user.name : "";
    },

    async getUsername(id) {
      if (!id) return null;
      const user = await this.getUser(id);
      return user ? user.username : "";
    },

    async getUserByUsername(username) {
      if (!username) return;
      let id = null;
      const q = query(
        collection(db, "users"),
        where("username", "==", username)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => (id = doc.id));
      if (!id) return null;
      return this.getUser(id);
    },

    async isUsernameTaken(username) {
      if (!username) return;
      if (this.currentUser && this.currentUser.username === username)
        return false;
      let id = null;
      const q = query(
        collection(db, "users"),
        where("username", "==", username)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        id = doc.id;
      });
      return id ? true : false;
    },

    async uploadProfileImage(id, file, type) {
      if (!file) return "";
      const imgRef = ref(storage, `${type}/${id}`);
      await uploadBytes(imgRef, file);
      return getDownloadURL(imgRef);
    },

    async updateProfile(
      id,
      name,
      username,
      description,
      location,
      website,
      birthday,
      avatarFile,
      headerFile
    ) {
      let avatarUrl = this.currentUser.avatarUrl;
      let headerUrl = this.currentUser.headerUrl;
      if (avatarFile)
        avatarUrl = await this.uploadProfileImage(id, avatarFile, "avatar");
      if (headerFile)
        headerUrl = await this.uploadProfileImage(id, headerFile, "header");
      const newInfo = {
        name,
        username,
        description,
        location,
        website,
        birthday,
        avatarUrl,
        headerUrl,
      };
      this.updateDocInCollection("users", id, newInfo);
    },

    addTweet(
      userId,
      tweetId,
      authorId = userId,
      type = "status",
      containsMedia = false,
      replyingToUser = null,
      timestamp
    ) {
      const isSelfReply = replyingToUser === authorId ? true : false;
      this.addToFieldArray("user-tweets", userId, "tweets", {
        authorId,
        id: tweetId,
        type,
        containsMedia,
        replyingToUser,
        isSelfReply,
        timestamp,
      });
    },

    async removeTweet(userId, tweetId) {
      const tweets = await this.getUserTweets(userId);
      const newTweets = tweets.filter((t) => t.id !== tweetId);
      this.updateDocInCollection("user-tweets", userId, { tweets: newTweets });
    },

    addRetweet(userId, tweetId, authorId) {
      this.addTweet(
        userId,
        tweetId,
        authorId,
        "retweet",
        null,
        null,
        new Date().toISOString()
      );
    },

    async removeRetweet(userId, tweetId) {
      const tweets = await this.getUserTweets(userId);
      const newTweets = tweets.filter(
        (t) => t.id !== tweetId || t.type !== "retweet"
      );
      this.updateDocInCollection("user-tweets", userId, { tweets: newTweets });
    },

    addLike(userId, tweetId) {
      this.addToFieldArray("users", userId, "likes", tweetId);
    },

    removeLike(userId, tweetId) {
      this.removeFromFieldArray("users", userId, "likes", tweetId);
    },

    followUser(targetId) {
      this.increment(this.currentId, "followingCount", 1);
      this.increment(targetId, "followerCount", 1);
      this.addToFieldArray("users", this.currentId, "following", targetId);
      this.addToFieldArray("users", targetId, "followers", this.currentId);
      this.notify(targetId, this.currentId, "follow");
    },

    async unfollowUser(targetId) {
      this.increment(this.currentId, "followingCount", -1);
      this.increment(targetId, "followerCount", -1);
      this.removeFromFieldArray("users", this.currentId, "following", targetId);
      this.removeFromFieldArray("users", targetId, "followers", this.currentId);
      this.notify(targetId, this.currentId, "follow");
      // remove unfollowed user from your timeline
      const store = useTweetStore();
      const tweets = await store.getTimelineTweets(this.currentId);
      if (!tweets) return;
      const newTimeline = tweets.filter(
        (tweet) => tweet.fromUserId !== targetId
      );
      store.updateTimeline(this.currentId, newTimeline);
    },

    async isFollowingUser(userId, targetId) {
      if (userId === targetId) return false;
      const user = await this.getUser(userId);
      return user.following.includes(targetId);
    },

    canFollow(targetId) {
      if (!this.currentId || this.currentId === targetId) return false;
      return !this.currentUser.following.includes(targetId);
    },

    async getNotificationsDoc(id) {
      const docRef = await getDoc(doc(db, "notifications", id));
      if (docRef.exists()) return docRef.data();
      return null;
    },

    async syncNotifications(id) {
      this.notifications = await this.getNotificationsDoc(id);
    },

    async notify(targetId, fromUserId, type, tweetId = null) {
      const targetNotifs = await this.getNotificationsDoc(targetId);
      if (!targetNotifs) return;
      // don't spam the same notif (idk a cleaner way to do that sorry)
      const newNotif = { fromUser: fromUserId, type, tweetId };
      if (
        targetNotifs.new.filter(
          (n) =>
            n.fromUser === newNotif.fromUser &&
            n.type === newNotif.type &&
            n.tweetId === newNotif.tweetId
        ).length === 0 &&
        targetNotifs.old.filter(
          (n) =>
            n.fromUser === newNotif.fromUser &&
            n.type === newNotif.type &&
            n.tweetId === newNotif.tweetId
        ).length === 0
      ) {
        this.addToFieldArray("notifications", targetId, "new", newNotif);
      }
    },

    async clearNotifications() {
      const notifs = await this.getNotificationsDoc(this.currentId);
      const newNotifs = {
        old: [...notifs.old, ...notifs.new],
        new: [],
      };
      this.updateDocInCollection("notifications", this.currentId, newNotifs);
    },

    async deleteNotification(userId, tweetId) {
      const notifs = await this.getNotificationsDoc(userId);
      if (!notifs) return;
      // remove from new notif array
      if (notifs.new.filter((n) => n.tweetId === tweetId).length > 0) {
        const newNotifications = notifs.new.filter(
          (n) => n.tweetId !== tweetId
        );
        this.updateDocInCollection("notifications", userId, {
          new: newNotifications,
        });
      }
      // remove from old notif array
      if (notifs.old.filter((n) => n.tweetId === tweetId).length > 0) {
        const oldNotifications = notifs.old.filter(
          (n) => n.tweetId !== tweetId
        );
        this.updateDocInCollection("notifications", userId, {
          old: oldNotifications,
        });
      }
    },

    hasNewNotifications() {
      return this.notifications.new.length > 0;
    },

    getAllNotifications() {
      return [...this.notifications.old, ...this.notifications.new];
    },

    isNewNotification(notif) {
      return this.notifications.new.filter((n) => n === notif).length > 0;
    },

    tweetIsNewNotification(tweetId) {
      return (
        this.notifications.new.filter((n) => n.tweetId === tweetId).length > 0
      );
    },
  },
});
