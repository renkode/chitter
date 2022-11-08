<script setup>
import { ref } from "vue";
import { useAppStore } from "@/stores/app.js";
import { useTweetStore } from "@/stores/tweets.js";
import { useUsersStore } from "@/stores/users.js";
import TweetList from "./lists/TweetList.vue";
import ComposeTweet from "./subcomponents/ComposeTweet.vue";
//import db from "../firebase.js";
//import { collection, getDocs } from "firebase/firestore";

const app = useAppStore();
const store = useTweetStore();
const users = useUsersStore();
const tweets = ref(
  store.tweets.map(async (tweet) => {
    if (await store.getTweet(tweet.id)) {
      const tweet = store.getTweet(tweet.id);
      return {
        data: tweet,
        retweetedBy:
          tweet.type === "retweet"
            ? await users.getUsername(tweet.retweetedBy) // getusername
            : null,
      };
    }
  })
);
</script>

<template>
  <div>
    <ComposeTweet />
    <div class="tweet-list-container">
      <TweetList v-if="users.currentUser" :tweets="tweets" />
    </div>
  </div>
</template>

<style scoped>
div {
  width: 100%;
}
</style>
