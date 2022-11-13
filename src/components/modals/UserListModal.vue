<script setup>
import { ref, computed } from "vue";
import UserList from "../lists/UserList.vue";
import ModalHeader from "./ModalHeader.vue";
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
const currentTweet = ref(await tweets.getTweet(app.routeTweetId));
const list = ref(await fetchUsers());

async function fetchUsers() {
  if (currentTweet.value && app.modalType === "retweet-list") {
    return Promise.all(
      currentTweet.value.retweetsFrom.map((id) => users.getUser(id))
    );
  } else if (app.modalType === "like-list") {
    return Promise.all(
      currentTweet.value.likesFrom.map((id) => users.getUser(id))
    );
  }
  return null;
}
</script>

<template>
  <ModalHeader :text="headerText" />
  <UserList v-if="list" :users="list" />
</template>

<style scoped></style>
