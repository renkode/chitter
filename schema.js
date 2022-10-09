/*BASED ON TWITTER'S DEVELOPER API
https://developer.twitter.com/en/docs/twitter-api/data-dictionary/object-model/tweet

Tweet Object
example url: https://twitter.com/i/web/status/1212092628029698048 or 
https://twitter.com/TwitterDev/status/1212092628029698048*/

const tweetTypes = {
  data: {
    id: STRING,
    type: STRING /* standalone | reply | quote */,
    text: STRING, // max 250 chars
    hashtags: [STRING],
    media: [
      {
        url: STRING,
        // MAX 4, FILE SIZE LIMIT AT 5 MB?
      },
    ],
    authorId: STRING,
    metrics: {
      replyCount: NUMBER,
      retweetCount: NUMBER,
      likeCount: NUMBER,
      quoteCount: NUMBER,
    },
    metricIds: {
      retweetUserIds: [STRING],
      quoteTweetId: [STRING],
      likeUserIds: [STRING],
    },
    createdAt: DATE,
    replyToUserId: STRING | NULL,
    quotingTweetId: STRING,
  },
  replies: [
    {
      isByAuthor: BOOLEAN,
      id: STRING,
    },
  ],
};

const userTypes = {
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
      profileImgUrl: STRING,
      headerImgUrl: STRING,
    },
    metrics: {
      followingCount: NUMBER,
      followerCount: NUMBER,
    },
    pinnedTweetId: STRING,
    createdAt: DATE,
  },
};
