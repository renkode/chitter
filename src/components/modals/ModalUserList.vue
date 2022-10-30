<script setup>
import { computed } from "vue";
import UserList from "../lists/UserList.vue";
import { useAppStore } from "@/stores/app";
import { useTweetStore } from "@/stores/tweets";
import { useUsersStore } from "@/stores/users";

const app = useAppStore();
const tweets = useTweetStore();
const users = useUsersStore();

const headerText = computed(() =>
  app.modalType === "retweet-list"
    ? "Retweeted by"
    : app.modalType === "like-list"
    ? "Liked by"
    : ""
);
const currentTweet = computed(() => tweets.getTweet(app.routeTweetId));
const list = computed(() => {
  if (currentTweet.value && app.modalType === "retweet-list") {
    return currentTweet.value.retweetsFrom.map((id) => users.getUser(id));
  } else if (app.modalType === "like-list") {
    return currentTweet.value.likesFrom.map((id) => users.getUser(id));
  }
  return null;
});
</script>

<template>
  <div class="modal-header">
    <span class="header-item-wrapper">
      <span class="exit-modal-btn" @click="app.toggleModal"
        ><v-icon name="bi-x" scale="1.6" fill="white"
      /></span>
      <span class="header-text"
        ><strong>{{ headerText }}</strong></span
      ></span
    >
  </div>
  <UserList v-if="list" :users="list" />
</template>

<style scoped></style>
