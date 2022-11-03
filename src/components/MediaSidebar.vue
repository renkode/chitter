<script setup>
import { defineProps } from "vue";
import { useAppStore } from "@/stores/app";

const app = useAppStore();

const setSignUpModal = () => {
  app.setModalType("signup");
  app.toggleModal();
};
</script>

<template>
  <div class="media-sidebar">
    <div class="media-wrapper">
      <div class="search-tweet">
        <span class="search-icon">
          <v-icon name="hi-search" fill="#ffffffd5" scale="1.3"
        /></span>
        <input type="search" placeholder="Search Chitter" />
      </div>

      <div class="media-container" v-if="!app.currentUser">
        <div class="media-header">New to Chitter?</div>
        <div class="media-body">
          <div class="gray-text">
            Sign up now to get your own personalized timeline!
          </div>
          <button class="sign-up-btn" @click="setSignUpModal">
            Sign up with email
          </button>
          <div class="gray-text">
            By signing up, you agree to the
            <a class="blue-link">Terms of Service</a> and
            <a class="blue-link">Privacy Policy</a>, including
            <a class="blue-link">Cookie Use</a>.
          </div>
        </div>
      </div>

      <div class="media-container">
        <div class="media-header">What's happening</div>
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

<style scoped>
.blue-link {
  color: #1d9bf0;
}

.blue-link:hover,
.blue-link:visited {
  color: #1d9bf0;
}

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
.media-container,
.trend-container {
  width: 100%;
}

.search-tweet {
  background-color: rgba(230, 244, 255, 0.116);
  width: 100%;
  height: 44px;
  padding: 6px 0;
  margin: 1rem 0;
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
  width: 100%;
}

input:focus {
  outline: 0;
}

.media-container {
  background-color: rgba(255, 255, 255, 0.062);
  border-radius: 15px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.media-header {
  font-size: 1.5rem;
  font-weight: bold;
  padding: 14px;
}

.media-body {
  font-size: 0.9rem;
  padding: 0px 14px 14px 14px;
}

.sign-up-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.384);
  border-radius: 1.5rem;
  font-size: 1.1rem;
  height: 3rem;
  width: 100%;
  margin: 1rem 0;
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.sign-up-btn:hover {
  background-color: rgba(255, 255, 255, 0.07);
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

.trend-headline {
  font-size: 1.1rem;
}

.trend-type,
.trend-tweets,
footer {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.384);
}

footer {
  padding: 0 14px;
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
