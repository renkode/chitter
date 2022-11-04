<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import MenuSidebar from "./components/MenuSidebar.vue";
import MediaSidebar from "./components/MediaSidebar.vue";
import HeaderSC from "./components/subcomponents/HeaderSC.vue";
import SignUpBanner from "./components/subcomponents/SignUpBanner.vue";
import LoadSpinner from "./components/subcomponents/LoadSpinner.vue";
import ModalComponent from "./components/modals/ModalComponent.vue";
import ToastMessage from "./components/subcomponents/ToastMessage.vue";
import { useAppStore } from "@/stores/app.js";
import { useUsersStore } from "@/stores/users";

const app = useAppStore();
const users = useUsersStore();
const width = ref(window.innerWidth);

const onWidthChange = () => {
  width.value = window.innerWidth;
};

onMounted(() => {
  //app.setCurrentUser(users.getUser("1"));
  window.addEventListener("resize", onWidthChange);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize");
});
</script>

<template>
  <MenuSidebar v-show="width > 500 || app.currentUser" />

  <div class="main-wrapper">
    <div class="timeline-wrapper">
      <HeaderSC />
      <router-view v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <Suspense>
            <template #default> <component :is="Component" /> </template>
            <template #fallback> <LoadSpinner /> </template>
          </Suspense>
        </Transition>
      </router-view>
    </div>
  </div>

  <MediaSidebar v-show="width >= 1005" />
  <SignUpBanner v-if="!app.currentUser" />

  <Teleport to="body">
    <Transition> <ModalComponent v-show="app.showModal" /></Transition>
    <Transition>
      <ToastMessage v-show="app.showToast" :duration="1500" />
    </Transition>
  </Teleport>
</template>

<style>
* {
  box-sizing: border-box;
  scrollbar-width: thin;
}
html,
body,
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  color: white;
  width: 100%;
  height: 100%;
  font-size: 15px;
}

html,
body,
.nav-sidebar,
.media-sidebar,
.tweet-container,
.tweet-menu-container {
  background-color: #262a2e;
}
#app {
  display: flex;
  flex-direction: row;
}

body {
  display: flex;
  justify-content: center;
}

button {
  font-weight: bold;
}

ul {
  padding: 0;
}

li {
  list-style: none;
}

a,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.main-wrapper {
  width: 600px;
  height: 100%;
  flex-grow: 0;
}

.timeline-wrapper {
  width: 600px;
  min-height: 99.5vh;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: rgba(255, 255, 255, 0.25) 1px solid;
  border-top: 0;
  border-bottom: 0;
  position: relative;
}

.red-text {
  color: #f4212e;
}

.red-border {
  border: 1px solid #f4212e;
}

.gray-text {
  color: #ffffff80;
}

.blue-text,
.blue-link,
.blue-link a {
  color: #1d9bf0;
}

.blue-link:visited,
.blue-link a:visited {
  color: #1d9bf0;
}

.error {
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  .compose-tweet-container {
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

/* prevent nav bar from covering the last tweet */
@media screen and (max-width: 500px), (max-height: 500px) {
  .main-wrapper,
  .timeline-wrapper {
    padding-bottom: 3.5rem;
  }
}
</style>
