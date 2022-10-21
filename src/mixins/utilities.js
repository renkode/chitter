const getMediaClass = (images) => {
  if (!images || images.length === 0) return;
  switch (images.length) {
    case 1:
      return "one-img";
    case 2:
      return "two-img";
    case 3:
      return "three-img";
    case 4:
      return "four-img";
    default:
      return "";
  }
};

// const addTweet = (userId, tweetId, type, text, media, replyingTo) => {
//   const containsMedia = media.length > 0 ? true : false;
//   tweets.addTweet(type, text, media, userId, replyingTo);
//   users.addTweet(userId, tweetId, type, containsMedia);
//   // TO DO: add to local timeline
// };

// const removeTweet = (userId, tweetId) => {
//   users.removeTweet(userId, tweetId);
//   tweets.removeTweet(tweetId);
//   // TO DO: remove from local timeline
// };

// const addRetweet = (userId, tweetId) => {
//   tweets.addRetweet(tweetId, userId);
//   users.addRetweet(userId, tweetId);
//   // TO DO: add to local timeline
// };

// const removeRetweet = (userId, tweetId) => {
//   tweets.removeRetweet(tweetId, userId);
//   users.removeRetweet(userId, tweetId);
//   // TO DO: remove from local timeline
// };

// const addLike = (userId, tweetId) => {
//   tweets.addLike(tweetId, userId);
//   users.addLike(userId, tweetId);
// };

// const removeLike = (userId, tweetId) => {
//   tweets.removeLike(tweetId, userId);
//   users.removeLike(userId, tweetId);
// };

export { getMediaClass };
