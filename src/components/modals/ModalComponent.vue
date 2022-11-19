<script setup>
import { useAppStore } from "@/stores/app";
import ProfileModal from "./ProfileModal.vue";
import UserListModal from "./UserListModal.vue";
import ComposeTweetModal from "./ComposeTweetModal.vue";
import SignUpModal from "./SignUpModal.vue";
import LogInModal from "./LogInModal.vue";
import LoadSpinner from "../subcomponents/LoadSpinner.vue";

const app = useAppStore();
</script>

<template>
  <div class="modal-overlay" @mouseup.stop.self="app.toggleModal()">
    <div class="modal-container">
      <Suspense>
        <template #default>
          <ProfileModal v-if="app.modalType === 'edit-profile'"
        /></template>
      </Suspense>

      <Suspense>
        <template #default>
          <UserListModal
            v-if="
              app.modalType === 'retweet-list' || app.modalType === 'like-list'
            "
        /></template>
        <template #fallback><LoadSpinner /></template>
      </Suspense>

      <Suspense>
        <template #default>
          <ComposeTweetModal
            v-if="app.modalType === 'status' || app.modalType === 'reply'"
          />
        </template>
      </Suspense>

      <Suspense>
        <template #default
          ><SignUpModal v-if="app.modalType === 'signup'"
        /></template>
      </Suspense>
      <LogInModal v-if="app.modalType === 'login'" />
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
  z-index: 20;
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
