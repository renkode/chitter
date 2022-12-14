<script setup>
import UserList from "./UserList.vue";
import { ref, defineProps } from "vue";
import { useAppStore } from "@/stores/app.js";
import { useUsersStore } from "@/stores/users.js";
import router from "@/router/index.js";

const app = useAppStore();
const users = useUsersStore();
const props = defineProps(["username"]);

const user = ref(await users.getUserByUsername(props.username));
const userFollowing = ref(
  await Promise.all(
    user.value.following.map(async (id) => await users.getUser(id))
  )
);
const userFollowers = ref(
  await Promise.all(
    user.value.followers.map(async (id) => await users.getUser(id))
  )
);
</script>

<template>
  <div class="follow-list-wrapper">
    <div class="profile-tab-container">
      <span
        class="profile-tab"
        :class="{ 'gray-text': app.routeName !== 'Following' }"
        @click="
          router.replace({
            name: 'Following',
            params: { username: props.username },
          })
        "
        ><span class="tab-wrapper"
          >Following
          <span
            class="tab-indicator"
            v-if="app.routeName === 'Following'"
          ></span> </span
      ></span>
      <span
        class="profile-tab"
        :class="{ 'gray-text': app.routeName !== 'Followers' }"
        @click="
          router.replace({
            name: 'Followers',
            params: { username: props.username },
          })
        "
        ><span class="tab-wrapper"
          >Followers
          <span
            class="tab-indicator"
            v-if="app.routeName === 'Followers'"
          ></span> </span
      ></span>
    </div>

    <UserList v-if="app.routeName === 'Following'" :users="userFollowing" />
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
  text-shadow: 1px 0px 0px white;
}

.profile-tab.gray-text {
  text-shadow: none;
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
