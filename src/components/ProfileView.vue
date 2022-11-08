<script setup>
import { defineProps, ref, computed, watch, onMounted } from "vue";
import ProfileBio from "./subcomponents/ProfileBio.vue";
import TweetList from "./lists/TweetList.vue";
import { useUsersStore } from "@/stores/users.js";
import { useTweetStore } from "@/stores/tweets.js";

const store = useTweetStore();
const users = useUsersStore();

const props = defineProps(["username"]);

// initialize
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
  const twts = user.value.tweets.filter(
    (tweet) =>
      tweet.type === "status" ||
      tweet.type === "retweet" ||
      (tweet.type === "reply" && tweet.replyingToUser == tweet.authorId) // self reply
  );
  // TO-DO: trim by fetch length
  await Promise.all(twts.map((t) => store.getTweet(t.id))).then((values) =>
    store.setTweets(store.sortByTimestamp(values))
  );
}

async function fetchTweetsAndReplies() {
  const twts = user.value.tweets.filter(
    (tweet) => tweet.type === "status" || tweet.type === "reply"
  );
  // TO-DO: trim by fetch length
  await Promise.all(twts.map((t) => store.getTweet(t.id))).then((values) =>
    store.setTweets(store.sortByTimestamp(values))
  );
}

async function fetchMedia() {
  const twts = user.value.tweets.filter((tweet) => tweet.containsMedia);
  // TO-DO: trim by fetch length
  await Promise.all(twts.map((t) => store.getTweet(t.id))).then((values) =>
    store.setTweets(store.sortByTimestamp(values))
  );
}

async function fetchLikes() {
  // TO-DO: trim by fetch length
  await Promise.all(user.value.likes.map((t) => store.getTweet(t.id))).then(
    (values) => store.setTweets(store.sortByTimestamp(values))
  );
}

onMounted(() => fetchTweets());

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
  }
);
</script>

<template>
  <div class="profile-wrapper">
    <ProfileBio v-if="user" :user="user" :tab="tab" :setTab="setTab" />
    <TweetList v-if="user" :tweets="tweets" />
    <div class="error gray-text" v-else>User not found.</div>
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
