<script setup>
import { defineProps } from "vue";
import ProfilePicture from "./ProfilePicture.vue";
import FollowButton from "./FollowButton.vue";
import { useAppStore } from "@/stores/app";
import { useUsersStore } from "@/stores/users";
const app = useAppStore();
const users = useUsersStore();
const props = defineProps([
  "id",
  "name",
  "username",
  "avatarUrl",
  "description",
]);
</script>

<template>
  <div class="user-container" @click="app.viewUserProfile(props.id)">
    <div class="profile-pic-container">
      <ProfilePicture
        :url="props.avatarUrl"
        :size="48"
        @click.stop="app.viewUserProfile(props.id)"
      />
    </div>
    <div class="user-body">
      <div class="user-info-and-btn">
        <div class="user-info-wrapper">
          <span class="display-name" @click.stop="app.viewUserProfile(props.id)"
            ><a href="#">{{ props.name }}</a></span
          >
          <span class="username-wrapper">
            <span class="username gray-text"> @{{ props.username }} </span>
            <div
              v-if="users.isFollowingUser(props.id, app.currentId)"
              class="follows-you gray-text"
            >
              Follows you
            </div>
          </span>
        </div>
        <FollowButton :userId="props.id" />
      </div>
      <div class="description">{{ props.description }}</div>
    </div>
  </div>
</template>

<style scoped>
.user-container {
  border-top: rgba(255, 255, 255, 0.25) 1px solid;
  padding: 1rem 1.25rem;
  max-width: 598px;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  transition: background-color 0.15s ease;
  gap: 1rem;
}
.user-container:hover {
  background-color: rgba(255, 255, 255, 0.065);
}

.user-body {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.user-info-and-btn {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  height: fit-content;
}

.user-info-wrapper {
  flex-direction: column;
  width: 30vw;
}

.username-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: fit-content;
  width: 100%;
}

.follows-you {
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.12);
  font-size: 0.7rem;
  height: 1rem;
  padding: 0 4px;
  display: flex;
  align-items: center;
  word-wrap: normal;
  word-break: normal;
  white-space: nowrap;
}
</style>
