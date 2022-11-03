<script setup>
import { useAppStore } from "@/stores/app";
const app = useAppStore();

const goToSignUp = () => {
  app.setModalType("signup");
  app.toggleModal();
};

const goToLogin = () => {
  app.setModalType("login");
  app.toggleModal();
};
</script>

<template>
  <div class="banner-wrapper">
    <div class="left-wrapper"></div>
    <div class="right-wrapper">
      <div class="text-wrapper">
        <div class="header-text">Don't miss what's happening</div>
        <div>People on Chitter are the first to know.</div>
      </div>
      <div class="button-wrapper">
        <button class="login-btn" @click="goToLogin">Log in</button
        ><button class="signup-btn" @click="goToSignUp">Sign up</button>
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
  position: fixed;
  bottom: 0;
  color: white;
  background-color: #1d9bf0;
  z-index: 10;
}

.left-wrapper {
  min-width: 88px;
  width: 30%;
}

.right-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.text-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
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
  padding-right: 1rem;
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

@media screen and (max-width: 1005px) {
  .left-wrapper {
    flex-shrink: 4;
  }
}

@media screen and (max-width: 700px) {
  .banner-wrapper {
    background-color: #262a2e;
    border-top: 1px solid rgba(255, 255, 255, 0.25);
  }
  .left-wrapper,
  .text-wrapper {
    display: none;
  }
  .right-wrapper {
    padding: 1rem;
  }
  .left-wrapper {
    width: 88px;
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

@media screen and (max-width: 500px), (max-height: 500px) {
}
</style>
