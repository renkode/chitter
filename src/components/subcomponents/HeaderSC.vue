<script setup>
import { ref, computed, watch } from "vue";
import { useAppStore } from "@/stores/app.js";
import { useUsersStore } from "@/stores/users.js";
import router from "@/router/index.js";

const app = useAppStore();
const users = useUsersStore();

// have to check app.routeUsername or firebase gets mad
const currentUser = computed(() => users.currentUser);
const user = ref(
  users.currentUser && app.routeUsername === users.currentUser.username
    ? currentUser.value
    : await users.getUserByUsername(app.routeUsername)
);

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

watch(
  () => app.routeUsername,
  async () => {
    user.value =
      users.currentUser && app.routeUsername === users.currentUser.username
        ? users.currentUser
        : await users.getUserByUsername(app.routeUsername);
  }
);

watch(currentUser, () => {
  if (user.value && user.value.username === currentUser.value.username)
    user.value = currentUser.value;
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
          v-if="
            user &&
            app.routeName !== 'Tweet' &&
            app.routeName !== 'Notifications'
          "
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
</style>
