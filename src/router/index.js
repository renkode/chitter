import { createWebHistory, createRouter } from "vue-router";
import { useAppStore } from "@/stores/app";
import { useUsersStore } from "@/stores/users";
import { user } from "@/firebase.js";
const HomeView = () => import("@/components/HomeView.vue"); // lazy load routes
const ExploreView = () => import("@/components/ExploreView.vue");
const NotificationView = () => import("@/components/NotificationView.vue");
const ProfileView = () => import("@/components/ProfileView.vue");
const FollowLists = () => import("@/components/lists/FollowLists.vue");
const TweetView = () => import("@/components/TweetView.vue");

const Error = {
  template: '<div class="error gray-text" v-else>Tweet does not exist.</div>',
};

const routes = [
  {
    path: "",
    redirect: { name: "Home" },
  },
  {
    path: "/",
    redirect: { name: "Home" },
  },
  {
    path: "/home",
    name: "Home",
    component: HomeView,
    meta: { requiresAuth: true, title: "Latest Tweets" },
  },
  {
    path: "/explore",
    name: "Explore",
    component: ExploreView,
    meta: { title: "Explore" },
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: NotificationView,
    meta: { requiresAuth: true, title: "Notifications" },
  },
  {
    path: "/:username",
    name: "Profile",
    component: ProfileView,
    props: true,
    meta: { title: "Profile" },
  },
  {
    path: "/:username/following",
    name: "Following",
    component: FollowLists,
    props: true,
    meta: { title: "Profile" },
  },
  {
    path: "/:username/followers",
    name: "Followers",
    component: FollowLists,
    props: true,
    meta: { title: "Profile" },
  },
  {
    path: "/status/:id",
    name: "Tweet",
    component: TweetView,
    props: true,
    meta: { title: "Tweet" },
  },

  {
    path: "/:catchAll(.*)",
    component: Error,
    meta: { title: "Chitter" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  document.title = `${to.meta.title} / Chitter`;
  const app = useAppStore();
  if (app.showModal) app.toggleModal();
  if (to.meta.requiresAuth && !(await user())) {
    return next("/explore");
  } else {
    return next();
  }
  // https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
});

export default router;
