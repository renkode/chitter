<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useUsersStore } from "@/stores/users.js";
import NotificationList from "./lists/NotificationList.vue";

const users = useUsersStore();
const notifs = ref(await users.getAllNotifications(users.currentId));

onUnmounted(() => {
  users.clearNotifications();
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
