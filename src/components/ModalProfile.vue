<script setup>
import { ref, watch, computed } from "vue";
import HeaderPicture from "./HeaderPicture.vue";
import ProfilePicture from "./ProfilePicture.vue";
import { useAppStore } from "@/stores/app.js";
import { useUsersStore } from "@/stores/users";
const app = useAppStore();
const users = useUsersStore();
const headerUrl = ref(app.currentUser.headerUrl);
const avatarUrl = ref(app.currentUser.avatarUrl);
const nameInput = ref(app.currentUser.name);
const usernameInput = ref(app.currentUser.username);
const bioInput = ref(app.currentUser.description);
const locationInput = ref(app.currentUser.location);
const websiteInput = ref(app.currentUser.website);
const birthdayInput = ref(app.currentUser.birthday);

const nameError = computed(() => nameInput.value.length === 0);
const ALPHANUMERIC_UNDERSCORE = new RegExp("^[a-zA-Z0-9_]*$");
const validUsername = computed(() =>
  ALPHANUMERIC_UNDERSCORE.test(usernameInput.value)
);

const MAX_USERNAME_LENGTH = 3;
const isUsernameTaken = computed(
  () =>
    users.users.filter(
      (user) =>
        app.currentId !== user.id && user.username == usernameInput.value
    ).length > 0
);

const usernameError = computed(
  () =>
    (usernameInput.value.length >= 0 &&
      usernameInput.value.length < MAX_USERNAME_LENGTH) ||
    !validUsername.value ||
    isUsernameTaken.value
);

const URL_REGEX = new RegExp(
  /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/i
);
const validURL = computed(() => URL_REGEX.test(websiteInput.value));
const URLError = computed(
  () => !validURL.value && websiteInput.value.length > 0
);
const containsError = computed(
  () => nameError.value || usernameError.value || URLError.value
);

const nameInputWrapper = ref(null);
const usernameInputWrapper = ref(null);
const websiteInputWrapper = ref(null);

const setHeader = (e) => {
  headerUrl.value = URL.createObjectURL(e.currentTarget.files[0]);
};

const setFocus = (e) => {
  e.currentTarget.nextElementSibling
    .querySelector("label")
    .classList.toggle("gray-text");
  e.currentTarget.nextElementSibling
    .querySelector("label")
    .classList.toggle("blue-text");
  e.currentTarget.nextElementSibling
    .querySelector(".text-limit")
    .classList.toggle("show");
  e.currentTarget.closest(".input-wrapper").classList.toggle("blue-border");
};

const updateProfile = () => {};

watch(nameInput, () => {
  if (nameError.value) {
    nameInputWrapper.value.className = "input-wrapper red-border";
    nameInputWrapper.value.querySelector("label").className = "red-text";
  } else {
    usernameInputWrapper.value.className = "input-wrapper blue-border";
    usernameInputWrapper.value.querySelector("label").className = "blue-text";
  }
});

watch(usernameInput, () => {
  if (usernameError.value) {
    usernameInputWrapper.value.className = "input-wrapper red-border";
    usernameInputWrapper.value.querySelector("label").className = "red-text";
  } else {
    usernameInputWrapper.value.className = "input-wrapper blue-border";
    usernameInputWrapper.value.querySelector("label").className = "blue-text";
  }
});

watch(websiteInput, () => {
  if (URLError.value) {
    websiteInputWrapper.value.className = "input-wrapper red-border";
    websiteInputWrapper.value.querySelector("label").className = "red-text";
  } else {
    websiteInputWrapper.value.className = "input-wrapper blue-border";
    websiteInputWrapper.value.querySelector("label").className = "blue-text";
  }
});
</script>

