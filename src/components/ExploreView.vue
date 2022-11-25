<script setup>
import { ref, computed, onBeforeMount } from "vue";
import { useTweetStore } from "@/stores/tweets.js";
import ComposeTweet from "./subcomponents/ComposeTweet.vue";
import TweetList from "./lists/TweetList.vue";
import LoadTweets from "./subcomponents/LoadTweets.vue";
import { db } from "@/firebase.js";
import { collection, getDocs, query, where } from "firebase/firestore";

const store = useTweetStore();
const tweets = computed(() => store.tweets);
const rawTweets = ref(await getInitialTweets());
const pending = ref(true); // initial load
const fetching = ref(true);

async function getInitialTweets() {
  const twts = [];
  const querySnapshot = await getDocs(
    query(collection(db, "tweets"), where("type", "!=", "reply"))
  );
  querySnapshot.forEach((doc) => twts.push(Object.assign(doc.data())));
  return store.sortByTimestamp(twts);
  // NOTE: can't use orderby with different field so i still have to download the whole collection anyway lol.
}

function fetchTweets(arr) {
  fetching.value = true;
  arr.forEach((twt) => {
    store.tweets.push(twt);
  });
  pending.value = false;
  fetching.value = false;
}

onBeforeMount(async () => {
  store.setTweets([]);
  fetchTweets(rawTweets.value.slice(0, store.fetchLimit));
});
</script>

<template>
  <div>
    <ComposeTweet />
    <div class="tweet-list-container">
      <TweetList :tweets="tweets" :pending="pending" />
      <LoadTweets
        :isFetching="fetching"
        :rawTweets="rawTweets.slice(store.fetchLimit)"
        :fetch="fetchTweets"
      />
    </div>
  </div>
</template>

<style scoped>
div {
  width: 100%;
}
</style>
