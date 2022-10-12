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
  width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: rgba(255, 255, 255, 0.25) 1px solid;
  border-top: 0;
  border-bottom: 0;
}

.timeline-header {
  font-size: 1.2rem;
  height: 53px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 16px;
}

.compose-tweet-container,
.tweet-list {
  border-bottom: rgba(255, 255, 255, 0.25) 1px solid;
  width: 598px;
}

@media screen and (max-width: 1005px) {
  .main-wrapper {
    flex-grow: 0;
    width: 100%;
  }
}

@media screen and (max-width: 700px) {
  .main-wrapper,
  .timeline-wrapper,
  .timeline-header,
  .compose-tweet-container,
  .tweet-list {
    width: 100%;
  }
}

@media screen and (max-height: 500px) {
  .main-wrapper {
    display: flex;
    justify-content: center;
  }
}

@media screen and (max-width: 500px) {
  .timeline-wrapper {
    border: rgba(255, 255, 255, 0) 1px solid;
  }
}
</style>
