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
const tweet = ref(await tweets.getTweet(app.modalReply.tweetId));
const user = ref(await users.getUser(app.modalReply.userId));
</script>

<template>
  <ModalHeader />
  <TweetCardSimple
    v-if="app.modalType === 'reply'"
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
