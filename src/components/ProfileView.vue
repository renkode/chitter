<script setup>
import { defineProps, ref, computed, watch, onMounted } from "vue";
import ProfileBio from "./subcomponents/ProfileBio.vue";
import TweetList from "./lists/TweetList.vue";
import LoadSpinner from "./subcomponents/LoadSpinner.vue";
import { useUsersStore } from "@/stores/users.js";
import { useTweetStore } from "@/stores/tweets.js";

const store = useTweetStore();
const users = useUsersStore();

const props = defineProps(["username"]);

// initialize
const pending = ref(true);
const user = ref(
  props.username === users.currentUser.username
    ? computed(() => users.currentUser)
    : await users.getUserByUsername(props.username)
);
const tweets = computed(() => store.tweets);
const tab = ref("tweets"); // tweets-and-replies | media | likes

const setTab = (newTab) => {
  tab.value = newTab;
};

// functions for fetching tweets based on tab
async function fetchTweets() {
  const doc = await users.getUserTweets(user.value.id);
  const twts = doc.filter(
    (tweet) =>
      tweet.type === "status" ||
      tweet.type === "retweet" ||
      (tweet.type === "reply" && tweet.replyingToUser == tweet.authorId) // self reply
  );
  // TO-DO: trim by fetch length
  await Promise.all(
    twts.map(async (t) => ({
      data: await store.getTweet(t.id),
      retweetedBy: t.type === "retweet" ? props.username : null,
      timestamp: t.timestamp,
    }))
  ).then((values) => {
    pending.value = false;
    store.setTweets(store.sortByTimestamp(values));
  });
}

async function fetchTweetsAndReplies() {
  const doc = await users.getUserTweets(user.value.id);
  const twts = doc.filter(
    (tweet) => tweet.type === "status" || tweet.type === "reply"
  );
  // TO-DO: trim by fetch length
  await Promise.all(
    twts.map(async (t) => ({
      data: await store.getTweet(t.id),
      replyingToUser: t.replyToUser
        ? await users.getUsername(t.replyingToUser)
        : null,
      timestamp: t.timestamp,
    }))
  ).then((values) => {
    pending.value = false;
    store.setTweets(store.sortByTimestamp(values));
  });
}

async function fetchMedia() {
  const doc = await users.getUserTweets(user.value.id);
  const twts = doc.filter((tweet) => tweet.containsMedia);
  // TO-DO: trim by fetch length
  await Promise.all(
    twts.map(async (t) => ({
      data: await store.getTweet(t.id),
      timestamp: t.timestamp,
    }))
  ).then((values) => {
    pending.value = false;
    store.setTweets(store.sortByTimestamp(values));
  });
}

async function fetchLikes() {
  // TO-DO: trim by fetch length
  await Promise.all(
    user.value.likes.map(async (t) => ({
      data: await store.getTweet(t),
      timestamp: t.timestamp,
    }))
  ).then((values) => {
    pending.value = false;
    store.setTweets(store.sortByTimestamp(values));
  });
}

onMounted(() => {
  if (user.value === null) return;
  fetchTweets();
});

watch(tab, () => {
  switch (tab.value) {
    case "tweets-and-replies":
      fetchTweetsAndReplies();
      break;
    case "media":
      fetchMedia();
      break;
    case "likes":
      fetchLikes();
      break;
    default:
      fetchTweets();
  }
});

// update profile if it's not dismounted
watch(
  () => props.username,
  async () => {
    user.value =
      props.username === users.currentUser.username
        ? computed(() => users.currentUser).value
        : await users.getUserByUsername(props.username);
    fetchTweets();
  }
);
</script>

<template>
  <div class="profile-wrapper">
    <ProfileBio v-if="user" :user="user" :tab="tab" :setTab="setTab" />
    <TweetList v-if="!pending && user" :tweets="tweets" />
    <LoadSpinner v-if="pending && user !== null" />
    <div class="error gray-text" v-if="user === null">User not found.</div>
  </div>
</template>

<style>
.profile-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
