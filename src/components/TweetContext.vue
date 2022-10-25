<script setup>
import { defineProps, ref, computed, watch, onMounted } from "vue";
import TweetCard from "./TweetCard.vue";
import TweetCardFull from "./TweetCardFull.vue";
import { useAppStore } from "@/stores/app.js";
import { useUsersStore } from "@/stores/users.js";
import { useTweetStore } from "@/stores/tweets.js";

const app = useAppStore();
const users = useUsersStore();
const store = useTweetStore();
// const props = defineProps(["tweet"]);
const tweet = computed(() => store.getTweet(app.viewTweetId));
const previousTweets = ref([]);
const replies = computed(
  () => tweet.value.repliesFrom.map((id) => store.getTweet(id)) || []
);

const fetchPreviousTweets = () => {
  previousTweets.value = [];
  let currentTweet = tweet.value;
  while (currentTweet.replyingToTweet) {
    console.log("huh");
    try {
      let lastTweet = store.getTweet(currentTweet.replyingToTweet);
      previousTweets.value.unshift(lastTweet);
      currentTweet = lastTweet;
      console.log(currentTweet, previousTweets.value);
    } catch {
      throw new Error("loop gone wild");
    }
  }
};

watch(
  () => app.viewTweetId,
  () => {
    fetchPreviousTweets();
  }
);

onMounted(() => {
  fetchPreviousTweets();
});
</script>

<template>
  <div class="tweet-list-container">
    <template v-if="previousTweets.length > 0">
      <TweetCard
        v-for="tweet in previousTweets"
        :key="tweet.id"
        :id="tweet.id"
        :user="users.getUser(tweet.authorId)"
        :tweet="tweet"
        :type="tweet.type"
        :retweetedBy="tweet.retweetedBy"
      />
    </template>
    <template v-if="tweet">
      <TweetCardFull
        :id="tweet.id"
        :user="users.getUser(tweet.authorId)"
        :tweet="tweet"
        :type="tweet.type"
    /></template>

    <template v-if="replies && replies.length > 0">
      <TweetCard
        v-for="tweet in replies"
        :key="tweet.id"
        :id="tweet.id"
        :user="users.getUser(tweet.authorId)"
        :tweet="tweet"
        :type="tweet.type"
        :retweetedBy="tweet.retweetedBy"
      />
    </template>
  </div>
</template>

<style scoped>
@media screen and (max-width: 700px) {
  .tweet-list-container {
    max-width: 600px;
    width: 100%;
  }
}
</style>
