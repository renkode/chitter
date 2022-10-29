<script setup>
import UserList from "./UserList.vue";
import { defineProps, computed } from "vue";
import { useUsersStore } from "@/stores/users.js";
import router from "@/router/index.js";

const users = useUsersStore();
const props = defineProps(["username"]);

const user = computed(() => users.getUserByUsername(props.username));
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
        :class="{ 'gray-text': router.currentRoute.value.name !== 'Following' }"
        @click="
          router.push({
            name: 'Following',
            params: { username: props.username },
          })
        "
        ><span class="tab-wrapper"
          >Following
          <span
            class="tab-indicator"
            v-if="router.currentRoute.value.name === 'Following'"
          ></span> </span
      ></span>
      <span
        class="profile-tab"
        :class="{ 'gray-text': router.currentRoute.value.name !== 'Followers' }"
        @click="
          router.push({
            name: 'Followers',
            params: { username: props.username },
          })
        "
        ><span class="tab-wrapper"
          >Followers
          <span
            class="tab-indicator"
            v-if="router.currentRoute.value.name === 'Followers'"
          ></span> </span
      ></span>
    </div>

    <UserList
      v-if="router.currentRoute.value.name === 'Following'"
      :users="userFollowing"
    />
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
