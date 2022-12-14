<script setup>
import { ref, computed } from "vue";
import { useAppStore } from "@/stores/app.js";
import { useUsersStore } from "@/stores/users.js";
import ProfilePicture from "./subcomponents/ProfilePicture.vue";

const users = useUsersStore();
const app = useAppStore();
const isAccountMenuOpen = ref(false);
const numNewNotifications = computed(() => users.notifications.new.length);
const toggleAccountMenu = () => {
  isAccountMenuOpen.value = !isAccountMenuOpen.value;
};
</script>

<template>
  <div class="nav-sidebar">
    <nav>
      <ul>
        <router-link :to="{ name: 'Home' }" class="nav-logo">
          <li class="nav-item">
            <span class="nav-icon"
              ><v-icon name="bi-twitter" scale="2.0" fill="white"
            /></span></li
        ></router-link>

        <router-link :to="{ name: 'Home' }" v-if="users.currentUser">
          <li class="nav-item">
            <span class="nav-icon"
              ><v-icon
                name="gi-bird-house"
                scale="2.0"
                fill="#ffffff80" /></span
            ><span class="nav-label">Home</span>
          </li></router-link
        >

        <router-link :to="{ name: 'Explore' }"
          ><li class="nav-item">
            <span class="nav-icon stroke"
              ><v-icon name="hi-hashtag" scale="1.6" fill="#ffffff80" /></span
            ><span class="nav-label">Explore</span>
          </li></router-link
        >

        <router-link :to="{ name: 'Notifications' }" v-if="users.currentUser"
          ><li class="nav-item">
            <span class="nav-icon notif-icon"
              ><v-icon name="bi-bell" scale="1.7" fill="#ffffff80" />
              <div
                class="notification-dot"
                v-if="users.currentUser && numNewNotifications > 0"
              >
                {{ numNewNotifications }}
              </div>
            </span>
            <span class="nav-label">Notifications</span>
          </li></router-link
        >

        <router-link
          v-if="users.currentUser"
          :to="{
            name: 'Profile',
            params: { username: users.currentUser.username },
          }"
        >
          <li class="nav-item">
            <span class="nav-icon"
              ><v-icon name="bi-person" scale="2.0" fill="#ffffff80" /></span
            ><span class="nav-label">Profile</span>
          </li></router-link
        >
      </ul>

      <button class="new-tweet-btn" @click="app.toggleModal('status')">
        <span class="new-tweet-btn-feather"
          ><v-icon name="gi-feather" scale="1.8"
        /></span>
        <span class="new-tweet-btn-label">Tweet</span>
      </button>

      <li
        class="nav-user"
        v-if="users.currentUser"
        @click.stop="toggleAccountMenu"
      >
        <div class="user-info-and-btn">
          <ProfilePicture :url="users.currentUser.avatarUrl" :size="40" />
          <div class="user-info-wrapper">
            <span class="display-name">{{ users.currentUser.name }}</span>
            <span class="username gray-text"
              >@{{ users.currentUser.username }}</span
            >
          </div>
        </div>
        <span class="tweet-action-icon extra-btn"
          ><v-icon name="hi-dots-horizontal" scale="1.0" fill="#ffffff80"
        /></span>
        <div v-if="isAccountMenuOpen" class="overlay"></div>
        <div v-if="isAccountMenuOpen" class="tweet-menu-container">
          <ul class="tweet-menu-list">
            <li class="tweet-menu-item" @click="app.logOut">
              Log out @{{ users.currentUser.username }}
            </li>
          </ul>
        </div>
      </li>
    </nav>
  </div>
</template>
<style scoped>
a {
  display: flex;
  align-items: center;
}

a:hover {
  text-decoration: none;
}

a,
a:link,
a:visited {
  color: #ffffff80;
}

a.router-link-active {
  color: white;
  font-weight: bold;
}

a.router-link-active svg {
  fill: white;
}

a.router-link-active .stroke svg {
  stroke: white;
}

a:focus {
  outline: none;
}

.nav-sidebar {
  width: 110%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 2.25;
  z-index: 3;
  user-select: none;
}

nav {
  position: fixed;
  top: 0;
  height: 100%;
  width: 275px;
}

ul {
  font-size: 1.2rem;
  list-style: none;
  padding: 0;
}

li.nav-item {
  border-radius: 25px;
  width: min-content;
  height: 50px;
  padding: 4px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.15s ease;
  margin-bottom: 1rem;
  cursor: pointer;
}

