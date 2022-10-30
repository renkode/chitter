<script setup>
import { defineProps, computed } from "vue";
import { useUsersStore } from "@/stores/users.js";
import TweetCard from "../subcomponents/TweetCard.vue";

const users = useUsersStore();
const props = defineProps({ tweets: Array });
/* example ( i don't like how it's structured either but whatever )
{ data: tweetObj,
  type: "retweet",
  retweetedBy: "user's name"
}*/
const tweets = computed(() =>
  props.tweets.filter(
    (tweet) => typeof tweet !== "undefined" && typeof tweet.data !== "undefined"
  )
); // FAILSAFE, weed out undefined tweets
</script>

<template>
  <div class="tweet-list">
    <TransitionGroup name="fade-down" v-if="tweets && tweets.length > 0">
      <TweetCard
        v-for="tweet in tweets"
        :key="tweet.data.id"
        :id="tweet.data.id"
        :user="{
          id: tweet.data.authorId,
          name: users.getUser(tweet.data.authorId).name,
          username: users.getUser(tweet.data.authorId).username,
          avatarUrl: users.getUser(tweet.data.authorId).avatarUrl,
        }"
        :tweet="tweet.data"
        :type="tweet.type"
        :retweetedBy="tweet.retweetedBy"
        :replyingTo="users.getUsername(tweet.data.replyingToUser)"
      />
    </TransitionGroup>
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
