<script setup>
import {
  defineProps,
  ref,
  computed,
  watch,
  onMounted,
  onBeforeMount,
} from "vue";
import ProfileBio from "./subcomponents/ProfileBio.vue";
import TweetList from "./lists/TweetList.vue";
import LoadSpinner from "./subcomponents/LoadSpinner.vue";
import LoadTweets from "./subcomponents/LoadTweets.vue";
import { useUsersStore } from "@/stores/users.js";
import { useTweetStore } from "@/stores/tweets.js";

const store = useTweetStore();
const users = useUsersStore();

const props = defineProps(["username"]);

// initialize
const pending = ref(true);
const fetching = ref(true);
const currentUser = computed(() => users.currentUser);
const user = ref(
  users.currentId && props.username === users.currentUser.username
    ? currentUser.value
    : await users.getUserByUsername(props.username)
);
const tweets = computed(() => store.tweets);
const tab = ref("tweets"); // tweets-and-replies | media | likes
const rawTweets = ref(await setRawTweets());
const fetchMethod = ref(fetchTweets);

const setTab = (newTab) => {
  tab.value = newTab;
};

// functions for fetching tweets based on tab
async function fetchTweets(arr) {
  // add retweetedBy property if applicable and update type/timestamp for retweets
  await Promise.all(
    arr.map(async (t) =>
      Object.assign(await store.getTweet(t.id), {
        retweetedBy: t.type === "retweet" ? props.username : null,
        //timestamp: t.timestamp,
        type: t.type,
        replyingToUser: await users.getUsername(t.replyingToUser),
      })
    )
  ).then((values) => {
    pending.value = false;
    fetching.value = false;
    store.tweets.push(...values);
  });
}

async function fetchTweetsAndReplies(arr) {
  // add replyingToUser property if applicable
  await Promise.all(
    arr.map(async (t) =>
      Object.assign(await store.getTweet(t.id), {
        user: await users.getUserProps(t.authorId),
        replyingToUser: await users.getUsername(t.replyingToUser),
      })
    )
  ).then((values) => {
    pending.value = false;
    fetching.value = false;
    store.tweets.push(...values);
  });
}

async function fetchMedia(arr) {
  await Promise.all(
    arr.map(async (t) =>
      store.getTweet(t.id).then(async (data) =>
        Object.assign(data, {
          replyingToUser: await users.getUsername(data.replyingToUser),
        })
      )
    )
  ).then((values) => {
    pending.value = false;
    fetching.value = false;
    store.tweets.push(...values);
  });
}

async function fetchLikes(arr) {
  return Promise.all(
    arr.map(async (id) =>
      store.getTweet(id).then(async (data) =>
        Object.assign(data, {
          replyingToUser: await users.getUsername(data.replyingToUser),
        })
      )
    )
  ).then((values) => {
    pending.value = false;
    fetching.value = false;
    store.tweets.push(...values);
  });
}

async function setRawTweets() {
  fetching.value = true;
  const doc = await users.getUserTweets(user.value.id);
  switch (tab.value) {
    case "tweets-and-replies":
      return store.sortByTimestamp(
        doc.filter((tweet) => tweet.type === "status" || tweet.type === "reply")
      );
    case "media":
      return store.sortByTimestamp(doc.filter((tweet) => tweet.containsMedia));
    case "likes":
      return user.value.likes.reverse();
    default:
      return store.sortByTimestamp(
        doc.filter(
          (tweet) =>
            tweet.type === "status" ||
            tweet.type === "retweet" ||
            tweet.isSelfReply
        )
      );
  }
}

// set rawtweets (for loadtweet component), fetch actual tweets then set fetchmethod
const updateTweets = async () => {
  store.setTweets([]);
  rawTweets.value = await setRawTweets();
  switch (tab.value) {
    case "tweets-and-replies":
      fetchTweetsAndReplies(rawTweets.value.slice(0, store.fetchLimit));
      fetchMethod.value = fetchTweetsAndReplies;
      break;
    case "media":
      fetchMedia(rawTweets.value.slice(0, store.fetchLimit));
      fetchMethod.value = fetchMedia;
      break;
    case "likes":
      fetchLikes(rawTweets.value.slice(0, store.fetchLimit));
      fetchMethod.value = fetchLikes;
      break;
    default:
      fetchTweets(rawTweets.value.slice(0, store.fetchLimit));
      fetchMethod.value = fetchTweets;
  }
};

onBeforeMount(() => {
  store.setTweets([]);
});

onMounted(() => {
  if (user.value === null) return;
  fetchTweets(rawTweets.value.slice(0, store.fetchLimit));
});

// update tweets on tab change
watch(tab, () => {
  pending.value = true;
  updateTweets();
});

// update profile whenever info changes
watch(currentUser, () => {
  if (props.username === users.currentUser.username)
    user.value = currentUser.value;
});

// update profile whenever user changes
watch(
  () => props.username,
  async () => {
    user.value =
      props.username === users.currentUser.username
        ? currentUser.value
        : await users.getUserByUsername(props.username);
    updateTweets();
  }
);
</script>

<template>
  <div class="profile-wrapper">
    <ProfileBio v-if="user" :user="user" :tab="tab" :setTab="setTab" />
    <TweetList v-if="!pending && user" :tweets="tweets" :pending="pending" />
    <LoadSpinner v-if="pending && user !== null" />
    <div class="error gray-text" v-if="user === null">User not found.</div>
    <LoadTweets
      v-if="!pending"
      :isFetching="fetching"
      :rawTweets="rawTweets.slice(store.fetchLimit)"
      :fetch="fetchMethod"
    />
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