<template>
  <div class="modal-overlay" @click.stop.self="app.toggleModal()"></div>
  <div class="modal-container">
    <div v-if="app.modalType === 'edit-profile'">
      <div class="modal-header">
        <span class="header-item-wrapper">
          <span class="exit-modal-btn" @click="app.toggleModal"
            ><v-icon name="bi-x" scale="1.6" fill="white"
          /></span>
          <span class="header-text"><strong>Edit profile</strong></span></span
        >
        <button
          class="save-btn"
          :disabled="containsError"
          @click.prevent="updateProfile"
        >
          Save
        </button>
      </div>
      <HeaderPicture :url="headerUrl" />

      <div class="modal-content">
        <div class="avatar-wrapper">
          <ProfilePicture :url="avatarUrl" :size="112" />
        </div>
        <div class="modal-form">
          <div class="name-and-username">
            <div class="validation-wrapper">
              <div class="input-wrapper" ref="nameInputWrapper">
                <input
                  id="nameInput"
                  type="text"
                  v-model="nameInput"
                  @focusin="setFocus"
                  @focusout="setFocus"
                  min-length="1"
                  maxlength="50"
                />
                <span class="label-wrapper"
                  ><label class="gray-text" for="nameInput">Name</label
                  ><span class="text-limit gray-text"
                    >{{ nameInput.length }} / 50</span
                  ></span
                >
              </div>
              <span class="error-input red-text" v-if="nameInput.length === 0"
                >Name can't be blank.</span
              >
            </div>
            <div class="validation-wrapper">
              <div class="input-wrapper" ref="usernameInputWrapper">
                <input
                  id="usernameInput"
                  type="text"
                  v-model="usernameInput"
                  @focusin="setFocus"
                  @focusout="setFocus"
                  @keydown.space.prevent=""
                  :minlength="MAX_USERNAME_LENGTH"
                  maxlength="15"
                />
                <span class="label-wrapper"
                  ><label class="gray-text" for="usernameInput">Username</label
                  ><span class="text-limit gray-text"
                    >{{ usernameInput.length }} / 15</span
                  ></span
                >
              </div>
              <span
                class="error-input red-text"
                v-if="
                  usernameInput.length > 0 &&
                  usernameInput.length < MAX_USERNAME_LENGTH
                "
                >Username must be at least
                {{ MAX_USERNAME_LENGTH }} characters.</span
              >
              <span class="error-input red-text" v-if="!validUsername"
                >Username can't contain special characters.</span
              >
              <span class="error-input red-text" v-if="isUsernameTaken"
                >Username is taken.</span
              >
            </div>
          </div>
          <div class="input-wrapper">
            <textarea
              id="bioInput"
              v-model="bioInput"
              @focusin="setFocus"
              @focusout="setFocus"
              maxlength="160"
              rows="3"
              @keydown.enter.prevent=""
            ></textarea>
            <span class="label-wrapper"
              ><label class="gray-text" for="bioInput">Bio</label
              ><span class="text-limit gray-text"
                >{{ bioInput.length }} / 160</span
              ></span
            >
          </div>
          <div class="input-wrapper">
            <input
              id="locationInput"
              type="text"
              v-model="locationInput"
              @focusin="setFocus"
              @focusout="setFocus"
              maxlength="30"
            />
            <span class="label-wrapper"
              ><label class="gray-text" for="locationInput">Location</label
              ><span class="text-limit gray-text"
                >{{ locationInput.length }} / 30</span
              ></span
            >
          </div>
          <div class="validation-wrapper">
            <div class="input-wrapper" ref="websiteInputWrapper">
              <input
                id="websiteInput"
                type="text"
                v-model="websiteInput"
                @focusin="setFocus"
                @focusout="setFocus"
                maxlength="50"
              />
              <span class="label-wrapper"
                ><label class="gray-text" for="websiteInput">Website</label
                ><span class="text-limit gray-text"
                  >{{ websiteInput.length }} / 50</span
                ></span
              >
            </div>
            <span class="error-input red-text" v-if="URLError"
              >URL is not valid.</span
            >
          </div>
          <div class="birthday-wrapper">
            <span class="birthday-label gray-text"
              >Birth date<span class="separator">·</span
              ><a class="blue-link" href=""> Edit</a></span
            ><span class="birthday-text">{{ birthdayInput }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.164);
  z-index: 10;
}

.modal-container {
  background-color: #262a2e;
  border-radius: 16px;
  overflow-y: scroll;
  position: fixed;
  pointer-events: auto;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  max-width: 600px;
  height: 75%;
  z-index: 20;
  padding-bottom: 3rem;
}

.modal-header {
  position: sticky;
  top: 0;
  background-color: #262a2ea2;
  height: 53px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  z-index: 21;
}

.header-item-wrapper {
  display: flex;
  align-items: center;
}

.exit-modal-btn {
  cursor: pointer;
  position: relative;
  left: -4px;
  border-radius: 100%;
  background-color: rgba(255, 255, 255, 0);
  width: 32px;
  height: 32px;
  transition: background-color 0.15s ease;
}

.exit-modal-btn:hover {
  background-color: rgba(255, 255, 255, 0.137);
}

.header-text {
  font-size: 1.2rem;
  margin-left: 1rem;
}

.save-btn {
  cursor: pointer;
  color: black;
  background-color: white;
  border: 0;
  width: 65px;
  height: 32px;
  border-radius: 16px;
  transition: background-color 0.15s ease;
}

.save-btn:hover {
  background-color: rgb(228, 228, 228);
}

.save-btn:disabled {
  cursor: default;
  opacity: 0.7;
}

.modal-content {
  height: fit-content;
  padding: 1rem;
}

.avatar-wrapper {
  position: relative;
  overflow: visible;
  height: min(60px, 18vw);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.profile-pic {
  position: absolute;
  width: min(112px, 25vw) !important;
  left: 0;
  top: max(-85px, -20vw);
  outline: #262a2e solid 4px;
  cursor: default;
}

.modal-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.validation-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}

.input-wrapper {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4rem;
}

.name-and-username {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 6px;
}

.input-wrapper {
  border: rgba(255, 255, 255, 0.25) 1px solid;
  border-radius: 6px;
  padding: 8px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-flow: column-reverse;
  height: fit-content;
}

.input-wrapper input,
.input-wrapper textarea {
  flex: 1;
  background-color: #262a2e;
  height: 3rem;
  color: white;
  border: 0;
  width: 100%;
}

.input-wrapper textarea {
  height: fit-content;
  word-wrap: break-word;
  word-break: break-all;
}

.input-wrapper:focus {
  border: #1d9bf0 1px solid;
  outline: 0;
}

.input-wrapper:focus label {
  color: #1d9bf0;
}

.input-wrapper.blue-border {
  border: #1d9bf0 1px solid;
}

.input-wrapper.red-border {
  border: 1px solid #f4212e;
}

input:focus,
textarea:focus {
  outline: 0;
}

.input-wrapper label {
  font-size: 0.85rem;
  gap: 6px;
}

.label-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: no-wrap;
}

.error-input {
  margin-top: 4px;
  font-size: 0.85rem;
}

.text-limit {
  display: none;
  font-size: 0.85rem;
}

.text-limit.show {
  display: inline-block;
}

.birthday-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.birthday-label {
  display: flex;
  flex-direction: row;
}

.birthday-text {
  margin-top: 6px;
  font-size: 1.4rem;
}
</style>
