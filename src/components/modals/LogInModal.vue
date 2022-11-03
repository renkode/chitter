<script setup>
import { ref, computed } from "vue";
import ModalHeader from "./ModalHeader.vue";
import InputComponent from "../subcomponents/InputComponent.vue";
import { useAppStore } from "@/stores/app";
import { useUsersStore } from "@/stores/users";

const app = useAppStore();
const users = useUsersStore();
const resolving = ref(false);
const userInput = ref("");
const passInput = ref("");
const cannotLogIn = computed(
  () => userInput.value.length === 0 || passInput.value.length === 0
);

const redirectToSignUp = () => {
  app.setModalType("signup");
};

const logIn = async () => {
  // let data;
  // try {
  //   resolving.value = true;
  //   await fetch("https://jsonplaceholder.typicode.com/users/1")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       resolving.value = false;
  //       data = json;
  //     });
  //   if (data.username !== signUpCodeInput.value) {
  //     app.toast("Wrong code.");
  //     return;
  //   }
  // } catch {
  //   app.toast("Something went wrong.");
  //   return;
  // }
  app.toggleModal();
  app.logIn();
  //app.signUp(false, nameInput.value, usernameInput.value);
};
</script>

<template>
  <ModalHeader
    ><span class="logo"
      ><v-icon name="bi-twitter" scale="1.0" fill="#1d9bf0" /></span
  ></ModalHeader>
  <div class="form-wrapper">
    <form id="sign-up-form">
      <div class="sign-in-text">Sign in to Chitter</div>
      <InputComponent
        v-model:inputValue="userInput"
        name="userInput"
        label="Email"
        :startsBlank="true"
        :validation="[]"
        minLength="1"
      />
      <InputComponent
        v-model:inputValue="passInput"
        type="password"
        name="passInput"
        label="Password"
        :startsBlank="true"
        :validation="[]"
        minLength="1"
      />
      <button
        class="sign-in-btn"
        type="submit"
        :disabled="cannotLogIn"
        @click.prevent="logIn"
      >
        Sign In
      </button>
      <div>
        <span class="gray-text">Don't have an account?</span>
        <a class="blue-link" @click="redirectToSignUp">Sign up</a>
      </div>
    </form>
  </div>
</template>

<style scoped>
.form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 1rem;
}

form {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  margin: 2rem 0;
}

.sign-in-text {
  font-size: 1.5rem;
}

.sign-in-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: white;
  border: 0;
  border-radius: 1.5rem;
  background-color: #1d9bf0;
  font-size: 1.1rem;
  height: 3rem;
  width: 100%;
  margin: 1rem 0;
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.sign-in-btn:hover:enabled {
  background-color: #1687d3;
}

.sign-in-btn:disabled {
  cursor: default;
  opacity: 0.7;
}
</style>
