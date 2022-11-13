<script setup>
import { defineProps, ref, watch, onMounted } from "vue";
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
const tweet = ref(await store.getTweet(props.id));
const previousTweet = ref(null);
const replies = ref([]);
const previousTweets = ref([]);

// kinda like a linked list
const fetchPreviousTweets = async () => {
  previousTweets.value = [];
  if (!tweet.value) return;
  let currentTweet = tweet.value;
  while (currentTweet.replyingToTweet) {
    try {
      let lastTweet = await store.getTweet(currentTweet.replyingToTweet);
      if (!lastTweet) {
        previousTweets.value.unshift(null); // deleted tweet
        break;
      }
      previousTweets.value.unshift(lastTweet);
      currentTweet = lastTweet;
    } catch (e) {
      console.log(e);
    }
  }
};

// refresh whenever current tweet or previous tweet change/get deleted
watch(
  () => props.id,
  async () => {
    pending.value = true;
    previousTweets.value = [];
    replies.value = [];
    tweet.value = await store.getTweet(props.id);
    if (tweet.value.replyingToTweet)
      previousTweet.value = await store.getTweet(tweet.value.replyingToTweet);
    replies.value = await Promise.all(
      tweet.value.repliesFrom.map((id) => store.getTweet(id))
    );
    await fetchPreviousTweets();
    pending.value = false;
  }
);

onMounted(async () => {
  if (tweet.value) {
    if (tweet.value.replyingToTweet)
      previousTweet.value = await store.getTweet(tweet.value.replyingToTweet);
    replies.value = await Promise.all(
      tweet.value.repliesFrom.map((id) => store.getTweet(id))
    );
  }
  await fetchPreviousTweets();
  pending.value = false;
});
</script>

<template>
  <div class="tweet-list-container" v-if="!pending && tweet">
    <TransitionGroup name="fade" mode="out-in">
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
      </template>

      <template v-if="tweet">
        <TweetCardFull
          :id="tweet.id"
          :user="users.getUserProps(tweet.authorId)"
          :tweet="tweet"
          :type="tweet.type"
          :replyingTo="
            tweet.replyingToUser
              ? users.getUsername(tweet.replyingToUser)
              : null
          "
      /></template>

      <template v-if="replies && replies.length > 0">
        <template v-for="tweet in replies">
          <TweetCard
            v-if="tweet"
            :key="tweet.id"
            :id="tweet.id"
            :user="users.getUserProps(tweet.authorId)"
            :tweet="tweet"
            :type="tweet.type"
            :replyingTo="users.getUsername(tweet.replyingToUser)"
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
