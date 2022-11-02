import { createWebHistory, createRouter } from "vue-router";
import { useAppStore } from "@/stores/app";
const LocalTimeline = () => import("@/components/LocalTimeline.vue"); // lazy load routes
const TimelineMain = () => import("@/components/TimelineMain.vue");
const NotificationMain = () => import("@/components/NotificationMain.vue");
const ProfileMain = () => import("@/components/ProfileMain.vue");
const FollowLists = () => import("@/components/lists/FollowLists.vue");
const TweetContext = () => import("@/components/TweetContext.vue");
const SignUp = () => import("@/components/SignUp.vue");
const LogIn = () => import("@/components/LogIn.vue");

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
    path: "/chitter",
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
    path: "/signup",
    name: "Signup",
    component: SignUp,
  },
  {
    path: "/login",
    name: "Login",
    component: LogIn,
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

router.beforeEach((to, from) => {
  const app = useAppStore();
  if (app.showModal) app.toggleModal();
  // https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
});

export default router;
