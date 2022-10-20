<script setup>
import { onMounted } from "vue";
import { useTweetStore } from "@/stores/tweets.js";
import TweetListSC from "./TweetListSC.vue";
import db from "../firebase.js";

import { collection, getDocs } from "firebase/firestore";

const querySnapshot = await getDocs(collection(db, "tweets"));
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

const store = useTweetStore();
</script>

<template>
  <div class="tweet-list-container">
    <TweetListSC :tweets="store.tweets" />
  </div>
</template>

<style></style>
