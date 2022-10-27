<script setup>
import { ref, defineProps, computed, onMounted, watch } from "vue";
import ProfilePicture from "./ProfilePicture.vue";
import formatDateMixin from "@/mixins/formatDateMixin.js";
import {
  getMediaClass,
  urlRegex,
  hashtagRegex,
  atRegex,
} from "@/mixins/utilities.js";
import { useTweetStore } from "@/stores/tweets.js";
import { useAppStore } from "@/stores/app.js";
import { useUsersStore } from "@/stores/users.js";

const tweets = useTweetStore();
const app = useAppStore();
const users = useUsersStore();

const props = defineProps({
  id: String,
  user: Object,
  tweet: Object,
  type: String, // status, retweet, reply
  isRetweetedBy: String,
});

const isTweetMenuOpen = ref(false);
const tweetText = ref(null);
const tweetContainer = ref(null);

const isLiked = computed(() => tweets.hasLiked(props.tweet.id, app.currentId));
const isRetweeted = computed(() =>
  tweets.hasRetweeted(props.tweet.id, app.currentId)
);
const replyingTo = computed(
  () => users.getUser(props.tweet.replyingToUser).username
);
// embed @'s, hashtags and links inside tweets
const embedLinks = computed(() => {
  if (!props.tweet.text || props.tweet.text.length === 0) return;

  const embedArr = props.tweet.text.split(" ").map((str) => {
    switch (true) {
      case urlRegex.test(str):
        return `<a class="blue-link" href="${str}" target="_blank">${str}</a>`;
      case hashtagRegex.test(str):
        return `<a class="blue-link" href="#">${str}</a>`;
      case atRegex.test(str):
        return `<a class="blue-link user-link" href="#" data-username=${str.replace(
          "@",
          ""
        )}>${str}</a>`;
      default:
        return str;
    }
  });
  return embedArr.join(" ");
});

const toggleModal = (type) => {
  app.setModalType(type);
  app.toggleModal();
};

const toggleTweetMenu = (e) => {
  e.preventDefault();
  isTweetMenuOpen.value = !isTweetMenuOpen.value;
};

const deleteTweet = () => {
  if (app.viewTweetId == props.id) {
    if (props.tweet.replyingToTweet)
      app.setViewTweetId(props.tweet.replyingToTweet);
  } else {
    app.setViewTweetId(null);
  }
  tweets.removeTweet(props.id, props.user.id);
};

const doSomething = (e) => {
  e.stopPropagation();
  console.log("test");
};

const toggleLike = () => {
  if (!isLiked.value) {
    tweets.addLike(props.id, app.currentId, props.retweetedBy);
  } else {
    tweets.removeLike(props.id, app.currentId);
  }
};
const toggleRetweet = () => {
  if (!isRetweeted.value) {
    tweets.addRetweet(props.id, app.currentId, props.retweetedBy);
  } else {
    tweets.removeRetweet(props.id, app.currentId);
  }
};
const setReply = () => {
  app.setModalType("reply");
  app.setModalReply(props.user.id, props.id);
  app.toggleModal();
};

const clickForProfile = (e) => {
  e.stopPropagation();
  if (!users.getUserByUsername(e.target.dataset.username)) return;
  app.viewUserProfile(users.getUserByUsername(e.target.dataset.username).id);
};

const setTweetText = () => {
  tweetText.value.innerHTML = embedLinks.value || "";
  const anchors = tweetText.value.querySelectorAll(".user-link");
  Array.from(anchors).forEach((anchor) => {
    anchor.removeEventListener("click", clickForProfile); // just in case lol
    anchor.addEventListener("click", clickForProfile);
  });
};

watch(embedLinks, () => {
  setTweetText();
});

onMounted(() => {
  setTweetText();
  tweetContainer.value.scrollIntoView({ behavior: "smooth", block: "start" });
  return () => {
    Array.from(tweetText.value.querySelectorAll(".user-link")).forEach(
      (anchor) => anchor.removeEventListener("click", clickForProfile)
    );
  };
});
</script>

