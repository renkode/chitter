<script setup>
import { defineProps, onUnmounted } from "vue";
import { useAppStore } from "@/stores/app";

const app = useAppStore();
const props = defineProps(["duration"]);
const t = setTimeout(() => (app.showToast = false), props.duration);

onUnmounted(() => {
  clearTimeout(t);
});
</script>

<template>
  <div class="toast">{{ app.toastText }}</div>
</template>

<style scoped>
.toast {
  background-color: #1d9bf0;
  color: white;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  width: fit-content;
  padding: 1rem 1.5rem;
  position: fixed;
  bottom: 10%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
