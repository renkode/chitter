<script setup>
import { useTweetStore } from "@/stores/tweets.js";
import { useUsersStore } from "@/stores/users.js";
import { useAppStore } from "@/stores/app.js";
import { storeToRefs } from "pinia";
import HeaderSC from "./HeaderSC.vue";
import TweetSC from "./TweetSC.vue";

const tweetStore = useTweetStore();
const usersStore = useUsersStore();
</script>

<template>
  <div class="main-wrapper">
    <div class="timeline-wrapper">
      <HeaderSC />
      <div class="compose-tweet-container"></div>
      <div class="tweet-list">
        <TweetSC
          v-for="tweet in tweetStore.tweets"
          :key="tweet.data.id"
          :userData="usersStore.getUserData(tweet.data.authorId)"
          :tweetData="tweet.data"
        />
      </div>
    </div>
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
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: rgba(255, 255, 255, 0.25) 1px solid;
  border-top: 0;
  border-bottom: 0;
}

.compose-tweet-container {
  border-bottom: rgba(255, 255, 255, 0.25) 1px solid;
}

.tweet-list {
  height: fit-content;
}

.compose-tweet-container,
.tweet-list {
  width: 598px;
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
  .compose-tweet-container,
  .tweet-list {
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
