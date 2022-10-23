<script setup>
import { ref, onMounted, computed } from "vue";
import ProfileBioSC from "./ProfileBioSC.vue";
import TweetListSC from "./TweetListSC.vue";
import { useUsersStore } from "@/stores/users.js";
import { useTweetStore } from "@/stores/tweets.js";
import { useAppStore } from "@/stores/app.js";

const app = useAppStore();
const tweetStore = useTweetStore();
const users = useUsersStore();
const user = computed(() => users.getUser(app.viewProfileId));
const tab = ref("tweets"); // tweets-and-replies | media | likes

const setTab = (newTab) => {
  tab.value = newTab;
};

const mapFromUserTweets = () => {
  return user.value.authoredTweets.map((t) => ({
    data: tweetStore.getTweet(t.id),
    type: t.type,
    retweetedBy: null,
    containsMedia: t.containsMedia,
    timestamp: tweetStore.getTweet(t.id).timestamp,
  }));
};

const mapFromRetweets = () => {
  return user.value.retweets.map((t) => ({
    data: tweetStore.getTweet(t.id),
    type: "retweet",
    retweetedBy: user.value.name,
    timestamp: t.timestamp,
  }));
};

const mapFromLikes = () => {
  return user.value.likes.map((id) => ({
    data: tweetStore.getTweet(id),
  }));
};

// filter suitable tweets then map to an object usable by TweetListSC
// idk how i managed to implement this within an hour with minimal bugs but i will not question it
const tweets = computed(() => {
  switch (tab.value) {
    case "tweets-and-replies":
      return mapFromUserTweets().filter(
        (tweet) => tweet.type === "status" || tweet.type === "reply"
      );
    case "media":
      return mapFromUserTweets().filter((tweet) => tweet.containsMedia);
    case "likes":
      return mapFromLikes();
    default:
      return mapFromUserTweets()
        .filter(
          (tweet) =>
            tweet.type === "status" ||
            (tweet.type === "reply" &&
              tweet.data.replyingTo == tweet.data.authorId) // self reply
        )
        .concat(mapFromRetweets())
        .sort((a, b) =>
          a.timestamp > b.timestamp ? -1 : a.timestamp < b.timestamp ? 1 : 0
        );
  }
});
</script>

<template>
  <div class="profile-wrapper">
    <ProfileBioSC v-if="user" :user="user" :tab="tab" :setTab="setTab" />
    <div class="error gray-text" v-else>User not found.</div>
    <TweetListSC :tweets="tweets" />
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
