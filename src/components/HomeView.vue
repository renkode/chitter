<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useAppStore } from "@/stores/app.js";
import { useTweetStore } from "@/stores/tweets.js";
import { useUsersStore } from "@/stores/users.js";
import TweetList from "./lists/TweetList.vue";
import ComposeTweet from "./subcomponents/ComposeTweet.vue";
import LoadSpinner from "./subcomponents/LoadSpinner.vue";

const app = useAppStore();
const store = useTweetStore();
const users = useUsersStore();
const tweets = computed(() => store.tweets);
const pending = ref(true);

// get all tweets from timeline document, have to update properties if the tweet is a reply and/or retweet
const fetchTweets = async () => {
  const tl = await store.getTimelineTweets(users.currentId);
  await Promise.all(
    tl.map(async (t) =>
      Object.assign(await store.getTweet(t.id), {
        type: t.type,
        retweetedBy: await users.getUsername(t.retweetedBy),
        replyingToUser: await users.getUsername(t.replyingToUser),
        timestamp: t.timestamp,
      })
    )
  ).then((values) => {
    pending.value = false;
    store.setTweets(store.sortByTimestamp(values));
  });
};

onMounted(() => fetchTweets());

watch(tweets, () => {
  store.sortTweets();
});
</script>

<template>
  <div>
    <ComposeTweet />
    <div class="tweet-list-container">
      <TweetList v-if="!pending" :tweets="tweets" :pending="pending" />
      <LoadSpinner v-else />
    </div>
  </div>
</template>

<style scoped>
div {
  width: 100%;
}
</style>
