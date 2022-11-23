<script setup>
import { ref, computed, watch, onBeforeMount } from "vue";
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
const fetchTweets = (arr) => {
  if (!users.currentId) return;
  fetching.value = true;
  Promise.all(
    arr.map(async (t) =>
      Object.assign(await store.getTweet(t.id), {
        type: t.type,
        retweetedBy:
          t.type === "retweet" ? await users.getName(t.fromUserId) : null,
        replyingToUser: await users.getUsername(t.replyingToUser),
        //timestamp: t.timestamp,
      })
    )
  ).then((values) => {
    store.tweets.push(...values);
    pending.value = false;
    fetching.value = false;
  });
};

onBeforeMount(() => {
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
      <TweetList :tweets="tweets" :pending="pending" />
      <LoadTweets
        v-if="!pending"
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
