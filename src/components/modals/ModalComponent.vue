<script setup>
import { useAppStore } from "@/stores/app";
import ModalProfile from "./ModalProfile.vue";
import ModalUserList from "./ModalUserList.vue";
import ModalComposeTweet from "./ModalComposeTweet.vue";
const app = useAppStore();
</script>

<template>
  <div class="modal-overlay" @click.stop.self="app.toggleModal()">
    <div class="modal-container">
      <ModalProfile v-if="app.modalType === 'edit-profile'" />
      <ModalUserList
        v-if="app.modalType === 'retweet-list' || app.modalType === 'like-list'"
      />
      <ModalComposeTweet
        v-if="app.modalType === 'status' || app.modalType === 'reply'"
      />
    </div>
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

.modal-container {
  background-color: #262a2e;
  border-radius: 16px;
  position: fixed;
  pointer-events: auto;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  max-width: 600px;
  max-height: 75%;
  height: fit-content;
  z-index: 20;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

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

@media screen and (max-width: 500px) {
  .modal-container {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
}
</style>
