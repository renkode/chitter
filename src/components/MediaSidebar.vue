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
  <template v-if="width >= 1005">
    <div class="media-sidebar">
      <div class="media-wrapper">
        <div class="search-tweet">
          <span class="search-icon">
            <v-icon name="hi-search" fill="#ffffffd5" scale="1.3"
          /></span>
          <input type="search" placeholder="Search Chitter" />
        </div>

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
        <footer>
          Developed by <a href="https://github.com/renkode/">renkode</a>
        </footer>
      </div>
    </div>
  </template>
</template>

<style scoped>
.media-sidebar {
  width: 100%;
  max-height: 100vh;
  margin-left: 30px;
  flex-shrink: 2;
}

.media-wrapper {
  position: fixed;
  top: 0;
  max-width: 350px;
  max-height: 100vh;
}

.search-tweet,
.trending-wrapper,
.trend-container {
  width: 100%;
}

.search-tweet {
  background-color: rgba(230, 244, 255, 0.116);
  width: 100%;
  height: 44px;
  padding: 6px 0;
  margin: 10px 0;
  border-radius: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: hidden;
}

.search-icon {
  margin-left: 5px;
  width: 50px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
}

input {
  background-color: rgba(0, 0, 0, 0);
  color: #ffffffd5;
  border: 0;
  height: 44px;
}

.trending-wrapper {
  background-color: rgba(255, 255, 255, 0.062);
  border-radius: 15px;
  overflow: hidden;
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
.trend-tweets,
footer {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.384);
}

footer {
  padding: 14px;
}

a,
a:visited,
a:hover {
  color: rgba(255, 255, 255, 0.384);
}

a:not(:hover) {
  text-decoration: none;
}

@media screen and (max-width: 1100px) {
  .media-wrapper {
    width: 290px;
  }
}

@media screen and (max-height: 500px) {
  .media-wrapper {
    width: 350px;
  }
}
</style>
