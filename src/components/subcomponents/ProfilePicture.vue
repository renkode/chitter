<script setup>
import { defineProps } from "vue";

const props = defineProps({
  url: String,
  size: Number,
});
</script>

<template>
  <div
    class="profile-pic"
    :style="{
      backgroundImage: `url(${props.url})`,
      width: props.size + 'px',
    }"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.profile-pic {
  aspect-ratio: 1 / 1;
  background-size: cover;
  background-position: center;
  background-color: rgb(88, 95, 102);
  border-radius: 100%;
  cursor: pointer;
  min-width: 44px;
  position: relative;
  transition: box-shadow 0.15s ease;
}

.profile-pic:hover {
  box-shadow: #00000033 0px 0px 99px inset;
}
</style>
