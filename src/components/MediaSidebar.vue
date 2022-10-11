<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const width = ref(window.innerWidth);
const onWidthChange = () => {
  width.value = window.innerWidth;
};

onMounted(() => {
  //console.log(`Width: ${width.value}.`);
  window.addEventListener("resize", onWidthChange);
});

onUnmounted(() => {
  window.removeEventListener("resize");
});
</script>

<template>
  <template v-if="width >= 1000">
    <div class="media-sidebar">
      <input type="search" />
      <div class="trending-wrapper">
        <div class="trending-header">What's happening</div>
        <div class="trend-container">
          <div class="trend-info">
            <span class="trend-type">World news</span>
            <span class="trend-headline"
              >Lorem ipsum generator leaves 2 killed, 8 injured</span
            >
            <span class="trend-tweets">56,182 Tweets</span>
          </div>
          <div class="trend-media"></div>
        </div>

        <div class="trend-container">
          <div class="trend-info">
            <span class="trend-type">Trending in Video games</span>
            <span class="trend-headline">HE'S UGLY</span>
            <span class="trend-tweets">32,478 Tweets</span>
          </div>
        </div>

        <div class="trend-container">
          <div class="trend-info">
            <span class="trend-type">Trending in Vatican City</span>
            <span class="trend-headline">#sanssweep</span>
            <span class="trend-tweets">4,200 Tweets</span>
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<style scoped>
.media-sidebar {
  outline: red solid 1px;
  width: 350px;
  height: 100vh;
}

input,
.trending-wrapper,
.trend-container {
  width: 100%;
}

.trending-wrapper {
  background-color: rgba(255, 255, 255, 0.062);
  border-radius: 15px;
}

.trending-header {
  font-size: 1.4rem;
  font-weight: bold;
  padding: 14px;
}

.trend-info {
  display: flex;
  flex-direction: column;
  line-height: 1.25rem;
}

.trend-container {
  padding: 10px 14px 10px 14px;
  transition: background-color 0.15s ease;
}

.trend-container:hover {
  background-color: rgba(255, 255, 255, 0.07);
}

.trend-type,
.trend-tweets {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.384);
}
@media screen and (max-width: 1100px) {
  .media-sidebar {
    width: 290px;
  }
}
</style>
