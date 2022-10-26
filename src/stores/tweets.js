import { defineStore } from "pinia";
import { useUsersStore } from "@/stores/users";

const date = new Date();
const iso = date.toISOString();

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useTweetStore = defineStore("tweets", {
  // a function that returns a fresh state
  state: () => ({
    // STATE MUST BE AN OBJECT JFC
    tweets: [
      {
        id: 5,
        type: "reply", // status | reply | quote
        text: "nice", // max 250 chars
        media: [],
        authorId: 1,
        replyCount: 0,
        retweetCount: 0,
        likeCount: 1,
        quoteCount: 0,
        timestamp: iso,
        replyingToTweet: 1,
        replyingToUser: 2,
        quoting: null,
        repliesFrom: [], // user and tweet ids
        retweetsFrom: [], // user ids
        quotesFrom: [], // user and tweet ids
        likesFrom: [2], // user ids
      },
      {
        id: 1,
        type: "reply", // status | reply | quote
        text: "@renkode I think most people underestimate how #little being 5’4 is. I’m literally hopping around on my phone rn to type tjis out", // max 250 chars
        media: [
          "https://pbs.twimg.com/media/Fe_VPZRXwAcQJ8r?format=jpg&name=large",
        ],
        authorId: 2,
        replyCount: 4,
        retweetCount: 329,
        likeCount: 1438,
        quoteCount: 0,
        timestamp: iso,
        replyingToTweet: null,
        replyingToUser: 1,
        quoting: null,
        repliesFrom: [5], // user and tweet ids
        retweetsFrom: [], // user ids
        quotesFrom: [], // user and tweet ids
        likesFrom: [], // user ids
      },
      {
        id: 2,
        type: "status", // status | reply | quote
        text: "lmao has survived the transition from early internet, and yet rofl has not. Much to consider. https://oh-vue-icons.js.org/", // max 250 chars
        media: [
          "https://pbs.twimg.com/media/Fe_7yHVUcAUwGVg?format=jpg&name=large",
          "https://pbs.twimg.com/media/Fe2FJ3vUcAA_6zX?format=jpg&name=large",
        ],
        authorId: 1,
        replyCount: 0,
        retweetCount: 12,
        likeCount: 98,
        quoteCount: 0,
        timestamp: "2022-10-13T07:58:03.484Z",
        replyingToTweet: null,
        replyingToUser: null,
        quoting: null,
        repliesFrom: [], // user and tweet ids
        retweetsFrom: [], // user ids
        quotesFrom: [], // user and tweet ids
        likesFrom: [], // user ids
      },
      {
        id: 3,
        type: "status", // status | reply | quote
        text: "38 y/o gf who still says “sweet summer child”: they’re debating whether PAWG is a slur and i just can’t with the hellsite today.\n\nMe [heard “PAWG” and got so hard i got nauseous]: i think i hauve Covid", // max 250 chars
        media: [
          "https://pbs.twimg.com/media/Fe5WTVmXoAITutA?format=jpg&name=large",
          "https://pbs.twimg.com/media/Fe5WT7-XoBoEEWt?format=jpg&name=large",
          "https://pbs.twimg.com/media/Fe0r_ZgWAAEN8px?format=jpg&name=large",
        ],
        authorId: 1,
        replyCount: 0,
        retweetCount: 0,
        likeCount: 6,
        quoteCount: 0,
        timestamp: "2021-03-24T15:54:32-0400",
        replyingToTweet: null,
        replyingToUser: null,
        quoting: null,
        repliesFrom: [], // user and tweet ids
        retweetsFrom: [], // user ids
        quotesFrom: [], // user and tweet ids
        likesFrom: [], // user ids
      },
      {
        id: 4,
        type: "status", // status | reply | quote
        text: "uh-oh", // max 250 chars
        media: [
          "https://pbs.twimg.com/media/Fb6m91SWAAMsMeb?format=jpg&name=large",
          "https://pbs.twimg.com/media/Fb6nCfbXwAMLCBi?format=jpg&name=large",
          "https://pbs.twimg.com/media/Fb6nEFlXoAAE98n?format=jpg&name=large",
          "https://pbs.twimg.com/media/Fb6nFGsWIAM9e-R?format=jpg&name=large",
        ],
        authorId: 1,
        replyCount: 1,
        retweetCount: 84,
        likeCount: 712,
        quoteCount: 0,
        timestamp: "2021-03-24T15:54:30-0400",
        replyingToTweet: null,
        replyingToUser: null,
        quoting: null,
        repliesFrom: [], // user and tweet ids
        retweetsFrom: [], // user ids
        quotesFrom: [], // user and tweet ids
        likesFrom: [], // user ids
      },
    ],
  }),
  // optional getters
  getters: {},
  // optional actions
  actions: {
    getTweet(id) {
      return this.tweets.filter((t) => t.id == id)[0];
    },
    addLike(id, userId) {
      const tweet = this.tweets.filter((t) => t.id == id)[0];
      if (!tweet) throw new Error(`tweet id ${id} does not exist`);
      tweet.likeCount++;
      tweet.likesFrom.push(userId);

      const users = useUsersStore();
      users.addLike(userId, id);
    },
    removeLike(id, userId) {
      const tweet = this.tweets.filter((t) => t.id == id)[0];
      if (!tweet) throw new Error(`tweet id ${id} does not exist`);
      tweet.likeCount--;
      tweet.likesFrom.splice(tweet.likesFrom.indexOf(userId), 1);

      const users = useUsersStore();
      users.removeLike(userId, id);
    },
    hasLiked(id, userId) {
      const tweet = this.tweets.filter((t) => t.id == id)[0];
      if (!tweet) return false;
      return tweet.likesFrom.includes(userId);
    },
    addRetweet(id, userId) {
      const tweet = this.tweets.filter((t) => t.id == id)[0];
      if (!tweet) throw new Error(`tweet id ${id} does not exist`);
      tweet.retweetCount++;
      tweet.retweetsFrom.push(userId);

      const users = useUsersStore();
      users.addRetweet(userId, id);
      users.addToLocalTimeline(userId, id, "retweet", new Date().toISOString()); // self
      users.addToAllFollowerTimelines(
        userId,
        id,
        "retweet",
        new Date().toISOString()
      ); // followers
    },
    removeRetweet(id, userId) {
      const tweet = this.tweets.filter((t) => t.id == id)[0];
      if (!tweet) throw new Error("no such tweet");
      tweet.retweetCount--;
      tweet.retweetsFrom.splice(tweet.retweetsFrom.indexOf(userId), 1);

      const users = useUsersStore();
      users.removeRetweet(userId, id);
      users.removeFromLocalTimeline(userId, id); // self
      users.removeFromAllFollowerTimelines(userId, id); // followers
    },
    hasRetweeted(id, userId) {
      const tweet = this.tweets.filter((t) => t.id == id)[0];
      if (!tweet) return false;
      return tweet.retweetsFrom.includes(userId);
    },
    addTweet(
      type = "status",
      text = "",
      media = [],
      authorId,
      replyingToTweet = null,
      replyingToUser = null
    ) {
      const id = this.tweets.length + 1;
      const timestamp = new Date().toISOString();
      const newTweet = {
        id,
        type,
        text,
        media: [...media],
        authorId: authorId,
        replyCount: 0,
        retweetCount: 0,
        likeCount: 0,
        quoteCount: 0,
        timestamp,
        replyingToTweet: replyingToTweet,
        replyingToUser: replyingToUser,
        quoting: null,
        repliesFrom: [],
        retweetsFrom: [],
        quotesFrom: [],
        likesFrom: [],
      };
      this.tweets.unshift(newTweet);

      if (type === "reply" && replyingToTweet) {
        this.getTweet(replyingToTweet).repliesFrom.push(newTweet.id);
      }

      const users = useUsersStore();
      const containsMedia = media.length > 0 ? true : false;
      users.addTweet(authorId, newTweet.id, type, containsMedia);
      users.addToLocalTimeline(authorId, newTweet.id, type, timestamp); // self
      users.addToAllFollowerTimelines(authorId, newTweet.id, type, timestamp); // followers
    },
    removeTweet(id, userId) {
      const index = this.tweets.findIndex((t) => t.id === id);
      if (index < 0) throw new Error("no such tweet");
      const replyingToTweet = this.getTweet(this.tweets[index].replyingToTweet);
      if (replyingToTweet)
        replyingToTweet.repliesFrom = replyingToTweet.repliesFrom.filter(
          (replyId) => replyId !== id
        );
      this.tweets.splice(index, 1);

      const users = useUsersStore();
      users.removeTweet(userId, id);
      users.removeLike(userId, id);
      users.removeRetweet(userId, id);
      users.removeFromLocalTimeline(userId, id); // self
      users.removeFromAllFollowerTimelines(userId, id); // followers
    },
  },
});