li.nav-item:hover,
li.nav-user:hover {
  background-color: rgba(255, 255, 255, 0.144);
}

li .nav-icon {
  height: 26px;
  width: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  margin-right: 18px;
}

.nav-logo .nav-icon {
  margin: 4px;
}

.nav-icon.notif-icon {
  position: relative;
}

.notification-dot {
  border-radius: 100%;
  font-size: 0.7rem;
  width: 14px;
  height: 14px;
  color: white;
  background-color: #1d9bf0;
  position: absolute;
  top: -4px;
  right: -4px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}

li.nav-item.nav-logo {
  width: 50px;
  padding: 4px;
  border-radius: 99px;
}

li.nav-item.nav-logo .nav-icon {
  margin: 0;
}

.nav-item {
  font-size: 1.3rem;
}

.nav-label {
  padding-right: 20px;
}

.nav-user {
  width: 95%;
  height: 64px;
  border-radius: 32px;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 1rem;
  padding-left: 0.8rem;
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.user-info-and-btn {
  max-width: 90%;
  height: 100%;
  margin-bottom: 0;
  display: flex;
}

.user-info-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 0.5rem;
}

.display-name {
  max-width: 80%;
  font-weight: bold;
}

.username {
  margin-left: 0;
}

.extra-btn {
  position: static;
}

.extra-btn:hover {
  background-color: rgba(255, 255, 255, 0);
}

.new-tweet-btn {
  border: 0;
  border-radius: 25px;
  background-color: #1d9bf0;
  color: white;
  cursor: pointer;
  width: 90%;
  height: 50px;
  padding: 0;
  transition: background-color 0.15s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.new-tweet-btn:hover {
  background-color: #1687d3;
}

.new-tweet-btn-label {
  font-size: 1.2rem;
  font-weight: bold;
}

.new-tweet-btn-feather {
  width: 50px;
  height: 50px;
  display: none;
}

.tweet-menu-container {
  width: 95%;
  margin: auto;
  right: auto;
  top: auto;
  bottom: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.tweet-menu-list {
  display: flex;
  width: 100%;
}

.tweet-menu-item {
  align-self: stretch;
  width: 100%;
  font-size: 1rem;
}

@media screen and (max-width: 1280px) {
  .nav-sidebar {
    width: 50%;
  }
  nav {
    width: 88px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .new-tweet-btn {
    width: 50px;
  }
  .new-tweet-btn-label {
    display: none;
  }
  .new-tweet-btn-feather {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  li.nav-item {
    border-radius: 99px;
    width: min-content;
    width: 50px;
    height: 50px;
    justify-content: center;
    padding: 0;
  }
  li .nav-icon {
    margin: 0;
  }
  .nav-label {
    display: none;
  }
  .nav-user {
    height: 64px;
    width: 64px;
    padding-left: 0.5rem;
  }
  .user-info-wrapper,
  .extra-btn {
    display: none;
  }

  .user-info-and-btn {
    max-width: 100%;
  }

  .nav-user {
    height: fit-content;
    width: fit-content;
  }

  .tweet-menu-container {
    width: max-content;
  }
}

@media screen and (max-width: 1005px) {
  .nav-sidebar {
    flex-shrink: 4;
  }
}

@media screen and (max-width: 700px) {
  .nav-sidebar,
  nav {
    min-width: 88px;
    max-width: 88px;
  }
}

@media screen and (max-width: 500px), (max-height: 500px) {
  .nav-sidebar {
    border-top: rgba(255, 255, 255, 0.384) 1px solid;
    position: fixed;
    bottom: 0;
    height: 3.5rem;
    min-height: 3.5rem;
    width: 100vw;
    max-width: 100vw;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 15;
  }
  nav {
    position: relative;
    height: 100%;
    width: 100%;
    min-width: 100vw;
  }
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0;
  }

  li.nav-item {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-icon {
    margin: 0;
  }
  .nav-label {
    display: none;
  }

  .new-tweet-btn,
  .new-tweet-btn-feather {
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .new-tweet-btn {
    border-radius: 28px;
    position: absolute;
    bottom: 135%;
    right: 3%;
    box-shadow: 0px 0px 6px rgba(123, 213, 255, 0.425);
  }
  .new-tweet-btn-label {
    display: none;
  }

  .nav-logo {
    display: none;
  }

  .nav-user {
    position: fixed;
    top: -1px;
    right: 5px;
    margin: 0;
  }

  .tweet-menu-container {
    top: 100%;
    right: 0;
  }
}
</style>
