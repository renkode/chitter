<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useAppStore } from "@/stores/app.js";
import { useTweetStore } from "@/stores/tweets.js";
import ComposeTweet from "./subcomponents/ComposeTweet.vue";
import TweetList from "./lists/TweetList.vue";
import { db } from "@/firebase.js";
import { collection, getDocs, query, where } from "firebase/firestore";

const store = useTweetStore();
const tweets = computed(() => store.tweets);
const pending = ref(true);

async function fetchTweets() {
  store.setTweets([]);
  const twts = [];
  const q = query(collection(db, "tweets"), where("type", "!=", "reply"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    twts.push(Object.assign(doc.data()));
  });
  store.setTweets(store.sortByTimestamp(twts));
  pending.value = false;
}

onMounted(() => fetchTweets());

watch(tweets, () => {
  store.sortTweets();
});
</script>

<template>
  <div>
    <ComposeTweet />
    <div class="tweet-list-container">
      <TweetList :tweets="tweets" :pending="pending" />
    </div>
  </div>
</template>

<style scoped>
div {
  width: 100%;
}
</style>
