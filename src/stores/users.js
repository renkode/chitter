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
    lastDocTimestamp: null,
    fetchLimit: 4,
  }),
  getters: {}, // can't be async so
  actions: {
    async getUser(id) {
      const docRef = await getDoc(doc(db, "users", id));
      if (docRef.exists()) return docRef.data();
      return null;
    },

    updateUser(id, obj) {
      updateDoc(doc(db, "users", id), obj);
    },

    increment(id, field, amount) {
      updateDoc(doc(db, "users", id), {
        [field]: increment(amount),
      });
    },

    async addToFieldArray(id, field, element) {
      const user = await this.getUser(id);
      if (!user[field])
        throw new Error(`User ${id}: '${field}' does not exist.`);
      updateDoc(doc(db, "users", id), {
        [field]: arrayUnion(element),
      });
    },

    async removeFromFieldArray(id, field, element) {
      // WARNING: SIMPLE ARRAYS ONLY
      return updateDoc(doc(db, "users", id), {
        [field]: arrayRemove(element),
      });
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
        tweets: [],
        likes: [],
        following: [],
        followers: [],
        newNotifications: [],
        oldNotifications: [],
      };
      this.setCurrentUser(newUser, id);
      setDoc(doc(db, "users", id), newUser);
      return newUser;
    },

    async getUsername(id) {
      const user = await this.getUser(id);
      return user ? user.username : "";
    },

    async getUserByUsername(username) {
      if (!username) return;
      let id = null;
      const users = collection(db, "users");
      const q = query(users, where("username", "==", username));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        id = doc.id;
      });
      if (!id) return null;
      return this.getUser(id);
    },

    async isUsernameTaken(username) {
      if (!username) return;
      if (this.currentUser && this.currentUser.username === username)
        return false;
      let id = null;
      const users = collection(db, "users");
      const q = query(users, where("username", "==", username));
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
      this.updateUser(id, newInfo);
    },

    addTweet(
      userId,
      tweetId,
      type = "status",
      containsMedia = false,
      timestamp
    ) {
      this.addToFieldArray(userId, "tweets", {
        id: tweetId,
        type,
        containsMedia,
        timestamp,
      });
    },

    async removeTweet(userId, tweetId) {
      const user = await this.getUser(userId);
      const newTweets = user.tweets.filter((t) => t.id !== tweetId);
      this.updateUser(userId, newTweets);
    },

    addRetweet(userId, tweetId) {
      this.addTweet(userId, tweetId, "retweet", null, new Date().toISOString());
    },

    async removeRetweet(userId, tweetId) {
      const user = await this.getUser(userId);
      const newTweets = user.tweets.filter(
        (t) => t.id !== tweetId || t.type !== "retweet"
      );
      this.updateUser(userId, newTweets);
    },

    addLike(userId, tweetId) {
      this.addToFieldArray(userId, "likes", tweetId);
    },

    removeLike(userId, tweetId) {
      this.removeFromFieldArray(userId, "likes", tweetId);
    },

    async addToLocalTimeline(userId, tweetId, type, timestamp, retweetedBy) {
      const user = await this.getUser(userId);
      if (
        user.localTimeline.filter((t) => t.id === tweetId && t.type === type)
          .length > 0
      )
        return; // no repeats
      const store = useTweetStore();
      store.addToTimeline(userId, "localTimeline", {
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
      const user = await this.getUser(targetUserId);
      Promise.all(
        user.followers.map((follower) =>
          this.addToLocalTimeline(
            follower,
            tweetId,
            type,
            timestamp,
            retweetedBy
          )
        )
      );
    },

    async removeFromLocalTimeline(userId, tweetId) {
      const store = useTweetStore();
      const tweets = await store.getTimeline(userId);
      if (!tweets) return;
      const newTimeline = tweets.filter((tweet) => tweet.id !== tweetId);
      store.updateTimeline(userId, newTimeline);
    },

    async removeFromAllFollowerTimelines(targetUserId, tweetId) {
      const user = await this.getUser(targetUserId);
      Promise.all(
        user.followers.map((follower) =>
          this.removeFromLocalTimeline(follower, tweetId)
        )
      );
    },

    followUser(targetId) {
      this.increment(this.currentId, "followingCount", 1);
      this.increment(targetId, "followerCount", 1);
      this.addToFieldArray(this.currentId, "following", targetId);
      this.addToFieldArray(targetId, "followers", this.currentId);
      this.notify(targetId, this.currentId, "follow");
    },

    async unfollowUser(targetId) {
      this.increment(this.currentId, "followingCount", -1);
      this.increment(targetId, "followerCount", -1);
      this.removeFromFieldArray(this.currentId, "following", targetId);
      this.removeFromFieldArray(targetId, "followers", this.currentId);
      this.notify(targetId, this.currentId, "follow");
      // remove unfollowed user from your local timeline
      const store = useTweetStore();
      const tweets = await store.getTimeline(this.currentId);
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
      if (this.currentUser.id === targetId) return false;
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

    updateNotifications(id, obj) {
      updateDoc(doc(db, "notifications", id), obj);
    },

    addToNotifications(id, field, element) {
      updateDoc(doc(db, "notifications", id), {
        [field]: arrayUnion(element),
      });
    },

    removeFromNotifications(id, field, element) {
      updateDoc(doc(db, "notifications", id), {
        [field]: arrayRemove(element),
      });
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
        this.addToNotifications(targetId, "new", newNotif);
      }
    },

    async clearNotifications() {
      const notifs = {
        old: [
          ...this.currentUser.oldNotifications,
          ...this.currentUser.newNotifications,
        ],
        new: [],
      };
      this.updateNotifications(this.currentId, notifs);
    },

    async deleteReplyNotification(userId, tweetId) {
      const notifs = await this.getNotificationsDoc(userId);
      if (!notifs) return;
      // remove reply from new notif array
      if (notifs.filter((n) => n.tweetId === tweetId).length > 0) {
        const newNotifications = notifs.filter((n) => n.tweetId !== tweetId);
        this.updateNotifications(userId, { new: newNotifications });
      }
      // remove reply from old notif array
      if (notifs.filter((n) => n.tweetId === tweetId).length > 0) {
        const oldNotifications = notifs.filter((n) => n.tweetId !== tweetId);
        this.updateNotifications(userId, { old: oldNotifications });
      }
    },

    hasNewNotifications() {
      return this.notifications.new.length > 0;
    },

    getAllNotifications() {
      return [
        ...this.notifications.new.reverse(),
        ...this.notifications.old.reverse(),
      ];
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
