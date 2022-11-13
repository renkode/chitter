<script setup>
import { ref, onMounted, onBeforeMount, onBeforeUnmount, watch } from "vue";
import MenuSidebar from "./components/MenuSidebar.vue";
import MediaSidebar from "./components/MediaSidebar.vue";
import HeaderSC from "./components/subcomponents/HeaderSC.vue";
import HeaderPlaceholder from "./components/subcomponents/HeaderPlaceholder.vue";
import SignUpBanner from "./components/subcomponents/SignUpBanner.vue";
import LoadSpinner from "./components/subcomponents/LoadSpinner.vue";
import ModalComponent from "./components/modals/ModalComponent.vue";
import ToastMessage from "./components/subcomponents/ToastMessage.vue";
import { useAppStore } from "@/stores/app.js";
import { useUsersStore } from "@/stores/users";
import { db, auth } from "@/firebase.js";
import { doc, onSnapshot } from "firebase/firestore";

const app = useAppStore();
const users = useUsersStore();
const width = ref(window.innerWidth);
const fetching = ref(true);

const onWidthChange = () => {
  width.value = window.innerWidth;
};

const firebaseTest = async () => {
  console.log(auth.currentUser);
};

// persist data
onBeforeMount(() => {
  auth.onAuthStateChanged(async (user) => {
    let userUnsub;
    let notifUnsub;
    if (user) {
      await users.syncCurrentUserToAuth(user.uid);
      await users.syncNotifications(user.uid);
      // real-time user and notif updates
      userUnsub = onSnapshot(doc(db, "users", user.uid), () => {
        if (app.routeName !== "Notifications")
          // otherwise it'll re-render if you like a tweet
          users.syncCurrentUserToAuth(user.uid);
      });
      notifUnsub = onSnapshot(doc(db, "notifications", user.uid), () =>
        users.syncNotifications(user.uid)
      );
    } else {
      if (userUnsub) userUnsub();
      if (notifUnsub) notifUnsub();
      users.setCurrentUser(null, null);
    }
    fetching.value = false;
  });
});

onMounted(() => {
  window.addEventListener("resize", onWidthChange);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize");
});
</script>

<template>
  <template v-if="!fetching">
    <MenuSidebar v-show="width > 500 || users.currentUser" />

    <div class="main-wrapper">
      <div class="timeline-wrapper">
        <Suspense timeout="0"
          ><template #default> <HeaderSC /></template
          ><template #fallback><HeaderPlaceholder /></template>
        </Suspense>
        <router-view v-slot="{ Component }">
          <Transition name="fade" mode="out-in">
            <Suspense timeout="0">
              <template #default>
                <component :is="Component" :key="app.componentKey" />
              </template>
              <template #fallback> <LoadSpinner /> </template>
            </Suspense>
          </Transition>
        </router-view>
      </div>
    </div>

    <MediaSidebar v-show="width >= 1005" />
    <SignUpBanner v-if="!users.currentUser" />
  </template>

  <template v-else><LoadSpinner /></template>

  <Teleport to="body">
    <Transition> <ModalComponent v-if="app.showModal" /></Transition>
    <Transition>
      <ToastMessage v-if="app.showToast" :duration="1500" />
    </Transition>
  </Teleport>
</template>

<style>
* {
  box-sizing: border-box;
  scrollbar-width: thin;
}
html,
body,
#app {
  font-family: Segoe UI, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  color: white;
  width: 100%;
  height: 100%;
  font-size: 15px;
}

html,
body,
.nav-sidebar,
.media-sidebar,
.tweet-container,
.tweet-menu-container {
  background-color: #262a2e;
}
#app {
  display: flex;
  flex-direction: row;
}

body {
  display: flex;
  justify-content: center;
}

button {
  font-weight: bold;
}

ul {
  padding: 0;
}

li {
  list-style: none;
}

a,
a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.main-wrapper {
  width: 600px;
  height: 100%;
  flex-grow: 0;
}

.timeline-wrapper {
  width: 600px;
  min-height: 99.5vh;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: rgba(255, 255, 255, 0.25) 1px solid;
  border-top: 0;
  border-bottom: 0;
  position: relative;
}

.red-text {
  color: #f4212e;
}

.red-border {
  border: 1px solid #f4212e;
}

.gray-text {
  color: #ffffff80;
}

.blue-text,
.blue-link,
.blue-link a {
  color: #1d9bf0;
}

.blue-link:visited,
.blue-link a:visited {
  color: #1d9bf0;
}

.error {
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 1005px) {
  .main-wrapper {
    flex-grow: 0;
    width: 100%;
  }
}

@media screen and (max-width: 700px) {
  .main-wrapper,
  .timeline-wrapper,
  .compose-tweet-container {
    width: 100%;
  }
}

@media screen and (max-height: 500px) {
  .main-wrapper {
    display: flex;
    justify-content: center;
  }
}

@media screen and (max-width: 500px) {
  .timeline-wrapper {
    border: rgba(255, 255, 255, 0) 1px solid;
  }
}

/* prevent nav bar from covering the last tweet */
@media screen and (max-width: 500px), (max-height: 500px) {
  .main-wrapper,
  .timeline-wrapper {
    padding-bottom: 3.5rem;
  }
}
</style>
