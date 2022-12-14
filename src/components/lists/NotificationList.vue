<script setup>
import { ref, defineProps } from "vue";
import { useTweetStore } from "@/stores/tweets.js";
import { useUsersStore } from "@/stores/users.js";
import TweetCard from "../subcomponents/TweetCard.vue";
import NotificationCard from "../subcomponents/NotificationCard.vue";
import ShortUniqueId from "short-unique-id";

var uid = new ShortUniqueId();

const tweets = useTweetStore();
const users = useUsersStore();
const props = defineProps({ notifs: Array }); // { fromUser, type, tweetId }
const notifs = ref(
  (
    await Promise.all(
      props.notifs.map(async (notif) => {
        const tweet = notif.tweetId
          ? await tweets.getTweet(notif.tweetId)
          : null;
        // map to TweetCard for replies and mentions
        if (notif.type === "reply" || notif.type === "mention") {
          return Object.assign(notif, {
            id: tweet.id,
            tweet,
            isNewNotification: users.tweetIsNewNotification(notif.tweetId),
          });
        } // map to NotificationCard for follows/likes/retweets
        else {
          const user = await users.getUser(notif.fromUser);
          return Object.assign(notif, {
            id: tweet ? tweet.id : null,
            type: notif.type,
            name: user.name,
            username: user.username,
            avatarUrl: user.avatarUrl,
            tweetText: tweet ? tweet.text : null,
            containsMedia: tweet ? tweet.media.length > 0 : null,
            isNew: users.isNewNotification(notif),
          });
        }
      })
    )
  ).reverse()
);
</script>

<template>
  <div class="notif-list">
    <TransitionGroup name="fade-down" v-if="notifs.length > 0">
      <template v-for="(notif, index) in notifs">
        <template v-if="notif.type === 'reply'">
          <TweetCard
            :key="notif.id + uid()"
            :id="notif.id"
            :user="users.getUserProps(notif.fromUser)"
            :tweet="notif.tweet"
            :type="'reply'"
            :replyingTo="users.currentUser.username"
            :isNewNotification="notif.isNewNotification"
          />
        </template>

        <template v-else-if="notif.type === 'mention'">
          <TweetCard
            :key="notif.id + uid()"
            :id="notif.id"
            :user="users.getUserProps(notif.fromUser)"
            :tweet="notif.tweet"
            :type="'status'"
            :isNewNotification="notif.isNewNotification"
          />
        </template>

        <template v-else-if="notif.type !== 'reply' && notif.type !== 'follow'">
          <NotificationCard
            :key="index + uid()"
            :id="notif.id"
            :type="notif.type"
            :avatarUrl="notif.avatarUrl"
            :name="notif.name"
            :username="notif.username"
            :tweetText="notif.tweetText"
            :containsMedia="notif.containsMedia"
            :isNew="notif.isNew"
          />
        </template>

        <template v-else>
          <NotificationCard
            :key="index + uid()"
            :type="notif.type"
            :avatarUrl="notif.avatarUrl"
            :name="notif.name"
            :username="notif.username"
            :isNew="notif.isNew"
            :containsMedia="notif.containsMedia"
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
