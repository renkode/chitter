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
    <TransitionGroup name="fade-down" v-if="props.tweets.length > 0">
      <TweetSC
        v-for="tweet in props.tweets"
        :key="tweet.id"
        :id="tweet.id"
        :user="usersStore.getUser(tweet.authorId)"
        :tweet="tweet"
        :viewing="viewTweetId == tweet.id"
      />
    </TransitionGroup>
    <div class="error gray-text" v-else>No tweets to display</div>
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
