import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [
      {
        id: "1",
        isAdmin: true,
        name: "🍆",
        username: "renkode",
        description: "lorem ipsum #cool",
        location: "nowhere",
        website: "https://github.com/renkode/",
        birthday: "June 9",
        avatarUrl:
          "https://pbs.twimg.com/profile_images/1566523505155268608/AEzCad1D_400x400.png",
        headerUrl:
          "https://pbs.twimg.com/media/Fe8wtxmVQAAkipE?format=jpg&name=large",
        followingCount: 0,
        followerCount: 1,
        tweetCount: 3,
        timestamp: "2019-06-03T23:12:08.000Z",
        authoredTweets: [
          {
            id: "2",
            type: "status",
            containsMedia: true,
          },
          {
            id: "3",
            type: "status",
            containsMedia: true,
          },
          {
            id: "4",
            type: "status",
            containsMedia: true,
          },
          {
            id: "5",
            type: "reply",
            timestamp: "2022-10-24T21:21:51.181Z",
            fromUserId: "1",
          },
        ],
        retweets: [],
        likes: [],
        following: [],
        followers: ["2"],
        localTimeline: [
          {
            id: "5",
            type: "reply",
            timestamp: "2022-10-24T21:21:51.181Z",
            fromUserId: "1",
          },
          {
            id: "2",
            type: "status",
            timestamp: "2022-10-24T21:21:54.735Z",
            fromUserId: "1",
          },
          {
            id: "3",
            type: "status",
            timestamp: "2022-10-24T21:21:53.427Z",
            fromUserId: "1",
          },
          {
            id: "4",
            type: "status",
            timestamp: "2022-10-24T21:21:51.181Z",
            fromUserId: "1",
          },
        ],
        newNotifications: [{ fromUser: "2", type: "follow", tweet: null }], // types: follow, like, retweet, reply
        oldNotifications: [],
      },
      {
        id: "2",
        name: "← bearer of the curse",
        username: "mikulover",
        description: "Randomly just made some toast pyon★. I am a freak pyon★",
        location: "h",
        website: "",
        birthday: "",
        avatarUrl:
          "https://pbs.twimg.com/profile_images/1584210745247600643/mQ9zmvni_400x400.jpg",
        headerUrl:
          "https://pbs.twimg.com/profile_banners/840764077681061889/1646410641/1500x500",
        followingCount: 1,
        followerCount: 0,
        tweetCount: 1,
        timestamp: "2020-02-03T23:12:08.000Z",
        authoredTweets: [
          {
            id: "1",
            type: "reply",
            containsMedia: true,
          },
        ],
        retweets: [],
        likes: [],
        following: ["1"],
        followers: [],
        localTimeline: [],
        newNotifications: [],
        oldNotifications: [],
      },
    ],
  }),
  getters: {}, // can't be async so
  actions: {
    getUser(id) {
      return this.users.filter((user) => user.id == id)[0];
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

    addTweet(userId, tweetId, type = "status", containsMedia = false) {
      const user = this.getUser(userId);
      user.authoredTweets.unshift({
        id: tweetId,
        type,
        containsMedia,
      });
    },

    removeTweet(userId, tweetId) {
      const user = this.getUser(userId);
      const tweetIndex = user.authoredTweets.findIndex((t) => t.id == tweetId);
      user.authoredTweets.splice(tweetIndex, 1);
    },

    addRetweet(userId, tweetId) {
      const user = this.getUser(userId);
      user.retweets.push({ id: tweetId, timestamp: new Date().toISOString() });
    },

    removeRetweet(userId, tweetId) {
      const user = this.getUser(userId);
      const tweetIndex = user.retweets.findIndex((t) => t.id == tweetId);
      user.retweets.splice(tweetIndex, 1);
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
      const tweetIndex = user.localTimeline.findIndex((t) => t.id == tweetId);
      user.localTimeline.splice(tweetIndex, 1);
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

    replyIsNewNotification(userId, tweetId) {
      const currentUser = this.getUser(userId);
      if (!currentUser) throw new Error("user not found");
      return (
        currentUser.newNotifications.filter((n) => n.tweetId === tweetId)
          .length > 0
      );
    },
  },
});
