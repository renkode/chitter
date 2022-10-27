<script setup>
import { ref, defineProps, onMounted } from "vue";
import dayjs from "dayjs";
import ProfilePicture from "./ProfilePicture.vue";
import formatDateMixin from "@/mixins/formatDateMixin.js";

var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const props = defineProps({
  user: Object,
  tweet: Object,
});

const currentTime = ref(dayjs().toISOString());
const getTimeSinceCreation = ref(
  formatDateMixin.formatTweetDate(props.tweet.timestamp, currentTime.value)
);

onMounted(() => {
  // update tweet time every 30s (if tweet isn't a day old);
  if (dayjs(currentTime.value).diff(dayjs(props.tweet.timestamp), "hour") > 23)
    return;
  const timer = setInterval(() => {
    if (
      getTimeSinceCreation.value !==
      formatDateMixin.formatTweetDate(props.tweet.timestamp, currentTime.value)
    ) {
      getTimeSinceCreation.value = formatDateMixin.formatTweetDate(
        props.tweet.timestamp,
        currentTime.value
      );
    }
  }, 30000);
  return () => {
    clearInterval(timer);
  };
});
</script>

<template>
  <div class="tweet-container">
    <div class="tweet-body">
      <div class="profile-pic-container">
        <ProfilePicture :url="props.user.avatarUrl" :size="48" />
        <div class="gray-line"></div>
      </div>
      <div class="tweet-data">
        <div class="user-info-and-btn">
          <div class="user-info-wrapper">
            <span class="display-name">{{ props.user.name }}</span>
            <span class="username gray-text">@{{ props.user.username }}</span>
            <span class="separator gray-text">·</span>
            <span class="tweet-time gray-text">{{ getTimeSinceCreation }}</span>
          </div>
        </div>
        <div class="tweet-content">
          <div class="tweet-text" ref="tweetText">{{ props.tweet.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tweet-container {
  cursor: auto;
  background-color: rgba(255, 255, 255, 0);
}
.tweet-container:hover {
  background-color: rgba(255, 255, 255, 0);
}
.profile-pic-container {
  position: relative;
  height: 100%;
}
</style>
