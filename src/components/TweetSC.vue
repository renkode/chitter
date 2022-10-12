<script setup>
import { ref } from "vue";
const pfpUrl = ref(
  "https://pbs.twimg.com/profile_images/1566523505155268608/AEzCad1D_400x400.png"
);
</script>

<template>
  <div class="tweet-container">
    <!-- <div class="user-retweet">lorem ipsum Retweeted</div> -->
    <div class="tweet-body">
      <div class="profile-pic-container">
        <div
          class="profile-pic"
          :style="{ backgroundImage: `url(${pfpUrl})` }"
        ></div>
      </div>
      <div class="tweet-data">
        <div class="user-info-and-btn">
          <div class="user-info-wrapper">
            <span class="display-name"
              ><a href="#">among us forever 🍆</a></span
            >
            <span class="username"><a href="#">@renkode</a></span>
            <span class="separator">·</span>
            <span class="tweet-time">23m</span>
          </div>
          <span class="tweet-action-icon extra-btn"
            ><v-icon name="hi-dots-horizontal" scale="1.0" fill="#ffffff80"
          /></span>
        </div>
        <div class="tweet-content">
          <div class="tweet-text">
            I think most people underestimate how little being 5’4 is. I’m
            literally hopping around on my phone rn to type tjis out
          </div>
        </div>

        <div class="tweet-actions-wrapper">
          <span class="tweet-metrics">
            <span class="tweet-action-icon reply-btn"
              ><v-icon name="fa-regular-comment" scale="1.0" fill="#ffffff80"
            /></span>
            <span class="tweet-metric reply-metric">4</span>
          </span>
          <span class="tweet-metrics">
            <span class="tweet-action-icon retweet-btn"
              ><v-icon name="la-retweet-solid" scale="1.15" fill="#ffffff80"
            /></span>
            <span class="tweet-metric retweet-metric">320</span>
          </span>
          <span class="tweet-metrics">
            <span class="tweet-action-icon like-btn"
              ><v-icon name="fa-regular-heart" scale="1.0" fill="#ffffff80"
            /></span>
            <span class="tweet-metric like-metric">1,438</span>
          </span>
          <span class="tweet-action-icon share-tweet-btn"
            ><v-icon name="gi-share" scale="1.0" fill="#ffffff80"
          /></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tweet-container {
  padding: 0.75rem 1rem;
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
.profile-pic {
  border-radius: 24px;
  width: 48px;
  height: 48px;
  background-size: cover;
  cursor: pointer;
  transition: box-shadow 0.15s ease;
}

.profile-pic:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 48px inset;
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

.username a,
.tweet-time,
.separator,
.tweet-metric {
  vertical-align: center;
  color: rgba(255, 255, 255, 0.5);
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
  margin-bottom: 0.5rem;
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
  width: 35px;
  height: 35px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
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
.extra-btn:hover svg,
.reply-btn:hover + .reply-metric {
  color: rgb(20, 181, 245);
  fill: rgb(20, 181, 245);
}

.retweet-btn:hover {
  background-color: rgba(0, 255, 191, 0.158);
}

.retweet-btn:hover svg,
.retweet-btn:hover + .retweet-metric {
  color: rgb(16, 211, 169);
  fill: rgb(16, 211, 169);
}

.like-btn:hover {
  background-color: rgba(255, 0, 64, 0.233);
}

.like-btn:hover svg,
.like-btn:hover + .like-metric {
  color: rgb(226, 28, 104);
  fill: rgb(226, 28, 104);
}

.tweet-metrics {
  display: flex;
  align-items: center;
}

.tweet-metric {
  margin-left: 8px;
  font-size: 0.9rem;
}

@media screen and (max-width: 700px) {
  .tweet-container {
    max-width: 600px;
    width: 100%;
  }
}
</style>
