<script setup>
import { useAppStore } from "@/stores/app";
import ModalProfile from "./ModalProfile.vue";
const app = useAppStore();
</script>

<template>
  <div class="modal-overlay" @click.stop.self="app.toggleModal()">
    <ModalProfile v-if="app.modalType === 'edit-profile'" />
  </div>
</template>

<style>
.modal-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.164);
  z-index: 10;
}
</style>
