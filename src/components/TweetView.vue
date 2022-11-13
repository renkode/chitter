<script setup>
import {
  defineProps,
  ref,
  computed,
  watch,
  onMounted,
  onBeforeMount,
} from "vue";
import TweetCard from "./subcomponents/TweetCard.vue";
import TweetCardFull from "./subcomponents/TweetCardFull.vue";
import LoadSpinner from "./subcomponents/LoadSpinner.vue";
import { useAppStore } from "@/stores/app.js";
import { useUsersStore } from "@/stores/users.js";
import { useTweetStore } from "@/stores/tweets.js";

// didn't use tweetlist since deleted tweets would have to be handled differently
const app = useAppStore();
const users = useUsersStore();
const store = useTweetStore();
const props = defineProps(["id"]);

const pending = ref(true);
const viewingTweet = ref(await store.getTweet(props.id));
const tweets = computed(() => store.tweets);

// kinda like a linked list
async function fetchPreviousTweets() {
  const prev = [];
  if (!viewingTweet.value) return;
  let currentTweet = viewingTweet.value;
  while (currentTweet.replyingToTweet) {
    try {
      let lastTweet = await store.getTweet(currentTweet.replyingToTweet);
      if (!lastTweet) {
        prev.unshift({ id: null }); // deleted tweet
        break;
      }
      prev.unshift(Object.assign(lastTweet, { isPreviousReply: true }));
      currentTweet = lastTweet;
    } catch (e) {
      console.log(e);
    }
  }
  return prev;
}

async function fetchRepliesToCurrentTweet() {
  if (!viewingTweet.value) return;
  return Promise.all(
    viewingTweet.value.repliesFrom.map((id) => store.getTweet(id))
  );
}

async function updateTweets() {
  if (!viewingTweet.value) return [null];
  return store.setTweets([
    ...(await fetchPreviousTweets()),
    Object.assign(viewingTweet.value, {
      username: await users.getUsername(viewingTweet.value.authorId),
    }), // vue keeps throwing indexOf error for some reason if i put this in the template
    ...(await fetchRepliesToCurrentTweet()),
  ]);
}

// refresh whenever current tweet or previous tweet change/get deleted
watch(
  () => props.id,
  async () => {
    pending.value = true;
    viewingTweet.value = await store.getTweet(props.id);
    await updateTweets();
    pending.value = false;
  }
);

onBeforeMount(() => {
  store.setTweets([]);
});

onMounted(async () => {
  if (viewingTweet.value) {
    await updateTweets();
  }
  pending.value = false;
});
</script>

<template>
  <div class="tweet-list-container" v-if="!pending && viewingTweet">
    <TransitionGroup name="fade" mode="out-in">
      <template v-for="(tweet, index) in tweets">
        <template v-if="!tweet || !tweet.id">
          <div class="tweet-container" :key="index">
            <div class="deleted-tweet">
              <span class="gray-text">Tweet has been deleted.</span>
            </div>
          </div>
        </template>
        <template v-else-if="tweet.isPreviousReply">
          <TweetCard
            :key="tweet.id"
            :id="tweet.id"
            :user="users.getUserProps(tweet.authorId)"
            :tweet="tweet"
            :type="tweet.type"
            :replyingTo="
              tweet.replyingToUser
                ? users.getUsername(tweet.replyingToUser)
                : null
            "
            :isPreviousReply="true"
          />
        </template>

        <template v-else-if="tweet.id === props.id">
          <TweetCardFull
            :key="tweet.id"
            :id="tweet.id"
            :user="users.getUserProps(tweet.authorId)"
            :tweet="tweet"
            :type="tweet.type"
            :replyingTo="
              tweet.replyingToUser
                ? users.getUsername(tweet.replyingToUser)
                : null
            "
          />
        </template>
        <template v-else>
          <TweetCard
            :key="tweet.id"
            :id="tweet.id"
            :user="users.getUserProps(tweet.authorId)"
            :tweet="tweet"
            :type="tweet.type"
            :replyingTo="viewingTweet.username"
            :isPreviousReply="false"
          />
        </template>
      </template>
    </TransitionGroup>
  </div>
  <LoadSpinner v-else-if="pending" />
  <div class="error gray-text" v-else>Tweet does not exist.</div>
</template>

<style scoped>
.fade-enter-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.deleted-tweet {
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 0.75rem;
}

@media screen and (max-width: 700px) {
  .tweet-list-container {
    max-width: 600px;
    width: 100%;
  }
}
</style>
