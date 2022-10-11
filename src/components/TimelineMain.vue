<script setup>
import TweetSC from "./TweetSC.vue";
</script>

<template>
  <div class="main-wrapper">
    <div class="timeline-wrapper">
      <div class="timeline-header">Home</div>
      <div class="compose-tweet-container"></div>
      <div class="tweet-list">
        <TweetSC />
        hos
      </div>
    </div>
  </div>
</template>

<style>
.main-wrapper {
  width: 600px;
  height: 100%;
  flex-grow: 0;
}

.timeline-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.timeline-header {
  font-size: 1.2rem;
  height: 53px;
  width: 598px;
  display: flex;
  align-items: center;
}

.compose-tweet-container,
.tweet-list {
  border: rgba(255, 255, 255, 0.384) 1px solid;
  border-top: 0;
  width: 600px;
}

.tweet-list {
  height: 100%;
}

@media screen and (max-width: 1005px) {
  .main-wrapper {
    flex-grow: 0;
    width: 100%;
  }
}

@media screen and (max-width: 700px) {
  .main-wrapper {
    max-width: 600px;
  }
  .timeline-header,
  .compose-tweet-container,
  .tweet-list {
    width: 100%;
  }
}
</style>
