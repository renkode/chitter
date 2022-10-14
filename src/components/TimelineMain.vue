<script setup>
import { ref } from "vue";
import { useTweetStore } from "@/stores/tweets.js";
import { useUsersStore } from "@/stores/users.js";
import TweetSC from "./TweetSC.vue";

const tweetStore = useTweetStore();
const usersStore = useUsersStore();
</script>

<template>
  <div class="main-wrapper">
    <div class="timeline-wrapper">
      <div class="timeline-header">Home</div>
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

.timeline-header {
  font-size: 1.2rem;
  min-height: 53px;
  height: 53px;
  width: 100%;
  padding-left: 16px;
  background-color: rgba(38, 42, 46, 0.836);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 2;
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
  .timeline-header,
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
