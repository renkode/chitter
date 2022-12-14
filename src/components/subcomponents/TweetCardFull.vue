<script setup>
import { ref, computed, defineProps } from "vue";
import ProfilePicture from "./ProfilePicture.vue";
import EmbeddedText from "./EmbeddedText.vue";
import formatDateMixin from "@/mixins/formatDateMixin.js";
import { getMediaClass } from "@/mixins/utilities.js";
import { useTweetStore } from "@/stores/tweets.js";
import { useAppStore } from "@/stores/app.js";
import { useUsersStore } from "@/stores/users.js";
import { getSingular } from "@/mixins/utilities";

const tweets = useTweetStore();
const app = useAppStore();
const users = useUsersStore();
const props = defineProps({
  id: String,
  user: Promise,
  tweet: Object,
  replyingTo: [String, Promise],
  retweetedBy: String,
});

const user = ref(await props.user);
const replyingTo = ref(await props.replyingTo);
const isTweetMenuOpen = ref(false);
const tweetContainer = ref(null);

const likes = ref(props.tweet.likeCount);
const isLiked = ref(await tweets.hasLiked(props.id, users.currentId));
const retweets = ref(props.tweet.retweetCount);
const isRetweeted = ref(await tweets.hasRetweeted(props.id, users.currentId));
const canFollow = computed(() => users.canFollow(user.value.id));

const toggleTweetMenu = () => {
  if (!users.currentId) return;
  isTweetMenuOpen.value = !isTweetMenuOpen.value;
};

const deleteTweet = () => {
  if (!users.currentId) return;
  if (app.routeTweetId == props.id) {
    if (props.tweet.replyingToTweet) app.viewTweet(props.tweet.replyingToTweet);
  } else {
    app.viewTweet();
  }
  tweets.removeTweet(props.id, user.value.id);
};

const toggleLike = () => {
  if (!users.currentId) return;
  if (!isLiked.value) {
    tweets.addLike(props.id, users.currentId, props.retweetedBy);
    likes.value++;
    isLiked.value = true;
  } else {
    tweets.removeLike(props.id, users.currentId, user.value.id);
    likes.value--;
    isLiked.value = false;
  }
};
const toggleRetweet = () => {
  if (!users.currentId) return;
  if (!isRetweeted.value) {
    tweets.addRetweet(props.id, users.currentId, props.retweetedBy);
    retweets.value++;
    isRetweeted.value = true;
  } else {
    tweets.removeRetweet(props.id, users.currentId, user.value.id);
    retweets.value--;
    isRetweeted.value = false;
  }
};
const setReply = () => {
  if (!users.currentId) return;
  app.setModalType("reply");
  app.setModalReply(user.value.id, props.id);
  app.toggleModal();
};
const shareTweet = () => {
  app.toast("Copied to clipboard");
  navigator.clipboard.writeText(`${window.location.host}/status/${props.id}`);
};
</script>

<template>
  <div class="tweet-container" ref="tweetContainer">
    <div class="user-retweet gray-text" v-if="props.retweetedBy">
      <v-icon name="la-retweet-solid" scale="0.89" fill="#ffffff80" />
      {{ props.retweetedBy }}
      Retweeted
    </div>
    <div class="tweet-body">
      <div class="profile-pic-and-user">
        <div class="profile-pic-container">
          <ProfilePicture
            :url="user.avatarUrl"
            :size="48"
            @click.stop="app.viewUserProfile(user.username)"
          />
        </div>
        <div class="tweet-data">
          <div class="user-info-and-btn">
            <div class="user-info-wrapper">
              <span
                class="display-name"
                @click.stop="app.viewUserProfile(user.username)"
                ><a>{{ user.name }}</a></span
              >
              <span
                class="username gray-text"
                @click.stop="app.viewUserProfile(user.username)"
                ><a>@{{ user.username }}</a></span
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
                      users.currentId == user.id || users.currentUser.isAdmin
                    "
                    @click="deleteTweet"
                  >
                    <span class="tweet-menu-icon"
                      ><v-icon name="bi-trash" scale="1.1" fill="red" /></span
                    >Delete
                  </li>
                  <li
                    class="tweet-menu-item"
                    v-if="users.currentId !== user.id && canFollow"
                    @click="users.followUser(user.id)"
                  >
                    <span class="tweet-menu-icon"
                      ><v-icon
                        name="co-user-follow"
                        scale="1.1"
                        fill="#ffffff80" /></span
                    >Follow @{{ user.username }}
                  </li>
                  <li
                    class="tweet-menu-item"
                    v-if="users.currentId !== user.id && !canFollow"
                    @click="users.unfollowUser(user.id)"
                  >
                    <span class="tweet-menu-icon"
                      ><v-icon
                        name="co-user-unfollow"
                        scale="1.1"
                        fill="#ffffff80" /></span
                    >Unfollow @{{ user.username }}
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
          <a class="blue-link" @click.stop="app.viewUserProfile(replyingTo)"
            >@{{ replyingTo }}</a
          >
        </div>
        <div class="tweet-text"><EmbeddedText :text="props.tweet.text" /></div>
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
        <span class="separator gray-text">??</span>
        <span class="tweet-time gray-text">{{
          formatDateMixin.formatFullDate(props.tweet.timestamp)
        }}</span>
      </div>

      <div class="tweet-metrics-wrapper" v-if="retweets > 0 || likes > 0">
        <span
          class="tweet-metric"
          v-if="retweets > 0"
          @click="app.toggleModal('retweet-list')"
          ><strong>{{ retweets }}</strong>
          <span class="gray-text">{{
            getSingular(" Retweets", retweets)
          }}</span></span
        >
        <span
          class="tweet-metric"
          v-if="likes > 0"
          @click="app.toggleModal('like-list')"
          ><strong>{{ likes }}</strong>
          <span class="gray-text">{{
            getSingular(" Likes", likes)
          }}</span></span
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
            @click.stop="shareTweet"
            ><v-icon name="gi-share" scale="1.3" fill="#ffffff80"
          /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

.display-name,
.username {
  cursor: pointer;
}

.tweet-content {
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  margin-top: 0.7rem;
}

.tweet-text {
  font-size: 1.2rem;
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
