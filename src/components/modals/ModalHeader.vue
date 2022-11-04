<script setup>
import { defineProps } from "vue";
import { useAppStore } from "@/stores/app";

const props = defineProps(["text"]);
const app = useAppStore();
</script>

<template>
  <div class="modal-header">
    <span class="header-item-wrapper">
      <span class="exit-modal-btn" @click="app.toggleModal()"
        ><v-icon name="bi-x" scale="1.6" fill="white"
      /></span>
      <span class="header-text"
        ><strong>{{ props.text }}</strong></span
      ></span
    >
    <slot></slot>
  </div>
</template>

<style scoped>
.modal-header {
  position: sticky;
  top: 0;
  background-color: #262a2ea2;
  height: 53px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  z-index: 21;
  background-color: rgba(38, 42, 46, 0.836);
  backdrop-filter: blur(10px);
  user-select: none;
}

.header-item-wrapper {
  display: flex;
  align-items: center;
}

.exit-modal-btn {
  cursor: pointer;
  position: relative;
  left: -4px;
  border-radius: 100%;
  background-color: rgba(255, 255, 255, 0);
  width: 32px;
  height: 32px;
  transition: background-color 0.15s ease;
}

.exit-modal-btn:hover {
  background-color: rgba(255, 255, 255, 0.137);
}

.header-text {
  font-size: 1.2rem;
  margin-left: 1rem;
}
</style>
