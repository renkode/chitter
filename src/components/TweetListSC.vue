<script setup>
import { defineProps } from "vue";
import { useUsersStore } from "@/stores/users.js";
import { useAppStore } from "@/stores/app.js";
import { storeToRefs } from "pinia";
import TweetSC from "./TweetSC.vue";

const usersStore = useUsersStore();
const { viewTweetId } = storeToRefs(useAppStore());

const props = defineProps({ tweets: Array });
</script>

<template>
  <div class="tweet-list">
    <TransitionGroup name="fade-down">
      <TweetSC
        v-for="tweet in props.tweets"
        :key="tweet.data.id"
        :id="tweet.data.id"
        :userData="usersStore.getUserData(tweet.data.authorId)"
        :tweetData="tweet.data"
        :viewing="viewTweetId == tweet.data.id"
      />
    </TransitionGroup>
  </div>
</template>

<style>
.fade-down-enter-active,
.fade-down-leave-active {
  transition: all 0.15s ease;
}

.fade-down-enter-from,
.fade-down-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.tweet-list {
  height: fit-content;
  width: 598px;
}

@media screen and (max-width: 700px) {
  .tweet-list {
    width: 100%;
  }
}
</style>
