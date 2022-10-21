<script setup>
import { ref, watch, onMounted, computed } from "vue";
import { useAppStore } from "@/stores/app.js";
import { useTweetStore } from "@/stores/tweets.js";
import { useUsersStore } from "@/stores/users.js";
import TweetListSC from "./TweetListSC.vue";
import db from "../firebase.js";

import { collection, getDocs } from "firebase/firestore";

const app = useAppStore();
const tweets = useTweetStore();
const users = useUsersStore();
const localTweets = ref(null);
const currentUser = computed(() => users.getUser(app.currentId));

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

// need to put pinia state in arrow function for it to work
// currentUser.value.localTimeline not working but idk if i should bother lol
watch([() => app.view, () => currentUser.value.localTimeline], () => {
  if (app.view === "timeline") {
    localTweets.value = users
      .getUser(app.currentId)
      .localTimeline.map((localTweet) => tweets.getTweet(localTweet.id));
  }
});

onMounted(() => {
  delay(0);
});
</script>

<template>
  <div class="tweet-list-container">
    <TweetListSC v-if="app.view === 'home'" :tweets="tweets.tweets" />
    <TweetListSC
      v-else-if="app.view === 'timeline' && currentUser"
      :tweets="localTweets"
    />
  </div>
</template>

<style></style>
