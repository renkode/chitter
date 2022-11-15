<script setup>
import { ref, computed, onMounted, watch } from "vue";
import HeaderPicture from "../subcomponents/HeaderPicture.vue";
import ProfilePicture from "../subcomponents/ProfilePicture.vue";
import ModalHeader from "./ModalHeader.vue";
import InputComponent from "../subcomponents/InputComponent.vue";
import { useAppStore } from "@/stores/app.js";
import { useUsersStore } from "@/stores/users";
import { usernameRegex, calendar } from "@/mixins/utilities.js";
import sanitizeHtml from "sanitize-html";

const app = useAppStore();
const users = useUsersStore();

const headerFile = ref(null);
const tempHeaderUrl = ref(users.currentUser.headerUrl);
const avatarFile = ref(null);
const tempAvatarUrl = ref(users.currentUser.avatarUrl);
const nameInput = ref(users.currentUser.name);
const usernameInput = ref(users.currentUser.username);
const bioInput = ref(users.currentUser.description);
const locationInput = ref(users.currentUser.location);
const websiteInput = ref(users.currentUser.website);
const monthInput = ref(null);
const dayInput = ref(null);

// name validation
const nameError = computed(() => nameInput.value.length === 0);

// username validation
const MIN_USERNAME_LENGTH = 3;
const usernameMeetsLength = computed(
  () => usernameInput.value.length >= MIN_USERNAME_LENGTH
);
const validUsername = computed(() => usernameRegex.test(usernameInput.value));
const isUsernameTaken = ref(false);
const usernameError = computed(
  () =>
    !usernameMeetsLength.value || !validUsername.value || isUsernameTaken.value
);

// website url validation
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

// edit avatar and header
const setAvatar = (e) => {
  avatarFile.value = e.currentTarget.files[0];
  tempAvatarUrl.value = URL.createObjectURL(e.currentTarget.files[0]);
};
const setHeader = (e) => {
  headerFile.value = e.currentTarget.files[0];
  tempHeaderUrl.value = URL.createObjectURL(e.currentTarget.files[0]);
};
const clearHeader = () => {
  headerFile.value = null;
  tempHeaderUrl.value = "";
};

// programmatically add month and day options to select
const populateMonths = () => {
  calendar.forEach((month) => {
    var opt = document.createElement("option");
    if (users.currentUser.birthday.split(" ")[0] === month.month)
      opt.selected = true;
    opt.value = month.month;
    opt.textContent = month.month;
    monthInput.value.appendChild(opt);
  });
};
const populateDays = () => {
  dayInput.value.innerHTML = "";
  if (monthInput.value.value === "") return;
  const days = calendar.filter((c) => c.month === monthInput.value.value)[0]
    .days;
  const [birthMonth, birthDate] = users.currentUser.birthday.split(" "); //destructure
  for (let i = 1; i <= days; i++) {
    var opt = document.createElement("option");
    if (birthMonth === monthInput.value.value && birthDate == i)
      opt.selected = true;
    opt.value = i;
    opt.textContent = i;
    dayInput.value.appendChild(opt);
  }
};

// click save to update profile
const updateProfile = () => {
  const newBirthDate = `${monthInput.value.value} ${dayInput.value.value}`;
  users.updateProfile(
    users.currentId,
    nameInput.value,
    usernameInput.value,
    sanitizeHtml(bioInput.value, {
      allowedTags: [],
      allowedAttributes: {},
      disallowedTagsMode: "recursiveEscape",
    }),
    locationInput.value,
    websiteInput.value,
    newBirthDate,
    avatarFile.value,
    headerFile.value
  );
  app.toggleModal();
  app.viewUserProfile(users.currentUser.username);
};

watch(usernameInput, async () => {
  if (usernameInput.value.length === 0) return;
  isUsernameTaken.value = await users.isUsernameTaken(usernameInput.value);
});

// on mount
onMounted(() => {
  populateMonths();
  populateDays();
});
</script>

