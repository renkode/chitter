import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [
      {
        id: "1",
        name: "🍆",
        username: "renkode",
        description: "lorem ipsum #cool",
        location: "nowhere",
        website: "https://github.com/renkode/",
        birthday: "June 9, 2021",
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
        ],
        retweets: [],
        likes: [],
        following: [],
        followers: ["2"],
        localTimeline: [],
      },
      {
        id: "2",
        name: "← bearer of the curse",
        username: "mikulover",
        description: "Randomly just made some toast pyon★. I am a freak pyon★",
        location: "h",
        website: null,
        birthday: null,
        avatarUrl:
          "https://pbs.twimg.com/profile_images/1573329090865778690/Nu2FIMbX_400x400.jpg",
        headerUrl:
          "https://pbs.twimg.com/profile_banners/840764077681061889/1646410641/1500x500",
        followingCount: 1,
        followerCount: 0,
        tweetCount: 1,
        timestamp: "2020-02-03T23:12:08.000Z",
        authoredTweets: [
          {
            id: "1",
            type: "status",
            containsMedia: true,
          },
        ],
        retweets: [],
        likes: [],
        following: ["1"],
        followers: [],
        localTimeline: [],
      },
    ],
  }),
  // optional getters
  getters: {},
  // optional actions
  actions: {
    getUser(id) {
      return this.users.filter((user) => user.id == id)[0];
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
    addToLocalTimeline(userId, tweetId, type, timestamp) {
      const user = this.getUser(userId);
      user.localTimeline.unshift({
        id: tweetId,
        type,
        timestamp,
        fromUserId: userId,
      });
    },
    addToAllFollowerTimelines(currentUserId, tweetId, type, timestamp) {
      const user = this.getUser(currentUserId);
      user.followers.forEach((follower) => {
        this.addToLocalTimeline(follower, tweetId, type, timestamp);
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
    },
    unfollowUser(currentUserId, targetId) {
      const currentUser = this.getUser(currentUserId);
      const otherUser = this.getUser(targetId);
      if (!otherUser) throw new Error("user not found");
      currentUser.followingCount--;
      currentUser.following.splice(currentUser.following.indexOf(targetId, 1));
      otherUser.followerCount--;
      otherUser.followers.splice(otherUser.followers.indexOf(currentUserId, 1));
    },
  },
});
