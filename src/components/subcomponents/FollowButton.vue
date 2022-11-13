<script setup>
import { defineProps, defineEmits } from "vue";
import { useUsersStore } from "@/stores/users";

const users = useUsersStore();
const props = defineProps(["userId"]);
const emit = defineEmits(["increment"]);

const follow = () => {
  if (!users.currentId) return;
  users.followUser(props.userId);
  emit("increment", 1);
};

const unfollow = () => {
  if (!users.currentId) return;
  users.unfollowUser(props.userId);
  emit("increment", -1);
};
</script>

<template>
  <button
    class="following-btn"
    v-if="!users.canFollow(props.userId)"
    @click.stop="unfollow"
  ></button>
  <button
    class="follow-btn"
    v-else-if="users.canFollow(props.userId)"
    @click.stop="follow"
  >
    Follow
  </button>
</template>

<style scoped>
.follow-btn,
.following-btn {
  border-radius: 18px;
  cursor: pointer;
  transition: all 0.15s ease;
  height: 36px;
  width: fit-content;
  padding: 0 1rem;
}

.follow-btn {
  background-color: white;
  color: black;
  border: white solid 1px;
}

.follow-btn:hover {
  background-color: rgb(228, 228, 228);
}

.following-btn {
  background-color: #262a2e00;
  color: white;
  border: #ffffff80 solid 1px;
  min-width: 100px;
  width: 100px;
  transition-duration: 0.1s;
}

.following-btn::before {
  content: "Following";
}

.following-btn:hover {
  border-color: #f4212e;
  color: #f4212e;
  background-color: #8500091c;
}

.following-btn:hover::before {
  content: "";
}

.following-btn:hover::after {
  content: "Unfollow";
  color: #f4212e;
}
</style>
