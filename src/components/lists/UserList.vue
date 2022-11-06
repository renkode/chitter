<script setup>
import { defineProps } from "vue";
import UserCard from "../subcomponents/UserCard.vue";

const props = defineProps(["users"]);
</script>

<template>
  <div class="user-list">
    <TransitionGroup name="fade" v-if="users.length > 0">
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
.fade-enter-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
