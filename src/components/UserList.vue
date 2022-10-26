<script setup>
import { defineProps } from "vue";
import UserCard from "./UserCard.vue";

const props = defineProps(["users"]);
</script>

<template>
  <div class="user-list">
    <TransitionGroup name="fade-down" v-if="users.length > 0">
      <UserCard
        v-for="user in users"
        :key="user.id"
        :id="user.id"
        :name="user.name"
        :username="user.username"
        :avatarUrl="user.avatarUrl"
        :description="user.description"
      />
    </TransitionGroup>
    <div class="error gray-text" v-else>No users to display</div>
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

.user-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  max-width: 598px;
  width: 100%;
  flex: 1;
}

@media screen and (max-width: 700px) {
  .user-list {
    width: 100%;
  }
}
</style>
