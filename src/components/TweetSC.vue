<script setup>
import { ref, defineProps, computed, onMounted } from "vue";
import dayjs from "dayjs";
import ProfilePicture from "./ProfilePicture.vue";
import formatDateMixin from "../mixins/formatDateMixin.js";
import { useTweetStore } from "@/stores/tweets.js";
import { useUserStore } from "@/stores/user.js";

const tweetStore = useTweetStore();
const userStore = useTweetStore();

var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const props = defineProps({ userData: Object, tweetData: Object });

const getMediaClass = computed(() => {
  if (!props.tweetData.media || props.tweetData.media.length === 0) return;
  switch (props.tweetData.media.length) {
    case 1:
      return "one-img";
    case 2:
      return "two-img";
    case 3:
      return "three-img";
    case 4:
      return "four-img";
    default:
      return "";
  }
});

const isTweetMenuOpen = ref(false);
const toggleTweetMenu = (e) => {
  e.preventDefault();
  isTweetMenuOpen.value = !isTweetMenuOpen.value;
};

const doSomething = () => {
  console.log("tweet menu action");
};

const isLiked = ref(false);
const isRetweeted = ref(false); // default should depend on user's likes/rts
const toggleLike = () => {
  // like tweet
  if (!isLiked.value) {
    isLiked.value = true;
    tweetStore.addLike(props.tweetData.id, "1");
  }
  // unlike tweet
  else {
    isLiked.value = false;
    tweetStore.removeLike(props.tweetData.id, "1");
  }
};
const toggleRetweet = () => {
  // like tweet
  if (!isRetweeted.value) {
    isRetweeted.value = true;
    tweetStore.addRetweet(props.tweetData.id, "1");
  }
  // unlike tweet
  else {
    isRetweeted.value = false;
    tweetStore.removeRetweet(props.tweetData.id, "1");
  }
};

