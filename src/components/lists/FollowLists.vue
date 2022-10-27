<script setup>
import UserList from "./UserList.vue";
import { computed } from "vue";
import { useUsersStore } from "@/stores/users.js";
import { useAppStore } from "@/stores/app.js";

const app = useAppStore();
const users = useUsersStore();
const user = computed(() => users.getUser(app.viewProfileId));
const userFollowing = computed(() =>
  user.value.following.map((id) => users.getUser(id))
);
const userFollowers = computed(() =>
  user.value.followers.map((id) => users.getUser(id))
);
</script>

<template>
  <div class="follow-list-wrapper">
    <div class="profile-tab-container">
      <span
        class="profile-tab"
        :class="{ 'gray-text': app.view !== 'following' }"
        @click="app.setView('following')"
        ><span class="tab-wrapper"
          >Following
          <span
            class="tab-indicator"
            v-if="app.view === 'following'"
          ></span> </span
      ></span>
      <span
        class="profile-tab"
        :class="{ 'gray-text': app.view !== 'followers' }"
        @click="app.setView('followers')"
        ><span class="tab-wrapper"
          >Followers
          <span
            class="tab-indicator"
            v-if="app.view === 'followers'"
          ></span> </span
      ></span>
    </div>

    <UserList v-if="app.view === 'following'" :users="userFollowing" />
    <UserList v-else :users="userFollowers" />
  </div>
</template>

<style scoped>
.follow-list-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.profile-tab-container {
  width: 100%;
  height: 53px;
  display: flex;
}

.profile-tab {
  flex-grow: 1;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.15s ease;
  flex-wrap: nowrap;
  width: fit-content;
}

.profile-tab:hover {
  background-color: #becae51e;
}

.tab-wrapper {
  height: 100%;
  min-width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-wrap: nowrap;
  word-wrap: normal;
  word-break: keep-all;
  white-space: nowrap;
}

.tab-indicator {
  content: "";
  width: 100%;
  height: 4px;
  background-color: #1d9bf0;
  border-radius: 2px;
  position: absolute;
  bottom: 0;
}
</style>
