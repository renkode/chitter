import { createWebHistory, createRouter } from "vue-router";
import LocalTimeline from "@/components/LocalTimeline.vue";
import TimelineMain from "@/components/TimelineMain.vue";
import NotificationMain from "@/components/NotificationMain.vue";
import ProfileMain from "@/components/ProfileMain.vue";
import FollowLists from "@/components/lists/FollowLists.vue";
import TweetContext from "@/components/TweetContext.vue";

const Error = {
  template: '<div class="error gray-text" v-else>Tweet does not exist.</div>',
};

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: LocalTimeline,
  },
  {
    path: "/explore",
    name: "Explore",
    component: TimelineMain,
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: NotificationMain,
  },
  {
    path: "/:username",
    name: "Profile",
    component: ProfileMain,
    props: true,
  },
  {
    path: "/:username/following",
    name: "Following",
    component: FollowLists,
    props: true,
  },
  {
    path: "/:username/followers",
    name: "Followers",
    component: FollowLists,
    props: true,
  },
  {
    path: "/status/:id",
    name: "Tweet",
    component: TweetContext,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    component: Error,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
