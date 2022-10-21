<script setup>
import { ref, defineProps, computed, onMounted } from "vue";
import dayjs from "dayjs";
import ProfilePicture from "./ProfilePicture.vue";
import formatDateMixin from "../mixins/formatDateMixin.js";
import { getMediaClass } from "../mixins/utilities.js";
import { useTweetStore } from "@/stores/tweets.js";
import { useAppStore } from "@/stores/app.js";
import { useUsersStore } from "@/stores/users.js";

const tweets = useTweetStore();
const app = useAppStore();
const users = useUsersStore();

var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const props = defineProps({
  id: Number,
  user: Object,
  tweet: Object,
  type: String, // status, retweet, reply, reply-origin
  retweetedBy: String,
  viewing: Boolean,
});

const setTweetContext = () => {
  if (app.viewTweetId === props.id) return;
  if (window.getSelection().toString().length > 0) return; // don't trigger click while highlighting text
  app.setPath(`/status/${props.id}`);
  app.setView("tweet");
  app.setViewTweetId(props.id);
};

const isTweetMenuOpen = ref(false);
const toggleTweetMenu = (e) => {
  e.preventDefault();
  isTweetMenuOpen.value = !isTweetMenuOpen.value;
};

const deleteTweet = () => {
  tweets.removeTweet(props.id, props.user.id);
};

const doSomething = (e) => {
  e.stopPropagation();
  console.log("test");
};

const isLiked = computed(() => tweets.hasLiked(props.tweet.id, app.currentId));
const isRetweeted = computed(() =>
  tweets.hasRetweeted(props.tweet.id, app.currentId)
);

const toggleLike = () => {
  if (!isLiked.value) {
    tweets.addLike(props.id, app.currentId);
  } else {
    tweets.removeLike(props.id, app.currentId);
  }
};
const toggleRetweet = () => {
  if (!isRetweeted.value) {
    tweets.addRetweet(props.id, app.currentId);
  } else {
    tweets.removeRetweet(props.id, app.currentId);
  }
};

