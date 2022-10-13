<script setup>
import { defineProps } from "vue";
const props = defineProps({
  profilePicUrl: String,
  size: Number,
});
</script>

<template>
  <div
    class="profile-pic"
    :style="{
      backgroundImage: `url(${props.profilePicUrl})`,
      width: props.size + 'px',
      height: props.size + 'px',
      borderRadius: props.size / 2 + 'px',
    }"
  ></div>
</template>

<style scoped>
.profile-pic {
  background-size: cover;
  background-color: rgb(175, 175, 175);
  cursor: pointer;
  transition: box-shadow 0.15s ease;
}

.profile-pic:hover {
  box-shadow: #00000033 0px 0px 99px inset;
}
</style>
