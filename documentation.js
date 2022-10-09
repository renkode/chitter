//
//
/*BASED ON TWITTER'S DEVELOPER API
https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/tweet

Tweet Object
example url: https://twitter.com/i/web/status/1212092628029698048 or 
https://twitter.com/TwitterDev/status/1212092628029698048*/

// global tweet collection
const tweetObj = {
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

// public user collection
const userObj = {
  userData: {
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
    followData: {
      followingCount: NUMBER,
      followerCount: NUMBER,
    },
    tweetCount: NUMBER,
    pinnedTweetId: STRING,
    createdAt: DATE,
    quote,
  },
  tweetData: {
    authoredTweets: [
      {
        id: STRING,
        type: STRING, // status | reply | quote
        containsMedia: BOOLEAN,
      },
    ],
    retweets: [
      {
        id: STRING,
        authorId: STRING,
        type: STRING, // status | reply | retweet | quote
        containsMedia: BOOLEAN,
      },
    ],
    likedTweets: [STRING],
  },
  followData: {
    followingUserIds: [STRING],
    followerUserIds: [STRING],
    localTimeline: [
      // user can read, everyone else can only push a status/rt/qrt update
      {
        id: STRING,
        authorId: STRING,
        type: STRING, // status | reply | retweet | quote
        containsMedia: BOOLEAN,
      },
    ],
  },
};

const userState = {}; // same as above
const appState = {
  path: STRING,
  view: STRING, //  timeline (default) | profile | full-tweet | search
  profileViewMode: STRING, // TWEETS (default) | TWEETS_AND_REPLIES | MEDIA | LIKES
  showModal: BOOLEAN,
  modalType: STRING, // status | reply | quote
  NUM_INITIAL_TWEETS: NUMBER, // 5
  NUM_LOAD_OLDER_TWEETS: NUMBER, // 3
};

const functions = {
  account: {
    signUp: () => {},
    createAccount: () => {},
    // REQUIRE AUTHORIZATION
    login: () => {}, // set userState on login
    logout: () => {},
    setUserState: (id) => {},
    updateProfile: () => {}, // validate
    updateAvatar: () => {}, // upload avatar/header changes to firestore
    updateHeader: () => {}, // upload avatar/header changes to firestore
    updateAccountData: async () => {}, // if authorized and profile is valid
  },
  app: {
    //navigation
    goto: (path) => {},
    setView: (view) => {}, //  timeline (default) | profile | full-tweet | search

    //tweets
    newTweet: (mode) => {}, // mode: status | reply | qrt
    clearNewTweet: () => {}, // on exiting modal
    postTweet: async (tweetId) => {}, // update tweetCount, global tweet collection, localTimelines on success
    deleteTweet: async (tweetId) => {}, // REQUIRE AUTHORIZATION
    fetchTweet: async (tweetId, queryType) => {}, // query: all | userdata | tweetdata | followdata
    fullViewTweet: (tweetId) => {}, // show replies from either direction
    loadReplies: async (tweetId) => {},
    like: (tweetId) => {}, // MUST BE SIGNED IN
    retweet: (tweetId) => {}, // MUST BE SIGNED IN, push retweet to all follower's localTimelines
    reply: (tweetId) => {}, // MUST BE SIGNED IN

    //users
    fetchUser: async (userId, queryType) => {}, // query: all | userdata | tweetdata | followdata
    followUser: (userId) => {}, // MUST BE SIGNED IN
    unfollowUser: (userId) => {}, // MUST BE SIGNED IN
    setProfileViewMode: (mode) => {}, // TWEETS (default) | TWEETS_AND_REPLIES | MEDIA | LIKES
    displayUserTweets: (userId, mode) => {}, // based on above

    //timeline
    fetchGlobalTimeline: async () => {}, // no rts or replies
    showInitialGlobalTimeline: (numTweets) => {},
    fetchLocalTimeline: async () => {}, // latest tweets are at end of array, must be signed in
    showInitialLocalTimeline: (numTweets) => {}, // must be signed in
    loadOlderTweets: async (numTweets) => {},
    updateTimeline: async () => {}, // websocket?

    //search
    querySearch: async (input) => {},
    showSearchResults: () => {},
  },
};

// component hierarchy
const components = {
  app: {
    navigation: {}, // 275px, hide labels @ 1280px, dock menu to bottom @ 500px
    sidebar: {
      // max width 350px
      searchBar,
      signUp, // if logged out
      mediaGallery, // view = profile
      fakeTrending,
      footer,
    }, // hide @ 1000px

    // different views, max width is 600px
    main: {
      timeline: {
        tweetList: {
          tweet: {
            avatar,
            authorInfo: {
              avatar, //  48x48, on profile min width is 48px up to 25% of profile width
              name,
              username,
              timeSincePosted, // regular view
              userOptions, // follow
              replyTo, // optional
              text,
              media,
              metrics, // regular or fullview mode
              creationDate, // fullview mode
              onClick: functions.app.fullViewTweet(),
            },
          },
        },
      },
      profile: {
        mediaGallery: {},
      },
      tweet: {},
      search: {},
    },

    modal: {},
  },
};

const notes = [
  "fade in loaded tweets on scroll down",
  "other features: notifications, DMs",
  "collection for followed user tweets?",
];
