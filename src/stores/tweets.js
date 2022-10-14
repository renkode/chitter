import { defineStore } from "pinia";

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
        data: {
          id: 1,
          type: "status", // status | reply | quote
          text: "I think most people underestimate how #little being 5’4 is. I’m literally hopping around on my phone rn to type tjis out #girl", // max 250 chars
          hashtags: ["little", "girl"],
          media: [
            "https://pbs.twimg.com/media/Fe_VPZRXwAcQJ8r?format=jpg&name=large",
          ],
          authorId: 1,
          metrics: {
            replyCount: 4,
            retweetCount: 329,
            likeCount: 1438,
            quoteCount: 0,
          },
          createdAt: iso,
          replyingTo: null,
          quoting: null,
        },
        references: {
          repliesFrom: [], // user and tweet ids
          retweetsFrom: [], // user ids
          quotesFrom: [], // user and tweet ids
          likesFrom: [], // user ids
        },
      },
      {
        data: {
          id: 2,
          type: "status", // status | reply | quote
          text: "lmao has survived the transition from early internet, and yet rofl has not. Much to consider. https://oh-vue-icons.js.org/", // max 250 chars
          hashtags: null,
          media: [
            "https://pbs.twimg.com/media/Fe_7yHVUcAUwGVg?format=jpg&name=large",
            "https://pbs.twimg.com/media/Fe2FJ3vUcAA_6zX?format=jpg&name=large",
          ],
          authorId: 1,
          metrics: {
            replyCount: 0,
            retweetCount: 12,
            likeCount: 98,
            quoteCount: 0,
          },
          createdAt: "2022-10-13T07:58:03.484Z",
          replyingTo: null,
          quoting: null,
        },
        references: {
          repliesFrom: [], // user and tweet ids
          retweetsFrom: [], // user ids
          quotesFrom: [], // user and tweet ids
          likesFrom: [], // user ids
        },
      },
      {
        data: {
          id: 3,
          type: "status", // status | reply | quote
          text: "38 y/o gf who still says “sweet summer child”: they’re debating whether PAWG is a slur and i just can’t with the hellsite today.\nMe [heard “PAWG” and got so hard i got nauseous]: i think i hauve Covid", // max 250 chars
          hashtags: null,
          media: [
            "https://pbs.twimg.com/media/Fe5WTVmXoAITutA?format=jpg&name=large",
            "https://pbs.twimg.com/media/Fe5WT7-XoBoEEWt?format=jpg&name=large",
            "https://pbs.twimg.com/media/Fe0r_ZgWAAEN8px?format=jpg&name=large",
          ],
          authorId: 1,
          metrics: {
            replyCount: 0,
            retweetCount: 0,
            likeCount: 6,
            quoteCount: 0,
          },
          createdAt: "2021-03-24T15:54:32-0400",
          replyingTo: null,
          quoting: null,
        },
        references: {
          repliesFrom: [], // user and tweet ids
          retweetsFrom: [], // user ids
          quotesFrom: [], // user and tweet ids
          likesFrom: [], // user ids
        },
      },
      {
        data: {
          id: 4,
          type: "status", // status | reply | quote
          text: "aheem heem", // max 250 chars
          hashtags: null,
          media: [
            "https://pbs.twimg.com/media/Fb6m91SWAAMsMeb?format=jpg&name=large",
            "https://pbs.twimg.com/media/Fb6nCfbXwAMLCBi?format=jpg&name=large",
            "https://pbs.twimg.com/media/Fb6nEFlXoAAE98n?format=jpg&name=large",
            "https://pbs.twimg.com/media/Fb6nFGsWIAM9e-R?format=jpg&name=large",
          ],
          authorId: 1,
          metrics: {
            replyCount: 1,
            retweetCount: 84,
            likeCount: 712,
            quoteCount: 0,
          },
          createdAt: "2021-03-24T15:54:32-0400",
          replyingTo: null,
          quoting: null,
        },
        references: {
          repliesFrom: [], // user and tweet ids
          retweetsFrom: [], // user ids
          quotesFrom: [], // user and tweet ids
          likesFrom: [], // user ids
        },
      },
    ],
  }),
  // optional getters
  getters: {},
  // optional actions
  actions: {
    addLike(id, fromUserId) {
      const isId = (obj) => obj.data.id === id;
      this.tweets[this.tweets.findIndex(isId)].data.metrics.likeCount++;
      this.tweets[this.tweets.findIndex(isId)].references.likesFrom.push(
        fromUserId
      );
    },
    removeLike(id, fromUserId) {
      const isId = (obj) => obj.data.id === id;
      const isUserId = (obj) => obj.data.authorId === fromUserId;
      this.tweets[this.tweets.findIndex(isId)].data.metrics.likeCount--;
      this.tweets[this.tweets.findIndex(isId)].references.likesFrom.splice(
        this.tweets[this.tweets.findIndex(isUserId)],
        1
      );
    },
    // getTimeSinceCreation(id) {
    //   console.log(this.tweets);
    //   const time = this.tweets.filter((t) => t.data.id === id)[0].data
    //     .createdAt;
    //   console.log(time);
    //   if (!time) return "Unknown";
    //   return formatDateMixin.methods.formatDate(time);
    // },
  },
});
