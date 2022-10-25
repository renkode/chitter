<script setup>
import { computed } from "vue";
import { useAppStore } from "@/stores/app.js";
import { useUsersStore } from "@/stores/users.js";
import { storeToRefs } from "pinia";

const app = useAppStore();
const users = useUsersStore();

const user = computed(() => users.getUser(app.viewProfileId));
</script>

<template>
  <div class="page-header">
    <span
      v-if="
        app.view === 'tweet' ||
        app.view === 'profile' ||
        app.view === 'followers' ||
        app.view === 'following'
      "
      class="profile-wrapper"
      ><span
        v-if="app.view === 'tweet' || app.view === 'profile'"
        class="back-arrow-btn"
        @click="app.setView(app.previousView)"
        ><v-icon name="md-arrowback" scale="1.1" fill="#ffffff80"
      /></span>
      <span v-else class="back-arrow-btn" @click="app.setView('profile')"
        ><v-icon name="md-arrowback" scale="1.1" fill="#ffffff80"
      /></span>
      <div class="user-info-wrapper" v-if="app.view !== 'tweet'">
        <span class="display-name">{{ user.name }}</span>
        <span class="total-tweet-count gray-text"
          >{{ user.tweetCount }} Tweets</span
        >
      </div>
      <span v-else style="text-transform: capitalize">{{ app.view }}</span>
    </span>
    <span v-else style="text-transform: capitalize">{{ app.view }}</span>
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
  top: 0;
  z-index: 2;
}

.profile-wrapper {
  margin-right: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
}

.back-arrow-btn {
  cursor: pointer;
  height: 100%;
  width: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.user-info-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 1rem;
  margin-left: 1rem;
}

.total-tweet-count {
  font-size: 0.9rem;
  margin: 0;
}
</style>
