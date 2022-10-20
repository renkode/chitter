<script setup>
import { computed } from "vue";
import { useAppStore } from "@/stores/app.js";
import ProfilePicture from "./ProfilePicture.vue";

const app = useAppStore();
const user = computed(() => app.currentUser);
</script>

<template>
  <div class="nav-sidebar">
    <nav>
      <ul>
        <li class="nav-item nav-logo">
          <span class="nav-icon" @click="app.setView('home')"
            ><v-icon name="bi-twitter" scale="2.0" fill="white"
          /></span>
        </li>
        <li class="nav-item" @click="app.setView('home')">
          <span class="nav-icon"
            ><v-icon name="gi-bird-house" scale="2.0" fill="white" /></span
          ><span class="nav-label">Home</span>
        </li>
        <li class="nav-item" @click="app.setView('timeline')">
          <span class="nav-icon"
            ><v-icon
              name="md-accesstime-round"
              scale="1.5"
              fill="white" /></span
          ><span class="nav-label">Timeline</span>
        </li>
        <li class="nav-item" @click="app.viewUserProfile(user.id)">
          <span class="nav-icon"
            ><v-icon name="bi-person" scale="1.8" fill="white" /></span
          ><span class="nav-label">Profile</span>
        </li>
      </ul>
      <button class="new-tweet-btn">
        <span class="new-tweet-btn-feather"
          ><v-icon name="gi-feather" scale="1.8"
        /></span>
        <span class="new-tweet-btn-label">Tweet</span>
      </button>
      <li class="nav-user" v-if="user">
        <div class="user-info-and-btn">
          <ProfilePicture :url="user.avatarUrl" :size="40" />
          <div class="user-info-wrapper">
            <span class="display-name">{{ user.name }}</span>
            <span class="username">@{{ user.username }}</span>
          </div>
        </div>
        <span class="tweet-action-icon extra-btn"
          ><v-icon name="hi-dots-horizontal" scale="1.0" fill="#ffffff80"
        /></span>
      </li>
    </nav>
  </div>
</template>
<style scoped>
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

li {
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

li:hover {
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
}

.user-info-and-btn {
  width: auto;
  height: 100%;
  margin-bottom: 0;
}

.user-info-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.profile-pic {
  margin-right: 0.5rem;
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
  li {
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
  }
  .user-info-wrapper,
  .extra-btn {
    display: none;
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
  }
  nav {
    max-height: 3.5rem;
    width: 100%;
    max-width: 100vw;
    top: auto;
    bottom: 0;
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

  li {
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

  .nav-user,
  li.nav-item.nav-logo {
    display: none;
  }
}
</style>
