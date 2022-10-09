/*BASED ON TWITTER'S DEVELOPER API
https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/tweet

Tweet Object
example url: https://twitter.com/i/web/status/1212092628029698048 or 
https://twitter.com/TwitterDev/status/1212092628029698048*/

const tweetInterface = {
  data: {
    id: STRING,
    type: STRING, // status | reply | quote
    text: STRING, // max 250 chars
    hashtags: [STRING],
    media: [
      {
        url: STRING, // max 4, max file size 5 mb
      },
    ],
    authorId: STRING,
    metrics: {
      replyCount: NUMBER,
      retweetCount: NUMBER,
      likeCount: NUMBER,
      quoteCount: NUMBER,
    },
    createdAt: DATE,
    replyToUserIds: [STRING] | NULL,
    replyToTweetId: STRING | NULL,
    quotingTweetId: STRING | NULL, // must parse twitter link from body
  },
  references: {
    repliesFrom: [
      {
        isFromAuthor: BOOLEAN,
        id: STRING,
      },
    ],
    retweetsFrom: [STRING],
    quotesFrom: [STRING],
    likesFrom: [STRING],
  },
};

const userInterface = {
  data: {
    id: STRING,
    name: STRING, // max 15 chars
    username: STRING, // no spaces or special chars, max 15 chars
    biography: {
      description: {
        text: STRING, // max 160 chars
        hashtags: [STRING],
      },
      location: STRING,
      website: STRING,
    },
    imgs: {
      avatarUrl: STRING,
      headerUrl: STRING,
    },
    metrics: {
      followingCount: NUMBER,
      followerCount: NUMBER,
    },
    metricIds: {
      followingUserIds: [STRING],
      followerUserIds: [STRING],
    },
    allTweets: [
      {
        id: STRING,
        type: STRING, // status | reply | retweet | quote
        containsMedia: BOOLEAN,
      },
    ],
    likedTweets: [STRING],
    pinnedTweetId: STRING,
    createdAt: DATE,
  },
};

//TO-DO
const functions = [
  (account = {
    signUp: () => {},
    createAccount: () => {},
    login: () => {},
    logout: () => {},
    updateUsername: () => {},
    updateAvatar: () => {},
    updateHeader: () => {},
    updateProfile: () => {},
    fetchProfile: (userId) => {},
  }),
  (app = {
    //tweets
    newTweet: (mode) => {}, // mode: status | reply | qrt
    postTweet: (tweetId) => {},
    deleteTweet: (tweetId) => {},
    fetchTweet: (tweetId) => {},
    viewTweet: (tweetId) => {}, // show replies from either direction
    loadReplies: (tweetId) => {},
    like: (tweetId) => {},
    retweet: (tweetId) => {},
    reply: (tweetId) => {},
    //users
    fetchUser: (userId) => {},
    followUser: (userId) => {},
    unfollowUser: (userId) => {},
    showUserTweets: (userId) => {},
    showUserTweetsAndReplies: (userId) => {},
    showUserMedia: (userId) => {},
    showUserLikes: (userId) => {},
    //timeline
    fetchGlobalTweets: () => {},
    showGlobalTweets: () => {}, // do not show rts
    fetchFollowedTweets: () => {}, // aggregate all followed user tweets & sort by date
    showFollowedTweets: () => {}, // must be signed in
    updateTimeline: () => {}, // websocket?
    //search
    querySearch: (input) => {},
    showSearchResults: () => {},
  }),
];
