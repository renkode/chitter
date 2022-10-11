<script setup>
import MenuSidebar from "./components/MenuSidebar.vue";
import MediaSidebar from "./components/MediaSidebar.vue";
</script>

<template>
  <MenuSidebar />
  <main></main>
  <MediaSidebar />
</template>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  background-color: rgb(38, 42, 46);
  color: white;
  display: flex;
  flex-direction: row;
}
</style>
