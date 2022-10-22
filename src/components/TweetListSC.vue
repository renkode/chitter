<script setup>
import { defineProps, computed } from "vue";
import { useUsersStore } from "@/stores/users.js";
import { useAppStore } from "@/stores/app.js";
import { storeToRefs } from "pinia";
import TweetSC from "./TweetSC.vue";

const users = useUsersStore();
const app = useAppStore();
const viewTweetId = computed(() => app.viewTweetId);

const tweets = defineProps({ tweets: Array });
/* example ( i don't like how it's structured either but whatever )
{ data: tweetObj,
  type: "retweet",
  retweetedBy: "user's name"
}*/
</script>

<template>
  <div class="tweet-list">
    <TransitionGroup name="fade-down" v-if="tweets && tweets.tweets.length > 0">
      <TweetSC
        v-for="tweet in tweets.tweets"
        :key="tweet.data.id"
        :id="tweet.data.id"
        :user="users.getUser(tweet.data.authorId)"
        :tweet="tweet.data"
        :type="tweet.type"
        :retweetedBy="tweet.retweetedBy"
        :viewing="viewTweetId == tweet.data.id"
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