const tweetText = ref(null);
// embed @'s, hashtags and links inside tweets
const embedLinks = computed(() => {
  if (!props.tweetData.text || props.tweetData.text.length === 0) return;

  const urlRegex = new RegExp(
    /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)?/gi
  );
  const hashtagRegex = new RegExp(/(#+[a-zA-Z0-9(_)]{1,})/g);
  const atRegex = new RegExp(/(@+[a-zA-Z0-9(_)]{1,})/g);

  const embedArr = props.tweetData.text.split(" ").map((str) => {
    switch (true) {
      case urlRegex.test(str):
        return `<a class="tweet-link" href="${str}" target="_blank">${str}</a>`;
      case hashtagRegex.test(str):
        return `<a class="tweet-link" href="#">${str}</a>`;
      case atRegex.test(str):
        return `<a class="tweet-link" href="#">${str}</a>`;
      default:
        return str;
    }
  });
  return embedArr.join(" ");
});

const currentTime = ref(dayjs().toISOString());
const getTimeSinceCreation = ref(
  formatDateMixin.formatDate(props.tweetData.createdAt, currentTime.value)
);

onMounted(() => {
  // set tweet text
  tweetText.value.innerHTML = embedLinks.value; // dangerous
  // update tweet time every 30s (if tweet isn't a day old);
  if (
    dayjs(currentTime.value).diff(dayjs(props.tweetData.createdAt), "hour") > 23
  )
    return;
  const timer = setInterval(() => {
    if (
      getTimeSinceCreation.value !==
      formatDateMixin.formatDate(props.tweetData.createdAt, currentTime.value)
    ) {
      getTimeSinceCreation.value = formatDateMixin.formatDate(
        props.tweetData.createdAt,
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
    <!-- <div class="user-retweet">lorem ipsum Retweeted</div> -->
    <div class="tweet-body">
      <div class="profile-pic-container">
        <ProfilePicture
          :profilePicUrl="props.userData.imgs.avatarUrl"
          :size="48"
        />
      </div>
      <div class="tweet-data">
        <div class="user-info-and-btn">
          <div class="user-info-wrapper">
            <span class="display-name"
              ><a href="#">{{ props.userData.name }}</a></span
            >
            <span class="username"
              ><a href="#">@{{ props.userData.username }}</a></span
            >
            <span class="separator">·</span>
            <span class="tweet-time">{{ getTimeSinceCreation }}</span>
          </div>
          <span class="tweet-action-icon extra-btn" @click="toggleTweetMenu"
            ><v-icon name="hi-dots-horizontal" scale="1.0" fill="#ffffff80" />
            <div v-if="isTweetMenuOpen" class="overlay"></div>
            <div v-if="isTweetMenuOpen" class="tweet-menu-container">
              <ul class="tweet-menu-list">
                <li class="tweet-menu-item delete-tweet" @click="doSomething">
                  <span class="tweet-menu-icon"
                    ><v-icon name="bi-trash" scale="1.1" fill="red" /></span
                  >Delete
                </li>
                <li class="tweet-menu-item">
                  <span class="tweet-menu-icon"
                    ><v-icon
                      name="co-user-follow"
                      scale="1.1"
                      fill="#ffffff80" /></span
                  >Follow @username
                </li>
                <li class="tweet-menu-item">
                  <span class="tweet-menu-icon"
                    ><v-icon
                      name="co-user-unfollow"
                      scale="1.1"
                      fill="#ffffff80" /></span
                  >Unfollow @username
                </li>
                <button class="cancel-btn">Cancel</button>
              </ul>
            </div></span
          >
        </div>
        <div class="tweet-content">
          <div class="tweet-text" ref="tweetText"></div>
          <div
            class="tweet-media"
            :class="[getMediaClass]"
            v-if="props.tweetData.media.length > 0"
          >
            <img
              v-for="img in props.tweetData.media"
              :key="props.tweetData.media.indexOf(img)"
              :src="img"
            />
          </div>
        </div>

        <div class="tweet-actions-wrapper">
          <span class="tweet-metrics">
            <span class="tweet-action-icon reply-btn"
              ><v-icon name="fa-regular-comment" scale="1.0" fill="#ffffff80"
            /></span>
            <span
              v-if="props.tweetData.metrics.replyCount > 0"
              class="tweet-metric reply-metric"
              >{{ props.tweetData.metrics.replyCount }}</span
            >
          </span>
          <span class="tweet-metrics">
            <span
              class="tweet-action-icon retweet-btn"
              :class="{ retweeted: isRetweeted }"
              @click="toggleRetweet"
              ><v-icon name="la-retweet-solid" scale="1.15" fill="#ffffff80"
            /></span>
            <span
              v-if="props.tweetData.metrics.retweetCount > 0"
              class="tweet-metric retweet-metric"
              >{{ props.tweetData.metrics.retweetCount }}</span
            >
          </span>
          <span class="tweet-metrics">
            <span
              class="tweet-action-icon like-btn"
              :class="{ liked: isLiked }"
              @click="toggleLike"
              ><v-icon name="fa-regular-heart" scale="1.0" fill="#ffffff80"
            /></span>
            <span
              v-if="props.tweetData.metrics.likeCount > 0"
              class="tweet-metric like-metric"
              >{{ props.tweetData.metrics.likeCount }}</span
            >
          </span>
          <span class="tweet-action-icon share-tweet-btn"
            ><v-icon name="gi-share" scale="1.0" fill="#ffffff80"
          /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.tweet-container {
  border-bottom: rgba(255, 255, 255, 0.25) 1px solid;
  padding: 0.75rem 1rem 0.4rem 1rem;
  width: 598px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: background-color 0.15s ease;
}
.tweet-container:hover {
  background-color: rgba(255, 255, 255, 0.065);
}

.tweet-body {
  display: flex;
  flex-direction: row;
}

.profile-pic-container {
  height: 100%;
}

.tweet-data {
  padding-left: 1rem;
}

.user-info-and-btn {
  width: 100%;
  height: 1rem;
  margin-bottom: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.username,
.username a,
.tweet-time,
.separator,
.tweet-metric {
  vertical-align: center;
  color: rgba(255, 255, 255, 0.5);
}

.display-name,
.username {
  /* display: inline-block;
  overflow: hidden; */
  white-space: nowrap;
  word-wrap: break-word;
  text-overflow: ellipsis;
}

.username {
  margin-left: 4px;
}

.separator {
  margin: 0px 5px;
}

.display-name,
.tweet-text {
  word-wrap: break-word;
}

.tweet-text {
  white-space: pre-wrap;
}

.user-info-wrapper a,
.display-name:visited,
.username:visited {
  text-decoration: none;
}

.display-name a {
  color: white;
}

.display-name a:hover,
.username a:hover {
  text-decoration: underline;
}

.tweet-content {
  margin-bottom: 0.4rem;
}

.tweet-link {
  color: #1d9bf0;
  text-decoration: none;
}

.tweet-link:hover {
  text-decoration: underline;
}

.tweet-actions-wrapper {
  max-width: 425px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.tweet-action-icon {
  width: 34px;
  height: 34px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.extra-btn {
  position: relative;
  left: 8px;
}

.tweet-action-icon,
.tweet-action-icon svg,
.tweet-metric {
  transition-property: color, background-color, fill;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}

.reply-btn:hover,
.share-tweet-btn:hover,
.extra-btn:hover {
  background-color: rgba(0, 132, 255, 0.233);
}

.reply-btn:hover svg,
.share-tweet-btn:hover svg,
.extra-btn:hover > svg,
.reply-btn:hover + .reply-metric {
  color: rgb(20, 181, 245);
  fill: rgb(20, 181, 245);
}

.retweet-btn:hover {
  background-color: rgba(0, 255, 191, 0.158);
}

.retweet-btn:hover svg,
.retweet-btn.retweeted svg,
.retweet-btn:hover + .retweet-metric,
.retweet-btn.retweeted + .retweet-metric {
  color: rgb(16, 211, 169);
  fill: rgb(16, 211, 169);
}

.like-btn:hover {
  background-color: rgba(255, 0, 64, 0.233);
}

.like-btn:hover svg,
.like-btn.liked svg,
.like-btn:hover + .like-metric,
.like-btn.liked + .like-metric {
  color: rgb(226, 28, 104);
  fill: rgb(226, 28, 104);
}

svg {
  z-index: 0;
}

.tweet-metrics {
  user-select: none;
  position: relative;
  left: -8px;
  display: flex;
  align-items: center;
}

.tweet-metric {
  position: relative;
  left: 4px;
  font-size: 0.9rem;
}

.tweet-media {
  max-width: 100%;
  width: fit-content;
  margin-top: 0.5rem;
  border: rgba(255, 255, 255, 0.25) 1px solid;
  border-radius: 20px;
  overflow: hidden;
}

.tweet-media img {
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
  height: 100%;
  max-height: 510px;
  object-fit: cover;
}

.two-img,
.three-img,
.four-img {
  display: grid;
  gap: 2px;
  grid-template-columns: 1fr 1fr;
  max-height: 285px;
  width: 100%;
}

.three-img {
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "first second"
    "first third";
}

.three-img img {
  width: 100%;
}

.three-img img:first-child {
  grid-area: first;
}

.three-img img:nth-child(2) {
  grid-area: second;
}

.three-img img:last-child {
  grid-area: third;
}

.four-img {
  grid-template-rows: 1fr 1fr;
  grid-template-areas: none;
}

.four-img img {
  width: 100%;
}

.tweet-menu-container {
  border-radius: 10px;
  box-shadow: 0px 0px 6px rgba(255, 255, 255, 0.3);
  color: white;
  position: absolute;
  width: max-content;
  height: fit-content;
  z-index: 5;
  left: -152px;
  top: 0px;
}

.tweet-menu-container li {
  cursor: pointer;
  padding: 0.7em 0.5rem;
}

.tweet-menu-container li:hover {
  background-color: rgba(255, 255, 255, 0.137);
}

.tweet-menu-icon {
  margin-right: 8px;
}

.overlay {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 4;
  cursor: default;
}

.delete-tweet {
  color: red;
}

.cancel-btn {
  display: none;
}

@media screen and (max-width: 700px) {
  .tweet-container {
    max-width: 600px;
    width: 100%;
  }
}
</style>
