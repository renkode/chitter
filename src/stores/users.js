import { defineStore } from "pinia";
import { auth, db } from "@/firebase.js";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";

export const useUsersStore = defineStore("users", {
  state: () => ({
    currentUser: auth.currentUser
      ? getDoc(doc(db, "users", auth.currentUser.uid))
      : null,
    currentId: auth.currentUser ? auth.currentUser.uid : null,
  }),
  getters: {}, // can't be async so
  actions: {
    async getUser(id) {
      const docRef = await getDoc(doc(db, "users", id));
      if (docRef.exists()) return docRef.data();
      return null;
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
        localTimeline: [],
        newNotifications: [],
        oldNotifications: [],
      };
      this.setCurrentUser(newUser, id);
      setDoc(doc(db, "users", id), newUser);
      return newUser;
    },

    getUsername(id) {
      if (this.users.filter((user) => user.id == id)[0])
        return this.users.filter((user) => user.id == id)[0].username;
      return null;
    },

    getUserByUsername(username) {
      return this.users.filter((user) => user.username == username)[0];
    },

    updateProfile(
      id,
      name,
      username,
      description,
      location,
      website,
      birthday,
      avatarUrl,
      headerUrl
    ) {
      const user = this.users.filter((user) => user.id == id)[0];
      const index = this.users.findIndex((user) => user.id == id);
      user.name = name;
      user.username = username;
      user.description = description;
      user.location = location;
      user.website = website;
      user.birthday = birthday;
      user.avatarUrl = avatarUrl;
      user.headerUrl = headerUrl;
      Object.assign(this.users[index], user);
    },

    addTweet(
      userId,
      tweetId,
      type = "status",
      containsMedia = false,
      timestamp
    ) {
      const user = this.getUser(userId);
      user.tweets.unshift({
        id: tweetId,
        type,
        containsMedia,
        timestamp,
      });
    },

    removeTweet(userId, tweetId) {
      const user = this.getUser(userId);
      user.tweets = user.tweets.filter((t) => t.id !== tweetId);
    },

    addRetweet(userId, tweetId) {
      this.addTweet(userId, tweetId, "retweet", null, new Date().toISOString());
    },

    removeRetweet(userId, tweetId) {
      const user = this.getUser(userId);
      const tweetIndex = user.tweets.findIndex(
        (t) => t.id == tweetId && t.type === "retweet"
      );
      if (tweetIndex >= 0) user.tweets.splice(tweetIndex, 1);
    },

    addLike(userId, tweetId) {
      const user = this.getUser(userId);
      user.likes.push(tweetId);
    },

    removeLike(userId, tweetId) {
      const user = this.getUser(userId);
      const tweetIndex = user.likes.indexOf(tweetId);
      user.likes.splice(tweetIndex, 1);
    },

    addToLocalTimeline(userId, tweetId, type, timestamp, retweetedBy) {
      const user = this.getUser(userId);
      if (
        user.localTimeline.filter((t) => t.id === tweetId && t.type === type)
          .length > 0
      )
        return; // no repeats
      user.localTimeline.unshift({
        id: tweetId,
        type,
        timestamp,
        retweetedBy,
      });
    },

    addToAllFollowerTimelines(
      currentUserId,
      tweetId,
      type,
      timestamp,
      retweetedBy
    ) {
      const user = this.getUser(currentUserId);
      user.followers.forEach((follower) => {
        this.addToLocalTimeline(
          follower,
          tweetId,
          type,
          timestamp,
          retweetedBy
        );
      });
    },

    removeFromLocalTimeline(userId, tweetId) {
      const user = this.getUser(userId);
      user.localTimeline = user.localTimeline.filter((t) => t.id !== tweetId);
    },

    removeFromAllFollowerTimelines(currentUserId, tweetId) {
      const user = this.getUser(currentUserId);
      user.followers.forEach((follower) => {
        this.removeFromLocalTimeline(follower, tweetId);
      });
    },

    followUser(currentUserId, targetId) {
      const currentUser = this.getUser(currentUserId);
      const otherUser = this.getUser(targetId);
      if (!otherUser) throw new Error("user not found");
      currentUser.followingCount++;
      currentUser.following.unshift(targetId);
      otherUser.followerCount++;
      otherUser.followers.unshift(currentUserId);
      this.notify(targetId, currentUserId, "follow");
    },

    unfollowUser(currentUserId, targetId) {
      const currentUser = this.getUser(currentUserId);
      const otherUser = this.getUser(targetId);
      if (!otherUser) throw new Error("user not found");
      currentUser.followingCount--;
      currentUser.following.splice(currentUser.following.indexOf(targetId, 1));
      otherUser.followerCount--;
      otherUser.followers.splice(otherUser.followers.indexOf(currentUserId, 1));
      currentUser.localTimeline = currentUser.localTimeline.filter(
        (lt) => lt.fromUserId !== targetId
      );
    },

    isFollowingUser(userId, targetId) {
      const user = this.getUser(userId);
      return user.following.includes(targetId);
    },

    canFollow(currentUser, targetId) {
      if (currentUser.id == targetId) return false;
      return !currentUser.following.includes(targetId);
    },

    canUnfollow(currentUser, targetId) {
      if (currentUser.id == targetId) return false;
      return currentUser.following.includes(targetId);
    },

    notify(toUserId, fromUserId, type, tweetId = null) {
      const currentUser = this.getUser(toUserId);
      if (!currentUser) throw new Error("user not found");
      const newNotif = { fromUser: fromUserId, type, tweetId };
      if (
        currentUser.newNotifications.filter(
          (n) =>
            n.fromUser === newNotif.fromUser &&
            n.type === newNotif.type &&
            n.tweetId === newNotif.tweetId
        ).length === 0 &&
        currentUser.oldNotifications.filter(
          (n) =>
            n.fromUser === newNotif.fromUser &&
            n.type === newNotif.type &&
            n.tweetId === newNotif.tweetId
        ).length === 0
      ) {
        // don't spam the same notif (idk a cleaner way to do that sorry)
        currentUser.newNotifications.unshift(newNotif);
      }
    },

    clearNotifications(userId) {
      const currentUser = this.getUser(userId);
      if (!currentUser) throw new Error("user not found");
      if (currentUser.newNotifications.length === 0) return;
      currentUser.oldNotifications = [
        ...currentUser.newNotifications,
        ...currentUser.oldNotifications,
      ];
      currentUser.newNotifications = [];
    },

    deleteReplyNotification(userId, tweetId) {
      const currentUser = this.getUser(userId);
      if (!currentUser) throw new Error("user not found");
      if (
        currentUser.newNotifications.filter((n) => n.tweetId === tweetId)
          .length > 0
      ) {
        const index = currentUser.newNotifications.findIndex(
          (n) => n.tweetId === tweetId
        );
        currentUser.newNotifications.splice(index, 1);
      }
      if (
        currentUser.oldNotifications.filter((n) => n.tweetId === tweetId)
          .length > 0
      ) {
        const index = currentUser.oldNotifications.findIndex(
          (n) => n.tweetId === tweetId
        );
        currentUser.oldNotifications.splice(index, 1);
      }
    },

    hasNewNotifications(userId) {
      const currentUser = this.getUser(userId);
      if (!currentUser) throw new Error("user not found");
      return currentUser.newNotifications.length > 0;
    },

    getAllNotifications(userId) {
      const currentUser = this.getUser(userId);
      if (!currentUser) throw new Error("user not found");
      return [...currentUser.newNotifications, ...currentUser.oldNotifications];
    },

    isNewNotification(userId, notif) {
      const currentUser = this.getUser(userId);
      if (!currentUser) throw new Error("user not found");
      return currentUser.newNotifications.filter((n) => n === notif).length > 0;
    },

    tweetIsNewNotification(userId, tweetId) {
      const currentUser = this.getUser(userId);
      if (!currentUser) throw new Error("user not found");
      return (
        currentUser.newNotifications.filter((n) => n.tweetId === tweetId)
          .length > 0
      );
    },
  },
});
