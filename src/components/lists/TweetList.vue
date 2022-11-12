<script setup>
import { defineProps, computed } from "vue";
import { useUsersStore } from "@/stores/users.js";
import TweetCard from "../subcomponents/TweetCard.vue";
import LoadSpinner from "../subcomponents/LoadSpinner.vue";

const users = useUsersStore();
const props = defineProps(["tweets"]);
</script>

<template>
  <div class="tweet-list">
    <TransitionGroup
      name="fade-down"
      v-if="props.tweets && props.tweets.length > 0"
    >
      <TweetCard
        v-for="tweet in props.tweets"
        :key="tweet.id + tweet.type"
        :id="tweet.id"
        :user="users.getUserProps(tweet.authorId)"
        :tweet="tweet"
        :retweetedBy="tweet.retweetedBy"
        :replyingTo="tweet.replyingToUser"
    /></TransitionGroup>

    <div class="error gray-text" v-else>No tweets to display</div>
  </div>
</template>

<style>
.fade-down-enter-active,
.fade-down-leave-active {
  transition: all 0.12s ease;
}

.fade-down-enter-from,
.fade-down-leave-to {
  transform: translateY(-15px);
  opacity: 0;
}

.fade-down-leave-from {
  opacity: 1;
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
