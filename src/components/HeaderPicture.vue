<script setup>
import { defineProps } from "vue";
const props = defineProps({
  url: String,
});
</script>

<template>
  <div
    class="header-img"
    :style="{ backgroundImage: `url(${props.url})` }"
  ></div>
</template>

<style scoped>
.header-img {
  width: 100%;
  max-height: 200px;
  aspect-ratio: 16 / 6;
  background-color: rgb(175, 175, 175);
  background-size: cover;
}
</style>