<template>
  <div class="tweet-container" ref="tweetContainer">
    <div
      class="user-retweet gray-text"
      v-if="props.type === 'retweet' && props.retweetedBy"
    >
      <v-icon name="la-retweet-solid" scale="0.89" fill="#ffffff80" />
      {{ props.retweetedBy }}
      Retweeted
    </div>
    <div class="tweet-body">
      <div class="profile-pic-and-user">
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
                    v-if="
                      app.currentId == props.user.id || app.currentUser.isAdmin
                    "
                    @click="deleteTweet"
                  >
                    <span class="tweet-menu-icon"
                      ><v-icon name="bi-trash" scale="1.1" fill="red" /></span
                    >Delete
                  </li>
                  <li
                    class="tweet-menu-item"
                    v-if="users.canFollow(app.currentId, props.user.id)"
                    @click="users.followUser(app.currentId, props.user.id)"
                  >
                    <span class="tweet-menu-icon"
                      ><v-icon
                        name="co-user-follow"
                        scale="1.1"
                        fill="#ffffff80" /></span
                    >Follow @{{ props.user.username }}
                  </li>
                  <li
                    class="tweet-menu-item"
                    v-if="users.canUnfollow(app.currentId, props.user.id)"
                    @click="users.unfollowUser(app.currentId, props.user.id)"
                  >
                    <span class="tweet-menu-icon"
                      ><v-icon
                        name="co-user-unfollow"
                        scale="1.1"
                        fill="#ffffff80" /></span
                    >Unfollow @{{ props.user.username }}
                  </li>
                  <button class="cancel-btn">Cancel</button>
                </ul>
              </div></span
            >
          </div>
        </div>
      </div>
      <div class="tweet-content">
        <div
          class="replying-to"
          v-if="props.tweet.type === 'reply' && props.tweet.replyingToTweet"
        >
          <span class="gray-text">Replying to </span>
          <a
            class="blue-link"
            @click.stop="app.viewUserProfile(props.tweet.replyingToUser)"
            >@{{ replyingTo }}</a
          >
        </div>
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

      <div class="date-and-time">
        <span class="tweet-time gray-text">{{
          formatDateMixin.formatTime(props.tweet.timestamp)
        }}</span>
        <span class="separator gray-text">·</span>
        <span class="tweet-time gray-text">{{
          formatDateMixin.formatFullDate(props.tweet.timestamp)
        }}</span>
      </div>

      <div
        class="tweet-metrics-wrapper"
        v-if="props.tweet.retweetCount > 0 || props.tweet.likeCount > 0"
      >
        <span
          class="tweet-metric"
          v-if="props.tweet.retweetCount > 0"
          @click="toggleModal('retweet-list')"
          ><strong>{{ props.tweet.retweetCount }}</strong>
          <span class="gray-text"> Retweets</span></span
        >
        <span
          class="tweet-metric"
          v-if="props.tweet.likeCount > 0"
          @click="toggleModal('like-list')"
          ><strong>{{ props.tweet.likeCount }}</strong>
          <span class="gray-text"> Likes</span></span
        >
      </div>

      <div class="tweet-actions-wrapper">
        <div class="tweet-action-container">
          <span class="tweet-action-icon reply-btn" @click.stop="setReply"
            ><v-icon name="fa-regular-comment" scale="1.3" fill="#ffffff80"
          /></span>
        </div>
        <div class="tweet-action-container">
          <span
            class="tweet-action-icon retweet-btn"
            :class="{ retweeted: isRetweeted }"
            @click.stop="toggleRetweet"
            ><v-icon name="la-retweet-solid" scale="1.45" fill="#ffffff80"
          /></span>
        </div>
        <div class="tweet-action-container">
          <span
            class="tweet-action-icon like-btn"
            :class="{ liked: isLiked }"
            @click.stop="toggleLike"
            ><v-icon name="fa-regular-heart" scale="1.3" fill="#ffffff80"
          /></span>
        </div>
        <div class="tweet-action-container">
          <span
            class="tweet-action-icon share-tweet-btn"
            @click.stop="doSomething"
            ><v-icon name="gi-share" scale="1.3" fill="#ffffff80"
          /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blue-link {
  cursor: pointer;
}

.tweet-container {
  cursor: auto;
  border-top: 0;
}

.tweet-container:hover {
  background-color: rgba(255, 255, 255, 0);
}

.tweet-body {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.profile-pic-and-user {
  width: 100%;
  display: flex;
  gap: 0.5rem;
}

.profile-pic-container {
  height: 100%;
  width: fit-content;
}

.user-info-and-btn {
  width: 100%;
  max-width: 505px;
  height: 100%;
  margin-bottom: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.user-info-wrapper {
  flex-direction: column;
  height: 100%;
  justify-content: center;
}

.tweet-content {
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  margin-top: 0.7rem;
}

.date-and-time {
  margin: 0.8rem 0;
  display: flex;
  gap: 0.5rem;
}

.tweet-metrics-wrapper {
  width: 100%;
  height: 54px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-top: rgba(255, 255, 255, 0.2) 1px solid;
}

.tweet-actions-wrapper {
  width: 100%;
  max-width: 100%;
  padding: 0.6rem 0 0.5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: rgba(255, 255, 255, 0.2) 1px solid;
}

.tweet-action-container {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tweet-action-icon {
  cursor: pointer;
  width: 40px;
  height: 40px;
}

.tweet-metrics-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.tweet-metric {
  width: fit-content;
  position: relative;
  left: 0px;
  font-size: 0.9rem;
  cursor: pointer;
}

.tweet-metric:hover {
  text-decoration: underline;
}
</style>