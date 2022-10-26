<script setup>
import { computed, watch } from "vue";
import ComposeTweet from "./ComposeTweet.vue";
import TweetCardSimple from "./TweetCardSimple.vue";
import { useAppStore } from "@/stores/app.js";
import { useTweetStore } from "@/stores/tweets.js";
import { useUsersStore } from "@/stores/users.js";
const app = useAppStore();
const tweets = useTweetStore();
const users = useUsersStore();
const tweet = computed(() => tweets.getTweet(app.modalReply.tweetId));
const user = computed(() => users.getUser(app.modalReply.userId));
</script>

<template>
  <div class="modal-header">
    <span class="header-item-wrapper">
      <span class="exit-modal-btn" @click="app.toggleModal"
        ><v-icon name="bi-x" scale="1.6" fill="white"
      /></span>
    </span>
  </div>
  <TweetCardSimple
    v-if="app.modalType === 'reply'"
    :user="user"
    :tweet="tweet"
  />
  <ComposeTweet :isModal="true" />
</template>

<style scoped></style>
