<script setup>
import { ref, computed, watch } from "vue";
import ModalHeader from "./ModalHeader.vue";
import InputComponent from "../subcomponents/InputComponent.vue";
import { useAppStore } from "@/stores/app";
import { useUsersStore } from "@/stores/users";
import { usernameRegex, emailRegex } from "@/mixins/utilities";
import { db } from "@/firebase.js";
import { doc, getDoc } from "firebase/firestore";

const app = useAppStore();
const users = useUsersStore();

const resolving = ref(false);
const nameInput = ref("");
const nameError = computed(() => nameInput.value.length === 0);

const usernameInput = ref("");
const MIN_USERNAME_LENGTH = 3;
const usernameMeetsLength = computed(
  () => usernameInput.value.length >= MIN_USERNAME_LENGTH
);
const usernameIsInvalid = computed(
  () => !usernameRegex.test(usernameInput.value)
);
const isUsernameTaken = ref(false);

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

const signUpCodeInput = ref("");
const wrongSignUpCode = ref(false);

const containsError = computed(
  () =>
    nameError.value ||
    usernameError.value ||
    emailError.value ||
    passError.value ||
    signUpCodeInput.value.length === 0 ||
    resolving.value
);

const signUp = async () => {
  resolving.value = true;
  const code = await getDoc(doc(db, "app", "signup-code"));
  resolving.value = false;
  if (!code.exists()) {
    throw new Error("Failed to fetch signup code.");
  }
  if (code.data().value !== signUpCodeInput.value) {
    wrongSignUpCode.value = true;
    return;
  }
  await app.signUp(
    nameInput.value,
    usernameInput.value,
    emailInput.value,
    passInput.value
  );
};

watch(usernameInput, async () => {
  if (usernameInput.value.length === 0) return;
  isUsernameTaken.value = await users.isUsernameTaken(usernameInput.value);
});

watch(signUpCodeInput, () => {
  wrongSignUpCode.value = false;
});
// You can check if an email is in use by checking if fetchProvidersForEmail returns an empty array.
// https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth#fetchsigninmethodsforemail
</script>

<template>
  <ModalHeader text="Create your account" />
  <div class="form-wrapper">
    <form id="sign-up-form">
      <div class="input-wrapper">
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
      <div class="input-wrapper">
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
        <InputComponent
          v-model:inputValue="signUpCodeInput"
          name="signUpCodeInput"
          label="Sign-up code"
          :startsBlank="true"
          :validation="[
            { errorText: 'Incorrect signup code.', hasError: wrongSignUpCode },
          ]"
          minLength="1"
        />
      </div>
      <button
        class="make-account-btn"
        type="submit"
        :disabled="containsError"
        @click.prevent="signUp"
      >
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
  background-color: #262a2e;
}

form {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
}

.input-wrapper {
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
