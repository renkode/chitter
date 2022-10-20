<script setup>
import { onMounted, computed } from "vue";
import ProfileBioSC from "./ProfileBioSC.vue";
import { useUsersStore } from "@/stores/users.js";
import { useAppStore } from "@/stores/app.js";

const app = useAppStore();
const users = useUsersStore();
const user = computed(() => users.getUser(app.viewProfileId));

async function delay(time) {
  await new Promise((res) => {
    setTimeout(() => {}, time);
  });
}

onMounted(() => {
  delay(0);
});
</script>

<template>
  <div class="profile-wrapper">
    <ProfileBioSC v-if="user" :user="user" />
    <div class="error gray-text" v-else>User not found.</div>
  </div>
</template>

<style>
.profile-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
