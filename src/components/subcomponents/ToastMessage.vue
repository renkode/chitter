<script setup>
import { defineProps, onMounted } from "vue";
import { useAppStore } from "@/stores/app";

const app = useAppStore();
const props = defineProps(["duration"]);

onMounted(() => {
  const t = setTimeout(() => (app.showToast = false), props.duration);
  return () => {
    clearTimeout(t);
  };
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
  height: 2.5rem;
  padding: 0.5rem 1rem;
  position: fixed;
  bottom: 10%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