const tweetText = ref(null);
// embed @'s, hashtags and links inside tweets
const embedLinks = computed(() => {
  if (!props.tweet.text || props.tweet.text.length === 0) return;

  const urlRegex = new RegExp(
    /[-a-zA-Z0-9@:%._~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_.~#?&//=]*)?/gi
  );
  const hashtagRegex = new RegExp(/(#+[a-zA-Z0-9(_)]{1,})/g);
  const atRegex = new RegExp(/(@+[a-zA-Z0-9(_)]{1,})/g);

  const embedArr = props.tweet.text.split(" ").map((str) => {
    switch (true) {
      case urlRegex.test(str):
        return `<a class="blue-link" href="${str}" target="_blank">${str}</a>`;
      case hashtagRegex.test(str):
        return `<a class="blue-link non-url" href="#">${str}</a>`;
      case atRegex.test(str):
        return `<a class="blue-link non-url" href="#">${str}</a>`;
      default:
        return str;
    }
  });
  return embedArr.join(" ");
});

const currentTime = ref(dayjs().toISOString());
const getTimeSinceCreation = ref(
  formatDateMixin.formatTweetDate(props.tweet.timestamp, currentTime.value)
);

onMounted(() => {
  // set tweet text
  tweetText.value.innerHTML = embedLinks.value || ""; // dangerous
  const anchors = tweetText.value.querySelectorAll(".non-url");
  Array.from(anchors).forEach((anchor) =>
    anchor.addEventListener("click", doSomething)
  );
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
    Array.from(anchors).forEach((anchor) =>
      anchor.removeEventListener("click", doSomething)
    );
    clearInterval(timer);
  };
});
</script>

<template>
  <div class="tweet-container" @click="setTweetContext">
    <div
      class="user-retweet gray-text"
      v-if="props.type === 'retweet' && props.retweetedBy"
    >
      <v-icon name="la-retweet-solid" scale="0.89" fill="#ffffff80" />{{
        props.retweetedBy
      }}
      Retweeted
    </div>
    <div class="tweet-body">
      <div class="profile-pic-container">
        <ProfilePicture
          :url="props.user.avatarUrl"
          :size="48"
          @click.stop="app.viewUserProfile(props.user.id)"
        />
      </div>
      <div class="tweet-data">
        <div class="user-info-and-btn">
          <div class="user-info-wrapper">
            <span
              class="display-name"
              @click.stop="app.viewUserProfile(props.user.id)"
              ><a href="#">{{ props.user.name }}</a></span
            >
            <span
              class="username gray-text"
              @click.stop="app.viewUserProfile(props.user.id)"
              ><a href="#">@{{ props.user.username }}</a></span
            >
            <span class="separator gray-text">·</span>
            <span class="tweet-time gray-text">{{ getTimeSinceCreation }}</span>
          </div>
          <span
            class="tweet-action-icon extra-btn"
            @click.stop="toggleTweetMenu"
            ><v-icon name="hi-dots-horizontal" scale="1.0" fill="#ffffff80" />
            <div v-if="isTweetMenuOpen" class="overlay"></div>
            <div v-if="isTweetMenuOpen" class="tweet-menu-container">
              <ul class="tweet-menu-list">
                <li
                  class="tweet-menu-item delete-tweet"
                  @click.stop="deleteTweet"
                >
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
            :class="[getMediaClass(props.tweet.media)]"
            v-if="props.tweet.media.length > 0"
          >
            <div
              class="image-preview-wrapper"
              v-for="img in props.tweet.media"
              :key="props.tweet.media.indexOf(img)"
            >
              <img :src="img" />
            </div>
          </div>
        </div>

        <div class="tweet-actions-wrapper">
          <span class="tweet-metrics">
            <span class="tweet-action-icon reply-btn" @click.stop="doSomething"
              ><v-icon name="fa-regular-comment" scale="1.0" fill="#ffffff80"
            /></span>
            <span class="tweet-metric reply-metric gray-text">{{
              props.tweet.replyCount || ""
            }}</span>
          </span>
          <span class="tweet-metrics">
            <span
              class="tweet-action-icon retweet-btn"
              :class="{ retweeted: isRetweeted }"
              @click.stop="toggleRetweet"
              ><v-icon name="la-retweet-solid" scale="1.15" fill="#ffffff80"
            /></span>
            <span class="tweet-metric retweet-metric gray-text">{{
              props.tweet.retweetCount || ""
            }}</span>
          </span>
          <span class="tweet-metrics">
            <span
              class="tweet-action-icon like-btn"
              :class="{ liked: isLiked }"
              @click.stop="toggleLike"
              ><v-icon name="fa-regular-heart" scale="1.0" fill="#ffffff80"
            /></span>
            <span class="tweet-metric like-metric gray-text">{{
              props.tweet.likeCount || ""
            }}</span>
          </span>
          <span
            class="tweet-action-icon share-tweet-btn"
            @click.stop="doSomething"
            ><v-icon name="gi-share" scale="1.0" fill="#ffffff80"
          /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.tweet-container {
  border-top: rgba(255, 255, 255, 0.25) 1px solid;
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

.user-retweet {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-left: 10%;
  margin-bottom: 3px;
}

.tweet-body {
  display: flex;
  flex-direction: row;
}

.profile-pic-container {
  height: 100%;
}

.tweet-data {
  width: 100%;
  padding-left: 1rem;
}

.user-info-and-btn {
  width: 100%;
  max-width: 100%;
  height: 1rem;
  margin-bottom: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.user-info-wrapper {
  height: fit-content;
  display: flex;
  max-width: 100%;
  width: 60vw; /* IDCCCCCCCCCCCCCCCC */
  max-width: fit-content;
}

.display-name,
.username {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0px;
  width: 100%;
  max-width: fit-content;
}

.display-name a {
  color: white;
}

.username {
  margin-left: 4px;
}

.tweet-time {
  flex-shrink: 0;
  white-space: nowrap;
}

.separator {
  margin: 0px 5px;
}

.tweet-text {
  word-break: break-word;
  word-wrap: break-word;
  white-space: pre-wrap;
}

.username a {
  vertical-align: center;
  color: rgba(255, 255, 255, 0.5);
}

.tweet-content {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.4rem;
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
  width: 32px;
  position: relative;
  left: 0px;
  font-size: 0.9rem;
}

.tweet-media {
  max-width: 100%;
  width: fit-content;
  margin-top: 0.9rem;
  border: rgba(255, 255, 255, 0.25) 1px solid;
  border-radius: 20px;
  overflow: hidden;
}

.tweet-media img,
.tweet-media div {
  position: relative;
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
  grid-template-columns: 50% 50%;
  max-height: 285px;
  height: 100%;
  width: 100%;
}

.three-img {
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  grid-template-areas:
    "first second"
    "first third";
}

.three-img > :first-child {
  grid-area: first;
}

.three-img > :nth-child(2) {
  grid-area: second;
}

.three-img > :last-child {
  grid-area: third;
}

.four-img {
  grid-template-rows: 50% 50%;
  grid-template-areas: none;
}

.three-img img,
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
