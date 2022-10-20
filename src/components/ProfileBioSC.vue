<script setup>
import { defineProps, computed } from "vue";
import ProfilePicture from "./ProfilePicture.vue";
import formatDateMixin from "../mixins/formatDateMixin.js";
const props = defineProps({ user: Object });
const joinDate = computed(() =>
  formatDateMixin.formatJoinDate(props.user.userData.createdAt)
);
</script>

<template>
  <div class="profile-container">
    <div
      class="header-img"
      :style="{ backgroundImage: `url(${props.user.userData.headerUrl})` }"
    ></div>

    <div class="user-info-container">
      <div class="avatar-and-edit-wrapper">
        <ProfilePicture :url="props.user.userData.avatarUrl" :size="135" />
      </div>
      <div class="user-info-wrapper">
        <span class="display-name">{{ props.user.userData.name }}</span>
        <span class="username gray-text"
          >@{{ props.user.userData.username }}</span
        >
      </div>
      <span class="description">{{ props.user.userData.description }}</span>
      <span class="misc-info-wrapper">
        <span class="misc-info gray-text" v-if="props.user.userData.location"
          ><span class="misc-icon"
            ><v-icon
              name="md-locationon-outlined"
              scale="1.0"
              fill="#ffffff80" /></span
          >{{ props.user.userData.location }}</span
        >
        <span class="misc-info gray-text" v-if="props.user.userData.website">
          <span class="misc-icon"
            ><v-icon name="oi-link" scale="1.0" fill="#ffffff80" /></span
          >{{ props.user.userData.website }}</span
        >
        <span class="misc-info gray-text" v-if="props.user.userData.birthday">
          <span class="misc-icon"
            ><v-icon
              name="la-birthday-cake-solid"
              scale="1.0"
              fill="#ffffff80" /></span
          >{{ props.user.userData.birthday }}</span
        >
        <span class="misc-info gray-text" v-if="joinDate"
          ><span class="misc-icon"
            ><v-icon name="bi-calendar3" scale="1.0" fill="#ffffff80" /></span
          >Joined {{ joinDate }}</span
        >
      </span>
    </div>
  </div>
</template>

<style scoped>
.profile-container {
  max-width: 600px;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
}

.header-img {
  width: 100%;
  max-height: 200px;
  aspect-ratio: 16 / 6;
  background-size: cover;
}

.user-info-container {
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.user-info-wrapper {
  display: flex;
  flex-direction: column;
  font-size: 1.05rem;
}

.username {
  margin: 0;
}

.description {
  font-size: 1.05rem;
}

.misc-info-wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
}

.misc-icon {
  margin-right: 0.4rem;
}

.misc-info {
  font-size: 1.05rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 1rem;
  word-wrap: nowrap;
  word-break: keep-all;
}

.user-info-wrapper,
.description,
.misc-info-wrapper {
  margin-bottom: 0.7rem;
}
</style>
