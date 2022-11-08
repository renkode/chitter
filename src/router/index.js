import { createWebHistory, createRouter } from "vue-router";
import { useAppStore } from "@/stores/app";
import { useUsersStore } from "@/stores/users";
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
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: "/explore",
    name: "Explore",
    component: ExploreView,
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: NotificationView,
    meta: { requiresAuth: true },
  },
  {
    path: "/:username",
    name: "Profile",
    component: ProfileView,
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

router.beforeEach((to, from, next) => {
  const app = useAppStore();
  const users = useUsersStore();
  if (app.showModal) app.toggleModal();
  if (to.meta.requiresAuth && !users.currentId) {
    return next("/explore");
  } else {
    return next();
  }
  // https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
});

export default router;
