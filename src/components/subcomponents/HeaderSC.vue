<script setup>
import { computed } from "vue";
import { useAppStore } from "@/stores/app.js";
import { useUsersStore } from "@/stores/users.js";
import router from "@/router/index.js";

const app = useAppStore();
const users = useUsersStore();

const user = computed(function () {
  return users.getUserByUsername(router.currentRoute.value.params.username);
});
const canGoBack = computed(() => {
  const routes = [
    "Tweet",
    "Profile",
    "Notifications",
    "Followers",
    "Following",
  ];
  return routes.includes(router.currentRoute.value.name);
});
</script>

<template>
  <div class="page-header">
    <span v-if="canGoBack" class="profile-wrapper">
      <span class="back-arrow-btn" @click="this.$router.back()"
        ><v-icon name="md-arrowback" scale="1.1" fill="#ffffff80"
      /></span>

      <div
        class="user-info-wrapper"
        v-if="user && app.view !== 'tweet' && app.view !== 'notifications'"
      >
        <span class="display-name">{{ user.name }}</span>
        <span class="total-tweet-count gray-text"
          >{{ user.tweetCount }} Tweets</span
        >
      </div>
      <span v-else style="text-transform: capitalize">{{
        router.currentRoute.value.name
      }}</span>
    </span>
    <span v-else style="text-transform: capitalize">{{
      router.currentRoute.value.name
    }}</span>
  </div>
</template>

<style scoped>
.page-header {
  font-weight: bold;
  font-size: 1.2rem;
  min-height: 53px;
  height: 53px;
  width: 100%;
  padding-left: 16px;
  background-color: rgba(38, 42, 46, 0.836);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  position: sticky;
  user-select: none;
  top: 0;
  z-index: 2;
}

.profile-wrapper {
  margin-right: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
}

.back-arrow-btn {
  cursor: pointer;
  height: 100%;
  width: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.user-info-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 1rem;
  margin-left: 1rem;
}

.total-tweet-count {
  font-weight: normal;
  font-size: 0.9rem;
  margin: 0;
}
</style>
