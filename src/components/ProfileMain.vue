<script setup>
import { defineProps, ref, computed } from "vue";
import ProfileBio from "./subcomponents/ProfileBio.vue";
import TweetList from "./lists/TweetList.vue";
import { useUsersStore } from "@/stores/users.js";
import { useTweetStore } from "@/stores/tweets.js";

const tweetStore = useTweetStore();
const users = useUsersStore();

const props = defineProps(["username"]);

const user = computed(
  () => users.getUserByUsername(props.username) // even if i use a regular function, this.$route won't work so...
);
const tab = ref("tweets"); // tweets-and-replies | media | likes

const setTab = (newTab) => {
  tab.value = newTab;
};

// const mapFromUserTweets = () => {
//   return user.value.tweets.map((t) => ({
//     data: tweetStore.getTweet(t.id),
//     type: t.type,
//     retweetedBy: null,
//     containsMedia: t.containsMedia,
//     timestamp: tweetStore.getTweet(t.id).timestamp,
//   }));
// };

// const mapFromRetweets = () => {
//   return user.value.retweets.map((t) => ({
//     data: tweetStore.getTweet(t.id),
//     type: "retweet",
//     retweetedBy: user.value.name,
//     timestamp: t.timestamp,
//   }));
// };

const mapFromUserTweets = () => {
  return user.value.tweets.map((t) => ({
    data: tweetStore.getTweet(t.id),
    type: t.type,
    retweetedBy: t.type === "retweet" ? user.value.name : null,
    containsMedia: t.containsMedia,
    timestamp: t.timestamp,
  }));
};

const mapFromLikes = () => {
  return user.value.likes.map((id) => ({
    data: tweetStore.getTweet(id),
  }));
};

// filter suitable tweets then map to an object usable by TweetList
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
            tweet.type === "retweet" ||
            (tweet.type === "reply" &&
              tweet.data.replyingToUser == tweet.data.authorId) // self reply
        )
        .sort((a, b) =>
          a.timestamp > b.timestamp ? -1 : a.timestamp < b.timestamp ? 1 : 0
        );
  }
});
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