<template>
  <div class="modal-wrapper">
    <ModalHeader text="Edit Profile">
      <button
        class="save-btn"
        type="submit"
        form="edit-profile-form"
        :disabled="containsError"
        @click.prevent="updateProfile"
      >
        Save
      </button>
    </ModalHeader>

    <div class="header-wrapper">
      <HeaderPicture :url="tempHeaderUrl" />
      <span class="image-actions">
        <span class="set-image-btn">
          <input
            id="upload-header"
            type="file"
            accept="image/png, image/gif, image/jpeg"
            @change="setHeader"
            hidden
          /><label for="upload-header">
            <v-icon name="md-addaphoto-outlined" scale="1.0" fill="white"
          /></label>
        </span>
        <span class="clear-header-btn" @click="clearHeader"
          ><v-icon name="bi-x" scale="1.6" fill="white" /></span
      ></span>
    </div>

    <div class="modal-content">
      <div class="avatar-wrapper">
        <ProfilePicture :url="tempAvatarUrl" :size="112">
          <span class="image-actions">
            <span class="set-image-btn">
              <input
                id="upload-avatar"
                type="file"
                accept="image/png, image/gif, image/jpeg"
                @change="setAvatar"
                hidden
              />
              <label for="upload-avatar">
                <v-icon name="md-addaphoto-outlined" scale="1.0" fill="white"
              /></label> </span></span
        ></ProfilePicture>
      </div>
      <form id="edit-profile-form" class="modal-form">
        <div class="name-and-username">
          <InputComponent
            v-model:inputValue="nameInput"
            name="nameInput"
            label="Name"
            :validation="[
              { errorText: 'Name can\'t be blank', hasError: nameError },
            ]"
            minLength="1"
            maxLength="50"
          />

          <InputComponent
            v-model:inputValue="usernameInput"
            name="usernameInput"
            label="Username"
            :validation="[
              {
                errorText: `Username must be at least
              ${MIN_USERNAME_LENGTH} characters.`,
                hasError: !usernameMeetsLength,
              },
              {
                errorText: `Username can't contain special characters.`,
                hasError: !validUsername,
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
          v-model:inputValue="bioInput"
          :isTextArea="true"
          name="bioInput"
          label="Bio"
          :validation="[]"
          maxLength="160"
          rows="3"
          @keydown.enter.prevent=""
        />

        <InputComponent
          v-model:inputValue="locationInput"
          name="locationInput"
          label="Location"
          :validation="[]"
          maxLength="30"
        />

        <InputComponent
          v-model:inputValue="websiteInput"
          name="websiteInput"
          label="Website"
          :validation="[{ errorText: 'URL is not valid.', hasError: URLError }]"
          maxLength="50"
        />

        <div class="birthday-wrapper">
          <span class="birthday-label gray-text">Birth date</span>
          <span class="birthday-input-wrapper"
            ><select
              id="month"
              name="month"
              ref="monthInput"
              @change="populateDays"
            ></select>
            <select id="day" name="day" ref="dayInput"></select
          ></span>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.modal-wrapper {
  width: 100%;
  padding-bottom: 3rem;
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

.header-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-pic {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-actions {
  position: absolute;
  margin: auto;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.set-image-btn label,
.clear-header-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border-radius: 100%;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
  transition: background-color 0.15s ease;
}

.set-image-btn label:hover,
.clear-header-btn:hover {
  background-color: rgba(0, 0, 0, 0.4);
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
  gap: 1.5rem;
}

.name-and-username {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 6px;
}

.validation-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}
.input-wrapper {
  border: rgba(255, 255, 255, 0.25) 1px solid;
  border-radius: 6px;
  padding: 8px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  flex-flow: column-reverse;
  height: fit-content;
  width: 100%;
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
  gap: 0.8rem;
}

.birthday-input-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 6px;
}

.birthday-input-wrapper select {
  background-color: #262a2e;
  border: rgba(255, 255, 255, 0.25) 1px solid;
  border-radius: 6px;
  color: white;
  padding: 8px;
  display: flex;
  height: 3rem;
}

.birthday-input-wrapper select:focus {
  outline: 0;
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
