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
const currentUser = computed(() => users.getUser(app.currentId));
const localTweets = computed(() =>
  currentUser.value.localTimeline
    .map((localTweet) => tweets.getTweet(localTweet.id))
    .filter((t) => {
      if (t) return t;
    })
);

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
  <div class="tweet-list-container">
    <TweetListSC v-if="currentUser" :tweets="localTweets" />
  </div>
</template>

<style></style>
