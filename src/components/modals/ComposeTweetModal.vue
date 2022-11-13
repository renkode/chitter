<script setup>
import { ref } from "vue";
import ComposeTweet from "../subcomponents/ComposeTweet.vue";
import TweetCardSimple from "../subcomponents/TweetCardSimple.vue";
import ModalHeader from "./ModalHeader.vue";
import { useAppStore } from "@/stores/app.js";
import { useTweetStore } from "@/stores/tweets.js";
import { useUsersStore } from "@/stores/users.js";

const app = useAppStore();
const tweets = useTweetStore();
const users = useUsersStore();
const tweet = ref(
  app.modalType === "reply"
    ? await tweets.getTweet(app.modalReply.tweetId)
    : null
);
const user = ref(
  app.modalType === "reply" ? await users.getUser(app.modalReply.userId) : null
);
</script>

<template>
  <ModalHeader />
  <TweetCardSimple
    v-if="app.modalType === 'reply' && tweet && user"
    :user="{
      name: user.name,
      username: user.username,
      avatarUrl: user.avatarUrl,
    }"
    :tweet="tweet"
  />
  <ComposeTweet :isModal="true" />
</template>

<style scoped></style>
