<script setup>
import { useAppStore } from "@/stores/app.js";
import { storeToRefs } from "pinia";
const { view } = storeToRefs(useAppStore());
</script>

<template>
  <div class="page-header">
    <span v-if="view === 'tweet' || view === 'profile'" class="back-arrow"
      ><v-icon name="md-arrowback" scale="1.1" fill="#ffffff80" /></span
    >{{ view }}
  </div>
</template>

<style scoped>
.page-header {
  font-size: 1.2rem;
  min-height: 53px;
  height: 53px;
  width: 100%;
  padding-left: 16px;
  background-color: rgba(38, 42, 46, 0.836);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  position: sticky;
  user-select: none;
  text-transform: capitalize;
  top: 0;
  z-index: 2;
}

.back-arrow {
  margin-right: 2rem;
  cursor: pointer;
}
</style>
