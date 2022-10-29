<script setup>
import { defineProps } from "vue";
import { useTweetStore } from "@/stores/tweets.js";
import { useAppStore } from "@/stores/app.js";
import { useUsersStore } from "@/stores/users.js";
import TweetCard from "../subcomponents/TweetCard.vue";
import NotificationCard from "../subcomponents/NotificationCard.vue";

const props = defineProps({ notifs: Array }); // { fromUser, type, tweetId }
const tweets = useTweetStore();
const app = useAppStore();
const users = useUsersStore();

// type: String,
//   id: String,
//   iconUrl: String,
//   name: String,
//   tweetText: String,
//   containsMedia: Boolean,
</script>

<template>
  <div class="notif-list">
    <TransitionGroup name="fade-down" v-if="props.notifs.length > 0">
      <template v-for="(notif, index) in props.notifs">
        <template v-if="notif.type === 'reply'">
          <TweetCard
            :key="index"
            :id="notif.tweetId"
            :user="users.getUser(notif.fromUser)"
            :tweet="tweets.getTweet(notif.tweetId)"
            :type="'reply'"
            :isNotification="
              users.replyIsNewNotification(app.currentId, notif.tweetId)
            "
          />
        </template>

        <template v-else-if="notif.type !== 'reply' && notif.type !== 'follow'">
          <NotificationCard
            :key="index"
            :id="notif.tweetId"
            :type="notif.type"
            :iconUrl="users.getUser(notif.fromUser).avatarUrl"
            :name="users.getUser(notif.fromUser).name"
            :username="users.getUser(notif.fromUser).username"
            :tweetText="tweets.getTweet(notif.tweetId).text"
            :containsMedia="tweets.getTweet(notif.tweetId).media.length > 0"
            :isNew="users.isNewNotification(app.currentId, notif)"
          />
        </template>

        <template v-else>
          <NotificationCard
            :key="index"
            :type="notif.type"
            :userId="users.getUser(notif.fromUser).id"
            :iconUrl="users.getUser(notif.fromUser).avatarUrl"
            :name="users.getUser(notif.fromUser).name"
            :username="users.getUser(notif.fromUser).username"
            :isNew="users.isNewNotification(app.currentId, notif)"
          />
        </template>
      </template>
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
