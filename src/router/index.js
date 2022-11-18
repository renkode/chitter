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
    path: "/chitter",
    redirect: { name: "Home" },
  },
  {
    path: "/chitter/home",
    name: "Home",
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: "/chitter/explore",
    name: "Explore",
    component: ExploreView,
  },
  {
    path: "/chitter/notifications",
    name: "Notifications",
    component: NotificationView,
    meta: { requiresAuth: true },
  },
  {
    path: "/chitter/:username",
    name: "Profile",
    component: ProfileView,
    props: true,
  },
  {
    path: "/chitter/:username/following",
    name: "Following",
    component: FollowLists,
    props: true,
  },
  {
    path: "/chitter/:username/followers",
    name: "Followers",
    component: FollowLists,
    props: true,
  },
  {
    path: "/chitter/status/:id",
    name: "Tweet",
    component: TweetView,
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

router.beforeEach(async (to, from, next) => {
  const app = useAppStore();
  if (app.showModal) app.toggleModal();
  if (to.meta.requiresAuth && !(await user())) {
    return next("/chitter/explore");
  } else {
    return next();
  }
  // https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
});

export default router;
