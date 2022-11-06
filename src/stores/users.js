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
  arrayRemove,
  increment,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const useUsersStore = defineStore("users", {
  state: () => ({
    currentUser: auth.currentUser
      ? getDoc(doc(db, "users", auth.currentUser.uid))
      : null,
    currentId: auth.currentUser ? auth.currentUser.uid : null,
  }),
  getters: {}, // can't be async so
  actions: {
    async updateUser(id, obj) {
      await updateDoc(doc(db, "users", id), obj);
    },

    async increment(id, field, amount) {
      await updateDoc(doc(db, "users", id), {
        [field]: increment(amount),
      });
    },

    async addToFieldArray(id, field, element) {
      const user = await this.getUser(id);
      if (!user[field])
        throw new Error(`User ${id}: '${field}' does not exist.`);
      const arr = user[field];
      arr.unshift(element);
      await this.updateUser(id, { [field]: arr });
    },

    async removeFromFieldArray(id, field, element) {
      // WARNING: SIMPLE ARRAYS ONLY
      await updateDoc(doc(db, "users", id), {
        [field]: arrayRemove(element),
      });
    },

    async getUser(id) {
      const docRef = await getDoc(doc(db, "users", id));
      if (docRef.exists()) return docRef.data();
      return null;
    },

    setCurrentUser(user, id) {
      this.currentUser = user || null;
      this.currentId = id || null;
    },

    async refreshCurrentUser() {
      if (!this.currentUser) return;
      this.currentUser = await this.getUser(this.currentId);
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
        localTimeline: [],
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
      return await this.getUser(id);
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
      return await getDownloadURL(imgRef);
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
      Object.assign(this.currentUser, newInfo);
      await this.updateUser(id, newInfo);
    },

    async addTweet(
      userId,
      tweetId,
      type = "status",
      containsMedia = false,
      timestamp
    ) {
      await this.addToFieldArray(userId, "tweets", {
        id: tweetId,
        type,
        containsMedia,
        timestamp,
      });
    },

    async removeTweet(userId, tweetId) {
      const user = await this.getUser(userId);
      const newTweets = user.tweets.filter((t) => t.id !== tweetId);
      await this.updateUser(userId, newTweets);
    },

    async addRetweet(userId, tweetId) {
      await this.addTweet(
        userId,
        tweetId,
        "retweet",
        null,
        new Date().toISOString()
      );
    },

    async removeRetweet(userId, tweetId) {
      const user = await this.getUser(userId);
      const newTweets = user.tweets.filter(
        (t) => t.id !== tweetId || t.type !== "retweet"
      );
      await this.updateUser(userId, newTweets);
    },

    async addLike(userId, tweetId) {
      await this.addToFieldArray(userId, "likes", tweetId);
    },

    async removeLike(userId, tweetId) {
      await this.removeFromFieldArray(userId, "likes", tweetId);
    },

    async addToLocalTimeline(userId, tweetId, type, timestamp, retweetedBy) {
      const user = await this.getUser(userId);
      if (
        user.localTimeline.filter((t) => t.id === tweetId && t.type === type)
          .length > 0
      )
        return; // no repeats
      await this.addToFieldArray(userId, "localTimeline", {
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
      for (const follower of user.followers) {
        await this.addToLocalTimeline(
          follower,
          tweetId,
          type,
          timestamp,
          retweetedBy
        );
      }
    },

    async removeFromLocalTimeline(userId, tweetId) {
      const user = await this.getUser(userId);
      const newLocalTimeline = user.localTimeline.filter(
        (t) => t.id !== tweetId
      );
      await this.updateUser(userId, "localTimeline", newLocalTimeline);
    },

    async removeFromAllFollowerTimelines(targetUserId, tweetId) {
      const user = await this.getUser(targetUserId);
      for (const follower of user.followers) {
        await this.removeFromLocalTimeline(follower, tweetId);
      }
    },

    async followUser(targetId) {
      this.increment(this.currentId, "followingCount", 1);
      this.increment(targetId, "followerCount", 1);
      await this.addToFieldArray(this.currentId, "following", targetId);
      this.addToFieldArray(targetId, "followers", this.currentId);
      this.notify(targetId, this.currentId, "follow");
      this.refreshCurrentUser();
    },

    async unfollowUser(targetId) {
      this.increment(this.currentId, "followingCount", -1);
      this.increment(targetId, "followerCount", -1);
      await this.removeFromFieldArray(this.currentId, "following", targetId);
      this.removeFromFieldArray(targetId, "followers", this.currentId);
      this.notify(targetId, this.currentId, "follow");
      // remove unfollowed user from your local timeline
      const currentUser = await this.getUser(this.currentId);
      const localTimeline = currentUser.localTimeline.filter(
        (tl) => tl.fromUserId !== targetId
      );
      await this.updateUser(this.currentId, { localTimeline });
      this.refreshCurrentUser();
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

    async notify(toUserId, fromUserId, type, tweetId = null) {
      const targetUser = await this.getUser(toUserId);
      if (!targetUser) return;
      const newNotif = { fromUser: fromUserId, type, tweetId };
      if (
        targetUser.newNotifications.filter(
          (n) =>
            n.fromUser === newNotif.fromUser &&
            n.type === newNotif.type &&
            n.tweetId === newNotif.tweetId
        ).length === 0 &&
        targetUser.oldNotifications.filter(
          (n) =>
            n.fromUser === newNotif.fromUser &&
            n.type === newNotif.type &&
            n.tweetId === newNotif.tweetId
        ).length === 0
      ) {
        // don't spam the same notif (idk a cleaner way to do that sorry)
        const newNotifications = targetUser.newNotifications;
        newNotifications.unshift(newNotif);
        await this.updateUser(toUserId, { newNotifications });
      }
    },

    async clearNotifications() {
      if (!this.currentUser || this.currentUser.newNotifications.length === 0)
        return;
      const notifs = {
        oldNotifications: [
          ...this.currentUser.newNotifications,
          ...this.currentUser.oldNotifications,
        ],
        newNotifications: [],
      };
      await this.updateUser(this.currentId, notifs);
    },

    async deleteReplyNotification(userId, tweetId) {
      const user = await this.getUser(userId);
      if (!user) return;
      // remove reply from new notif array
      if (
        user.newNotifications.filter((n) => n.tweetId === tweetId).length > 0
      ) {
        const newNotifications = user.newNotifications.filter(
          (n) => n.tweetId !== tweetId
        );
        await this.updateUser(userId, newNotifications);
      }
      // remove reply from old notif array
      if (
        user.oldNotifications.filter((n) => n.tweetId === tweetId).length > 0
      ) {
        const oldNotifications = user.oldNotifications.filter(
          (n) => n.tweetId !== tweetId
        );
        await this.updateUser(userId, { oldNotifications });
      }
    },

    async hasNewNotifications(userId) {
      const user = await this.getUser(userId);
      if (!user) throw new Error(`User ${userId} not found.`);
      return user.newNotifications.length > 0;
    },

    async getAllNotifications(userId) {
      const user = await this.getUser(userId);
      if (!user) throw new Error(`User ${userId} not found.`);
      return [...user.newNotifications, ...user.oldNotifications];
    },

    async isNewNotification(userId, notif) {
      const user = await this.getUser(userId);
      if (!user) throw new Error(`User ${userId} not found.`);
      return user.newNotifications.filter((n) => n === notif).length > 0;
    },

    async tweetIsNewNotification(userId, tweetId) {
      const user = await this.getUser(userId);
      if (!user) throw new Error(`User ${userId} not found.`);
      return (
        user.newNotifications.filter((n) => n.tweetId === tweetId).length > 0
      );
    },
  },
});
