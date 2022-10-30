<script setup>
import { defineProps, computed } from "vue";
import ProfilePicture from "./ProfilePicture.vue";
import HeaderPicture from "./HeaderPicture.vue";
import FollowButton from "./FollowButton.vue";
import formatDateMixin from "@/mixins/formatDateMixin.js";
import { useAppStore } from "@/stores/app.js";
import { useUsersStore } from "@/stores/users.js";

const store = useAppStore();
const users = useUsersStore();
const props = defineProps({ user: Object, tab: String, setTab: Function });
const shortURL = computed(() =>
  props.user.website.replace(/https?:\/\/(www\.)?/gi, "").replace(/\/+$/, "")
);
const joinDate = computed(() =>
  formatDateMixin.formatJoinDate(props.user.timestamp)
);

const openModal = () => {
  store.setModalType("edit-profile");
  store.toggleModal();
};
</script>

<template>
  <div class="profile-container">
    <HeaderPicture :url="props.user.headerUrl" />

    <div class="user-info-container">
      <div class="avatar-wrapper">
        <ProfilePicture :url="props.user.avatarUrl" :size="135" />
        <button
          class="edit-profile-btn"
          v-if="store.currentId == props.user.id"
          @click="openModal"
        >
          Edit Profile
        </button>
        <FollowButton v-else-if="store.currentUser" :userId="props.user.id" />
      </div>
      <div class="user-info-wrapper">
        <span class="display-name">{{ props.user.name }}</span>
        <span class="username-wrapper">
          <span class="username gray-text"> @{{ props.user.username }} </span>
          <div
            v-if="
              store.currentId &&
              users.isFollowingUser(props.user.id, store.currentId)
            "
            class="follows-you gray-text"
          >
            Follows you
          </div>
        </span>
      </div>
      <span class="description">{{ props.user.description }}</span>
      <span class="misc-info-wrapper">
        <span class="misc-info gray-text" v-if="props.user.location"
          ><span class="misc-icon"
            ><v-icon
              name="md-locationon-outlined"
              scale="1.0"
              fill="#ffffff80" /></span
          >{{ props.user.location }}</span
        >
        <span class="misc-info gray-text" v-if="props.user.website">
          <span class="misc-icon"
            ><v-icon name="oi-link" scale="1.0" fill="#ffffff80" /></span
          ><a class="blue-link" :href="props.user.website">{{
            shortURL
          }}</a></span
        >
        <span class="misc-info gray-text" v-if="props.user.birthday.length > 1">
          <span class="misc-icon"
            ><v-icon
              name="la-birthday-cake-solid"
              scale="1.0"
              fill="#ffffff80" /></span
          >{{ props.user.birthday }}</span
        >
        <span class="misc-info gray-text" v-if="joinDate"
          ><span class="misc-icon"
            ><v-icon name="bi-calendar3" scale="1.0" fill="#ffffff80" /></span
          >Joined {{ joinDate }}</span
        >
      </span>
      <span class="follow-metric-wrapper">
        <router-link
          class="follow-metric"
          :to="{
            name: 'Following',
            params: { username: props.user.username },
          }"
          ><strong>{{ props.user.followingCount }}</strong
          ><span class="follow gray-text"> Following</span></router-link
        >
        <router-link
          class="follow-metric"
          :to="{ name: 'Followers', params: { username: props.user.username } }"
          ><strong>{{ props.user.followerCount }}</strong
          ><span class="follow gray-text"> Followers</span></router-link
        >
      </span>
    </div>

    <div class="profile-tab-container">
      <span
        class="profile-tab"
        :class="{ 'gray-text': props.tab !== 'tweets' }"
        @click="setTab('tweets')"
        ><span class="tab-wrapper"
          >Tweets
          <span
            class="tab-indicator"
            v-if="props.tab === 'tweets'"
          ></span> </span
      ></span>
      <span
        class="profile-tab"
        :class="{ 'gray-text': props.tab !== 'tweets-and-replies' }"
        @click="setTab('tweets-and-replies')"
        ><span class="tab-wrapper"
          >Tweets & replies
          <span
            class="tab-indicator"
            v-if="props.tab === 'tweets-and-replies'"
          ></span> </span
      ></span>
      <span
        class="profile-tab"
        :class="{ 'gray-text': props.tab !== 'media' }"
        @click="setTab('media')"
        ><span class="tab-wrapper"
          >Media
          <span
            class="tab-indicator"
            v-if="props.tab === 'media'"
          ></span> </span
      ></span>
      <span
        class="profile-tab"
        :class="{ 'gray-text': props.tab !== 'likes' }"
        @click="setTab('likes')"
        ><span class="tab-wrapper"
          >Likes
          <span
            class="tab-indicator"
            v-if="props.tab === 'likes'"
          ></span> </span
      ></span>
    </div>
  </div>
</template>

<style scoped>
a.follow-metric,
a.follow-metric:link,
a.follow-metric:visited {
  color: white;
}

.profile-container {
  max-width: 600px;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
}

.avatar-wrapper {
  position: relative;
  overflow: visible;
  height: min(60px, 18vw);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.profile-pic {
  position: absolute;
  width: min(135px, 25vw) !important;
  left: 0;
  top: max(-85px, -20vw);
  outline: #262a2e solid 4px;
}

.edit-profile-btn {
  border-radius: 18px;
  cursor: pointer;
  transition: all 0.15s ease;
  height: 36px;
  width: fit-content;
  padding: 0 1rem;
  background-color: #262a2e;
  color: white;
  border: #ffffff80 solid 1px;
}

.edit-profile-btn:hover {
  background-color: #becae51e;
}

.user-info-container {
  width: 100%;
  height: 100%;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
}

.user-info-wrapper {
  display: flex;
  flex-direction: column;
  font-size: 1.05rem;
  width: 100%;
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
  flex-wrap: nowrap;
  word-wrap: normal;
  word-break: normal;
  white-space: nowrap;
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

.misc-info {
  height: 1.5rem;
  font-size: 1.05rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 1rem;
  word-wrap: nowrap;
  word-break: keep-all;
}

.misc-icon {
  margin-right: 0.4rem;
}

.user-info-wrapper,
.description,
.misc-info-wrapper {
  margin-bottom: 0.7rem;
}

.follow-metric-wrapper {
  display: flex;
  flex-direction: row;
}

.follow-metric {
  margin-right: 1.2rem;
  cursor: pointer;
}

.follow-metric:hover {
  text-decoration: underline;
  text-decoration-color: white;
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
