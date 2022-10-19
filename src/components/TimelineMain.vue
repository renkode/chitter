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
  <div>
    <TweetListSC :tweets="store.tweets" />
  </div>
</template>

<style>
.main-wrapper {
  width: 600px;
  height: 100%;
  flex-grow: 0;
}

.timeline-wrapper {
  width: 600px;
  min-height: 99vh;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: rgba(255, 255, 255, 0.25) 1px solid;
  border-top: 0;
  border-bottom: 0;
}

@media screen and (max-width: 1005px) {
  .main-wrapper {
    flex-grow: 0;
    width: 100%;
  }
}

@media screen and (max-width: 700px) {
  .main-wrapper,
  .timeline-wrapper,
  .compose-tweet-container {
    width: 100%;
  }
}

@media screen and (max-height: 500px) {
  .main-wrapper {
    display: flex;
    justify-content: center;
  }
}

@media screen and (max-width: 500px) {
  .timeline-wrapper {
    border: rgba(255, 255, 255, 0) 1px solid;
  }
}
</style>
