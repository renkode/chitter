<script setup>
import { onMounted, onUnmounted, computed } from "vue";
import { useAppStore } from "@/stores/app.js";
import { useTweetStore } from "@/stores/tweets.js";
import { useUsersStore } from "@/stores/users.js";
import TweetList from "./lists/TweetList.vue";
import ComposeTweet from "./subcomponents/ComposeTweet.vue";
import db from "../firebase.js";
import { collection, getDocs } from "firebase/firestore";

const app = useAppStore();
const tweets = useTweetStore();
const users = useUsersStore();
const currentUser = computed(() => users.getUser(app.currentId));
const localTweets = computed(() =>
  currentUser.value.localTimeline.map((localTweet) => {
    if (tweets.getTweet(localTweet.id)) {
      const tweet = tweets.getTweet(localTweet.id);
      return {
        data: tweet,
        type: localTweet.type,
        retweetedBy:
          localTweet.type === "retweet"
            ? users.getUser(localTweet.retweetedBy).name
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
      <TweetList v-if="currentUser" :tweets="localTweets" />
    </div>
  </div>
</template>

<style scoped>
div {
  width: 100%;
}
</style>
