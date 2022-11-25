<script setup>
import { computed, onUnmounted } from "vue";
import { useUsersStore } from "@/stores/users.js";
import NotificationList from "./lists/NotificationList.vue";

const users = useUsersStore();
const notifs = computed(() => users.getAllNotifications());

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
