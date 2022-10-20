<script setup>
import { onMounted } from "vue";
import ProfileBioSC from "./ProfileBioSC.vue";
import { useUserStore } from "@/stores/user.js";
const store = useUserStore();

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
    <ProfileBioSC :user="store" />
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
