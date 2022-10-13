<script setup>
import MenuSidebar from "./components/MenuSidebar.vue";
import MediaSidebar from "./components/MediaSidebar.vue";
import TimelineMain from "./components/TimelineMain.vue";
</script>

<template>
  <MenuSidebar
    :user="{
      profilePicUrl:
        'https://pbs.twimg.com/profile_images/1566523505155268608/AEzCad1D_400x400.png',
      displayName: 'among us forever 🍆',
      username: 'renkode',
    }"
  />
  <TimelineMain />
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
}

html,
body,
.nav-sidebar,
.media-sidebar {
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
</style>
