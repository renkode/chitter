<script setup>
import { ref, computed, onMounted, watch, onUpdated } from "vue";
import { useTweetStore } from "@/stores/tweets.js";
import { useUsersStore } from "@/stores/users.js";
import TweetList from "./lists/TweetList.vue";
import ComposeTweet from "./subcomponents/ComposeTweet.vue";
import LoadSpinner from "./subcomponents/LoadSpinner.vue";
import LoadTweets from "./subcomponents/LoadTweets.vue";

const store = useTweetStore();
const users = useUsersStore();
const tweets = computed(() => store.tweets);
const rawTweets = ref(
  store.sortByTimestamp(await store.getTimelineTweets(users.currentId))
);
const pending = ref(true); // initial load
const fetching = ref(true);

// get all tweets from timeline document, have to update properties if the tweet is a reply and/or retweet
const fetchTweets = async (arr) => {
  if (!users.currentId) return;
  fetching.value = true;
  await Promise.all(
    arr.map(async (t) =>
      Object.assign(await store.getTweet(t.id), {
        type: t.type,
        retweetedBy:
          t.type === "retweet" ? await users.getName(t.fromUserId) : null,
        replyingToUser: await users.getUsername(t.replyingToUser),
        timestamp: t.timestamp,
      })
    )
  ).then((values) => {
    store.tweets.push(...store.sortByTimestamp(values));
    pending.value = false;
    fetching.value = false;
  });
};

onMounted(() => {
  store.setTweets([]);
  fetchTweets(rawTweets.value.slice(0, store.fetchLimit));
});

watch(tweets, () => {
  store.sortTweets();
});
</script>

<template>
  <div>
    <ComposeTweet />
    <div class="tweet-list-container">
      <TweetList v-if="!pending" :tweets="tweets" :pending="pending" />
      <LoadSpinner v-else-if="!fetching" />
      <LoadTweets
        :isFetching="fetching"
        :rawTweets="rawTweets.slice(store.fetchLimit)"
        :fetch="fetchTweets"
      />
    </div>
  </div>
</template>

<style scoped>
div {
  width: 100%;
}
</style>
