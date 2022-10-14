import { defineStore } from "pinia";

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useUserStore = defineStore("user", {
  // a function that returns a fresh state
  state: () => ({
    userData: {
      id: "1",
      name: "among us forever 🍆",
      username: "renkode",
      biography: {
        description: {
          text: "lorem ipsum #cool",
          hashtags: ["cool"],
        },
        location: "nowhere",
        website: "https://github.com/renkode/",
      },
      imgs: {
        avatarUrl:
          "https://pbs.twimg.com/profile_images/1566523505155268608/AEzCad1D_400x400.png",
        headerUrl:
          "https://pbs.twimg.com/media/Fe8wtxmVQAAkipE?format=jpg&name=large",
      },
      followData: {
        followingCount: 0,
        followerCount: 0,
      },
      tweetCount: 3,
      createdAt: "2019-06-03T23:12:08.000Z",
    },
    tweetData: {
      authoredTweets: [
        {
          id: "1",
          type: "status",
          containsMedia: true,
        },
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
      likedTweets: [],
    },
    followData: {
      followingUserIds: [],
      followerUserIds: [],
      localTimeline: [],
    },
  }),
  // optional getters
  getters: {
    // // getters receive the state as first parameter
    // doubleCounter: (state) => state.counter * 2,
    // // use getters in other getters
    // doubleCounterPlusOne() {
    //   return this.doubleCounter + 1
    // },
  },
  // optional actions
  actions: {
    // reset() {
    //   // `this` is the store instance
    //   this.counter = 0
    // },
    addTweet(id, type, containsMedia) {
      this.tweetData.authoredTweets.push({
        id,
        type,
        containsMedia,
      });
      this.userData.tweetCount++;
    },
    removeTweet(id) {
      this.tweetData.authoredTweets.splice(
        this.tweetData.authoredTweets.indexOf(id),
        1
      );
    },
  },
});
