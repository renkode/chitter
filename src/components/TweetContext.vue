<script setup>
import { defineProps, ref, computed, watch, onMounted } from "vue";
import TweetCard from "./subcomponents/TweetCard.vue";
import TweetCardFull from "./subcomponents/TweetCardFull.vue";
import { useAppStore } from "@/stores/app.js";
import { useUsersStore } from "@/stores/users.js";
import { useTweetStore } from "@/stores/tweets.js";

const app = useAppStore();
const users = useUsersStore();
const store = useTweetStore();

const props = defineProps(["id"]);

const tweet = computed(() => store.getTweet(props.id));
const previousTweet = computed(() =>
  store.getTweet(tweet.value.replyingToTweet)
);
const previousTweets = ref([]);
const replies = computed(() => {
  if (tweet.value) {
    return tweet.value.repliesFrom.map((id) => store.getTweet(id)) || [];
  } else {
    return null;
  }
});

// kinda like a linked list. don't ask me.
const fetchPreviousTweets = () => {
  previousTweets.value = [];
  if (!tweet.value) return;
  let currentTweet = tweet.value;
  while (currentTweet.replyingToTweet) {
    try {
      let lastTweet = store.getTweet(currentTweet.replyingToTweet);
      if (!lastTweet) {
        previousTweets.value.unshift(null);
        break;
      }
      previousTweets.value.unshift(lastTweet);
      currentTweet = lastTweet;
    } catch {
      throw new Error("loop gone wild");
    }
  }
};

// refresh whenever current tweet or previous tweet change/get deleted
watch([() => app.viewTweetId, previousTweet], () => {
  fetchPreviousTweets();
});

onMounted(() => {
  fetchPreviousTweets();
});
</script>

<template>
  <div class="tweet-list-container">
    <template v-for="tweet in previousTweets">
      <template v-if="!tweet">
        <div class="tweet-container" :key="previousTweets.indexOf(tweet)">
          <div class="deleted-tweet">
            <span class="gray-text">Tweet has been deleted.</span>
          </div>
        </div>
      </template>
      <template v-else>
        <TweetCard
          :key="tweet.id"
          :id="tweet.id"
          :user="users.getUser(tweet.authorId)"
          :tweet="tweet"
          :type="tweet.type"
          :isPreviousReply="true"
        />
      </template>
    </template>
    <template v-if="tweet">
      <TweetCardFull
        :id="tweet.id"
        :user="users.getUser(tweet.authorId)"
        :tweet="tweet"
        :type="tweet.type"
    /></template>

    <template v-if="replies && replies.length > 0">
      <TweetCard
        v-for="tweet in replies"
        :key="tweet.id"
        :id="tweet.id"
        :user="users.getUser(tweet.authorId)"
        :tweet="tweet"
        :type="tweet.type"
        :isPreviousReply="false"
      />
    </template>
  </div>
</template>

<style scoped>
.deleted-tweet {
  width: 90%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 700px) {
  .tweet-list-container {
    max-width: 600px;
    width: 100%;
  }
}
</style>
