<script setup>
import { onMounted, computed } from "vue";
import { useAppStore } from "@/stores/app.js";
import { useTweetStore } from "@/stores/tweets.js";
import ComposeTweet from "./subcomponents/ComposeTweet.vue";
import TweetList from "./lists/TweetList.vue";
import { collection, getDocs } from "firebase/firestore";

const app = useAppStore();
const store = useTweetStore();
const tweets = computed(() =>
  store.tweets.map((tweet) => ({ data: tweet, type: tweet.type }))
);
</script>

<template>
  <div>
    <ComposeTweet />
    <div class="tweet-list-container">
      <TweetList :tweets="tweets" />
    </div>
  </div>
</template>

<style scoped>
div {
  width: 100%;
}
</style>
