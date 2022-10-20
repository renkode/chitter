<script setup>
import { useAppStore } from "@/stores/app.js";
import { useUserStore } from "@/stores/user.js";
import { storeToRefs } from "pinia";

const store = useAppStore();
const { view, previousView } = storeToRefs(useAppStore());
const user = useUserStore(); // TEMPORARY
</script>

<template>
  <div class="page-header">
    <span
      v-if="view === 'tweet' || view === 'profile'"
      class="profile-wrapper"
      @click="store.setView(previousView)"
      ><span class="back-arrow-btn"
        ><v-icon name="md-arrowback" scale="1.1" fill="#ffffff80"
      /></span>
      <div class="user-info-wrapper" v-if="view === 'profile'">
        <span class="display-name">{{ user.userData.name }}</span>
        <span class="total-tweet-count gray-text"
          >{{ user.userData.tweetCount }} Tweets</span
        >
      </div>
      <span v-else style="text-transform: capitalize">{{ view }}</span>
    </span>
    <span v-else style="text-transform: capitalize">{{ view }}</span>
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
