<script setup>
import { useAppStore } from "@/stores/app";
const app = useAppStore();
</script>

<template>
  <div class="banner-wrapper">
    <div class="container">
      <div class="text-wrapper">
        <div class="header-text">Don't miss what's happening</div>
        <div>People on Chitter are the first to know.</div>
      </div>
      <div class="button-wrapper">
        <button class="login-btn" @click="app.toggleModal('login')">
          Log in</button
        ><button class="signup-btn" @click="app.toggleModal('signup')">
          Sign up
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner-wrapper {
  width: 100%;
  height: 72px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  color: white;
  background-color: #1d9bf0;
  z-index: 10;
}

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 600px;
  width: 100%;
  min-width: fit-content;
  height: 100%;
  padding: 0 1rem;
  position: relative;
  left: -3.5vw;
}

.text-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 100%;
}

.header-text {
  font-size: 1.3rem;
  font-weight: bolder;
}

.button-wrapper {
  display: flex;
  align-items: center;
  height: 100%;
  gap: 1rem;
}

.login-btn,
.signup-btn {
  flex: 1;
  width: 100%;
  cursor: pointer;
  color: white;
  height: 2.5rem;
  border-radius: 1.25rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: transparent;
  transition: background-color 0.15s ease;
  padding: 0 1rem;
  white-space: nowrap;
}

.login-btn:hover,
.signup-btn:hover {
  background-color: #1687d3;
}

@media screen and (max-width: 1280px) {
  .left-wrapper {
    width: 17%;
  }
}

@media screen and (max-width: 700px) {
  .container {
    left: 0;
  }
}

@media screen and (max-width: 500px), (max-height: 500px) {
  .banner-wrapper {
    background-color: #262a2e;
    border-top: 1px solid rgba(255, 255, 255, 0.25);
  }
  .text-wrapper {
    display: none;
  }
  .container {
    padding: 1rem;
    width: 100%;
  }
  .button-wrapper {
    width: 100%;
    gap: 1rem;
    justify-content: center;
    padding: 0;
  }
  .button-wrapper button {
    width: 100%;
  }
  .login-btn {
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.384);
    color: #1d9bf0;
  }
  .login-btn:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
  .signup-btn {
    border: 0;
    background-color: #1d9bf0;
  }
  .signup-btn:hover {
    background-color: #1687d3;
  }
}
</style>
