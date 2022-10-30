<script setup>
import { computed } from "vue";
import { useAppStore } from "@/stores/app.js";
import { useUsersStore } from "@/stores/users.js";
import router from "@/router/index.js";

const app = useAppStore();
const users = useUsersStore();

const user = computed(() => users.getUserByUsername(app.routeUsername));
const canGoBack = computed(() => {
  const routes = [
    "Tweet",
    "Profile",
    "Notifications",
    "Followers",
    "Following",
  ];
  return routes.includes(app.routeName);
});
</script>

<template>
  <div class="page-header">
    <span class="header-wrapper">
      <span v-if="canGoBack" class="profile-wrapper">
        <span class="back-arrow-btn" @click="router.back()"
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
          app.routeName
        }}</span>
      </span>
      <span v-else style="text-transform: capitalize">{{
        app.routeName
      }}</span></span
    >

    <button v-if="!app.currentId" class="sign-up-btn">Sign Up</button>
  </div>
</template>

<style scoped>
.page-header {
  font-weight: bold;
  font-size: 1.2rem;
  min-height: 54px;
  height: 54px;
  width: 100%;
  padding: 0 1rem;
  background-color: rgba(38, 42, 46, 0.836);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: space-between;
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
  margin-left: 2.5rem;
  width: 100%;
}

.total-tweet-count {
  font-weight: normal;
  font-size: 0.9rem;
  margin: 0;
}

.header-wrapper {
  display: flex;
  width: fit-content;
}

.sign-up-btn {
  color: white;
  cursor: pointer;
  border: 0;
  border-radius: 20px;
  background-color: #1d9bf0;
  font-size: 1rem;
  height: 40px;
  padding: 0.5rem 1rem;
  transition: background-color 0.15s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sign-up-btn:hover {
  background-color: #1687d3;
}

@media screen and (max-width: 1000px) {
}
</style>
