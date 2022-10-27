<script setup>
import { defineProps } from "vue";
import { useTweetStore } from "@/stores/tweets.js";
import { useAppStore } from "@/stores/app.js";
import { useUsersStore } from "@/stores/users.js";

const props = defineProps({ notifs: Array });
const tweets = useTweetStore();
const app = useAppStore();
const users = useUsersStore();
</script>

<template>
  <div class="notif-list">
    <TransitionGroup name="fade-down" v-if="props.notifs.length > 0">
    </TransitionGroup>
    <div class="error gray-text" v-else>No notifications to display</div>
  </div>
</template>

<style scoped>
.fade-down-enter-active,
.fade-down-leave-active {
  transition: all 0.12s ease;
}

.fade-down-enter-from,
.fade-down-leave-to {
  transform: translateY(-15px);
  opacity: 0;
}

.fade-down-leave-from {
  opacity: 1;
}

.notif-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  max-width: 598px;
  width: 100%;
  flex: 1;
}

@media screen and (max-width: 700px) {
  .notif-list {
    width: 100%;
  }
}
</style>
