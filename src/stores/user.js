import { defineStore } from "pinia";

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useUserStore = defineStore("user", {
  // a function that returns a fresh state
  state: () => ({
    id: "1",
    name: "among us forever 🍆",
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
    followerCount: 0,
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
    retweets: [
      {
        id: "1",
        timestamp: "2019-06-03T23:12:08.000Z",
      },
    ],
    likedTweets: [],
    following: ["2"],
    followers: ["2"],
    localTimeline: [],
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
