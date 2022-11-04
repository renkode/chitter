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

//const querySnapshot = await getDocs(collection(db, "tweets"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });

async function delay(time) {
  await new Promise((res) => {
    setTimeout(() => {
      //console.log(res);
    }, time);
  });
}

onMounted(() => {
  delay(0);
});
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
