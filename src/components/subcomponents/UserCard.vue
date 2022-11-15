<script setup>
import { ref, defineProps } from "vue";
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
  "isSimple",
]);
const isFollowing = ref(
  users.currentId
    ? await users.isFollowingUser(props.id, users.currentId)
    : false
);

function goToProfile() {
  app.viewUserProfile(props.username);
}
</script>

<template>
  <div
    class="user-container"
    @click="goToProfile"
    :class="{ isSimple: props.isSimple }"
  >
    <div class="profile-pic-container">
      <ProfilePicture
        :url="props.avatarUrl"
        :size="48"
        @click.stop="goToProfile"
      />
    </div>
    <div class="user-body">
      <div class="user-info-and-btn">
        <div class="user-info-wrapper">
          <span class="display-name" @click.stop="goToProfile"
            ><a>{{ props.name }}</a></span
          >
          <span class="username-wrapper">
            <span class="username gray-text"> @{{ props.username }} </span>
            <div
              v-if="isFollowing && !props.isSimple"
              class="follows-you gray-text"
            >
              Follows you
            </div>
          </span>
        </div>
        <FollowButton
          v-if="users.currentId && users.currentId !== props.id"
          :userId="props.id"
        />
      </div>
      <div class="description" v-if="props.description">
        {{ props.description }}
      </div>
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
  width: 100%;
  flex-grow: 1;
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

.isSimple.user-container {
  border-top: 0;
}

.isSimple .user-body {
  justify-content: center;
}

.isSimple .user-info-wrapper {
  width: auto;
}

.isSimple .user-info-and-btn {
  margin-bottom: 0;
}
</style>
