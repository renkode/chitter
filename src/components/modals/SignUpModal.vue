<script setup>
import { ref, computed } from "vue";
import ModalHeader from "./ModalHeader.vue";
import InputComponent from "../subcomponents/InputComponent.vue";
import { useAppStore } from "@/stores/app";
import { useUsersStore } from "@/stores/users";
import { emailRegex } from "@/mixins/utilities";

const app = useAppStore();
const users = useUsersStore();
const nameInput = ref("");
const nameError = computed(() => nameInput.value.length === 0);

const usernameInput = ref("");
const MIN_USERNAME_LENGTH = 3;
const ALPHANUMERIC_UNDERSCORE = new RegExp("^[a-zA-Z0-9_]*$");
const usernameMeetsLength = computed(
  () => usernameInput.value.length >= MIN_USERNAME_LENGTH
);
const usernameIsInvalid = computed(
  () => !ALPHANUMERIC_UNDERSCORE.test(usernameInput.value)
);
const isUsernameTaken = computed(
  () =>
    users.users.filter((user) => user.username == usernameInput.value).length >
    0
);
const usernameError = computed(
  () =>
    !usernameMeetsLength.value ||
    usernameIsInvalid.value ||
    isUsernameTaken.value
);

const emailInput = ref("");
const emailIsBlank = computed(() => emailInput.value.length === 0);
const emailIsInvalid = computed(
  () => emailInput.value.length > 0 && !emailRegex.test(emailInput.value)
);
const emailError = computed(() => emailIsBlank.value && emailIsInvalid.value);

const passInput = ref("");
const passIsBlank = computed(() => passInput.value.length === 0);
const passIsShort = computed(
  () => passInput.value.length > 0 && passInput.value.length < 6
);
const passError = computed(() => passIsBlank.value || passIsShort.value);

const containsError = computed(
  () =>
    nameError.value ||
    usernameError.value ||
    emailError.value ||
    passError.value
);

// You can check if an email is in use by checking if fetchProvidersForEmail returns an empty array.
// https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#fetchsigninmethodsforemail
</script>

<template>
  <ModalHeader text="Create your account" />
  <div class="form-wrapper">
    <form id="sign-up-form">
      <div class="name-and-username">
        <InputComponent
          v-model:inputValue="nameInput"
          name="nameInput"
          label="Name"
          :startsBlank="true"
          :validation="[
            { errorText: `What's your name?`, hasError: nameError },
          ]"
          minLength="1"
          maxLength="50"
        />
        <InputComponent
          v-model:inputValue="usernameInput"
          name="usernameInput"
          label="Username"
          :startsBlank="true"
          :validation="[
            {
              errorText: `Username must be at least
              ${MIN_USERNAME_LENGTH} characters.`,
              hasError: !usernameMeetsLength,
            },
            {
              errorText: `Username can't contain special characters.`,
              hasError: usernameIsInvalid,
            },
            {
              errorText: `Username is taken.`,
              hasError: isUsernameTaken,
            },
          ]"
          :minLength="MIN_USERNAME_LENGTH"
          maxLength="15"
          @keydown.space.prevent=""
        />
      </div>

      <InputComponent
        v-model:inputValue="emailInput"
        type="email"
        name="emailInput"
        label="Email"
        :startsBlank="true"
        :validation="[
          { errorText: `Email is required.`, hasError: emailIsBlank },
          {
            errorText: 'Please enter a valid email.',
            hasError: emailIsInvalid,
          },
        ]"
        minLength="1"
      />
      <InputComponent
        v-model:inputValue="passInput"
        type="password"
        name="passInput"
        label="Password"
        :startsBlank="true"
        :validation="[
          { errorText: `Password is required.`, hasError: passIsBlank },
          {
            errorText: 'Password must be at least 6 characters.',
            hasError: passIsShort,
          },
        ]"
        minLength="6"
      />
      <button class="make-account-btn" type="submit" :disabled="containsError">
        Sign Up
      </button>
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

.name-and-username {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 6px;
}

.make-account-btn {
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

.make-account-btn:hover:enabled {
  background-color: #1687d3;
}

.make-account-btn:disabled {
  cursor: default;
  opacity: 0.7;
}
</style>
