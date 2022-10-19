<script setup>
import MenuSidebar from "./components/MenuSidebar.vue";
import MediaSidebar from "./components/MediaSidebar.vue";
import TimelineMain from "./components/TimelineMain.vue";
import HeaderSC from "./components/HeaderSC.vue";
import ComposeTweetSC from "./components/ComposeTweetSC.vue";
import LoadSpinner from "./components/LoadSpinner.vue";
import { useAppStore } from "@/stores/app.js";

const appStore = useAppStore();
</script>

<template>
  <MenuSidebar />

  <div class="main-wrapper">
    <div class="timeline-wrapper">
      <HeaderSC />
      <template v-if="appStore.view === 'home'">
        <ComposeTweetSC />
        <Transition name="fade">
          <Suspense>
            <template #default> <TimelineMain /> </template>
            <template #fallback> <LoadSpinner /> </template>
          </Suspense>
        </Transition>
      </template>
    </div>
  </div>

  <MediaSidebar />
</template>

<style>
* {
  box-sizing: border-box;
  scrollbar-width: thin;
}
html,
body,
#app {
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
  background-color: rgb(38, 42, 46);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  color: white;
  display: flex;
  flex-direction: row;
}

body {
  display: flex;
  justify-content: center;
}

ul {
  padding: 0;
}

li {
  list-style: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
