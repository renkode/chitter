<script setup>
import { onMounted, onUnmounted, computed } from "vue";
import { useAppStore } from "@/stores/app.js";
import { useUsersStore } from "@/stores/users.js";
import NotificationList from "./lists/NotificationList.vue";

const app = useAppStore();
const users = useUsersStore();
const notifs = computed(() => users.getAllNotifications(app.currentId));

async function delay(time) {
  await new Promise((res) => {
    setTimeout(() => {
      //console.log(res);
    }, time);
  });
}

onMounted(() => {
  delay(0);
});

onUnmounted(() => {
  users.clearNotifications(app.currentId);
});
</script>

<template>
  <div class="tweet-list-container">
    <NotificationList :notifs="notifs" />
  </div>
</template>

<style>
.tweet-list-container {
  width: 100%;
}
</style>
