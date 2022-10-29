<script setup>
import { defineProps, computed } from "vue";
import ProfilePicture from "../subcomponents/ProfilePicture.vue";
import { useAppStore } from "@/stores/app";

const app = useAppStore();
const props = defineProps({
  type: String,
  id: String,
  userId: String,
  iconUrl: String,
  name: String,
  username: String,
  tweetText: String,
  containsMedia: Boolean,
  isNew: Boolean,
});
const notifText = computed(() => {
  switch (props.type) {
    case "like-origin":
      return " liked your Tweet";
    case "like-retweet":
      return " liked your Retweet";
    case "retweet-origin":
      return " Retweeted your Tweet";
    case "retweet-retweet":
      return " Retweeted your Retweet";
    default:
      return " followed you";
  }
});
const fakeMediaUrl = computed(() => ` pic.chitter.com/${props.id}`);
const isLike = computed(
  () => props.type === "like-origin" || props.type === "like-retweet"
);
const isRetweet = computed(
  () => props.type === "retweet-origin" || props.type === "retweet-retweet"
);

function handleClick() {
  if (props.type === "follow") {
    app.viewUserProfile(props.userId, props.username);
  } else {
    app.setTweetContext(props.id);
  }
}
</script>

<template>
  <div class="notif-container" :class="{ new: isNew }" @click="handleClick">
    <div class="icon-container">
      <span class="notif-icon" v-if="isLike">
        <v-icon name="bi-heart-fill" scale="1.6" fill="#e21c68"
      /></span>
      <span class="notif-icon" v-else-if="isRetweet">
        <v-icon name="la-retweet-solid" scale="1.6" fill="#10d3a9"
      /></span>
      <span class="notif-icon" v-else-if="props.type === 'follow'">
        <v-icon name="io-person" scale="1.5" fill="#14b5f5"
      /></span>
    </div>
    <div class="notif-body">
      <ProfilePicture :url="props.iconUrl" :size="32" />
      <div class="notif-text">
        <strong>{{ props.name }}</strong
        >{{ notifText }}
      </div>
      <div class="tweet-text gray-text">
        {{ props.tweetText
        }}<span v-if="containsMedia">{{ fakeMediaUrl }}</span>
      </div>
    </div>
  </div>
</template>

<style>
.notif-container {
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
  justify-self: stretch;
}
.notif-container:hover {
  background-color: rgba(255, 255, 255, 0.065);
}

.notif-container.new {
  background-color: rgba(255, 255, 255, 0.065);
}

.icon-container {
  width: 48px;
  align-self: stretch;
  display: flex;
  justify-content: flex-end;
}

.notif-body {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
