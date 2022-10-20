import { defineStore } from "pinia";

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [
      {
        userData: {
          id: "1",
          name: "🍆",
          username: "renkode",
          biography: {
            description: "lorem ipsum #cool",
            location: "nowhere",
            website: "https://github.com/renkode/",
            birthday: "June 9, 2021",
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
      },
      {
        userData: {
          id: "2",
          name: "← bearer of the curse",
          username: "mikulover",
          biography: {
            description: "gfdjgdjskg",
            location: "gdshfdh",
            website: null,
            birthday: null,
          },
          imgs: {
            avatarUrl:
              "https://pbs.twimg.com/profile_images/1573329090865778690/Nu2FIMbX_400x400.jpg",
            headerUrl:
              "https://pbs.twimg.com/profile_banners/840764077681061889/1646410641/1500x500",
          },
          followData: {
            followingCount: 0,
            followerCount: 0,
          },
          tweetCount: 1,
          createdAt: "2020-02-03T23:12:08.000Z",
        },
        tweetData: {
          authoredTweets: [
            {
              id: "1",
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
      },
    ],
  }),
  // optional getters
  getters: {},
  // optional actions
  actions: {
    getUserData(id) {
      return this.users.filter((user) => user.userData.id == id)[0].userData;
    },
  },
});
