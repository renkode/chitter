<script setup>
import { onMounted, ref, computed, watch, defineProps } from "vue";
import ProfilePicture from "./ProfilePicture.vue";
import { useAppStore } from "@/stores/app";
import { useTweetStore } from "@/stores/tweets";
import { useUsersStore } from "@/stores/users";
import { getMediaClass } from "@/mixins/utilities.js";

const app = useAppStore();
const tweetStore = useTweetStore();
const users = useUsersStore();

const props = defineProps(["isModal"]);

const textArea = ref(null);
const circle = ref(null);
const images = ref([]);
const str = ref("");

const user = computed(() => app.currentUser);
const noContent = computed(
  () => str.value.length === 0 && images.value.length === 0
);
const maxedImages = computed(() => images.value.length === 4);
const charactersLeft = computed(() => 280 - str.value.length);
const isYellowRange = computed(() => charactersLeft.value <= 20);
const isRedRange = computed(() => charactersLeft.value <= 0);

const onFileChange = (e) => {
  images.value.push(URL.createObjectURL(e.currentTarget.files[0]));
};

const removeFile = (index) => {
  images.value.splice(index, 1);
};

const resizeTextArea = () => {
  textArea.value.style.height = "";
  textArea.value.style.height = textArea.value.scrollHeight + "px";
};

const handleInput = () => {
  resizeTextArea();
};

const postTweet = () => {
  if (noContent.value) return;
  let type = app.modalType === "reply" ? "reply" : "status";
  let replyingToTweet =
    app.modalType === "reply" ? app.modalReply.tweetId : null;
  let replyingToUser = app.modalType === "reply" ? app.modalReply.userId : null;
  let firstStr = str.value.split(" ")[0];
  if (
    type === "status" &&
    firstStr[0] === "@" &&
    users.getUserByUsername(firstStr.replace("@", ""))
  ) {
    replyingToUser = users.getUserByUsername(firstStr.replace("@", "")).id; // e.g. "@johnsmith lorem ipsum" is a reply
    type = "reply";
  }
  tweetStore.addTweet(
    type,
    str.value,
    images.value,
    user.value.id,
    replyingToTweet,
    replyingToUser
  );
  str.value = "";
  images.value = [];
  if (app.showModal) app.toggleModal();
};

// adjust circle percentage and color
watch(str, () => {
  const characterRatio = (str.value.length / 280).toFixed(2);
  if (isYellowRange.value && charactersLeft.value > 0) {
    // yellow
    circle.value.style = `--circle: ${characterRatio}; --color: #ffd400; --outerRadius: 28px; --innerRadius: 24px;`;
  } else if (isRedRange.value) {
    // red
    circle.value.style = `--circle: ${characterRatio}; --color: #f4212e;--outerRadius: 28px; --innerRadius: 24px;`;
  } else {
    // blue
    circle.value.style = `--circle: ${characterRatio}; --color: #1d9bf0;--outerRadius: 22px; --innerRadius: 18px;`;
  }
});

onMounted(() => {
  // resizeTextArea();
});
</script>

<template>
  <div class="compose-tweet-container">
    <div class="profile-pic-container">
      <ProfilePicture :url="user ? user.avatarUrl : ''" :size="48" />
    </div>
    <div class="compose-tweet-body">
      <div class="compose-tweet-content">
        <!-- <div
          class="replying-to"
          v-if="app.modalReply.userId && app.modalReply.tweetId"
        >
          <span class="gray-text">Replying to </span>
          <a
            class="blue-link"
            @click.stop="app.viewUserProfile(props.replyingToUserId)"
            >@{{ replyingTo }}</a
          >
        </div> -->
        <textarea
          ref="textArea"
          placeholder="What's happening?"
          @input="handleInput"
          v-model="str"
          maxlength="280"
        ></textarea>
        <div
          class="tweet-media"
          :class="[getMediaClass(images)]"
          v-if="images.length > 0"
        >
          <div
            class="image-preview-wrapper"
            v-for="img in images"
            :key="images.indexOf(img)"
          >
            <img :src="img" class="image-preview" />
            <button
              class="remove-image-btn"
              @click="removeFile(images.indexOf(img))"
            >
              <v-icon name="bi-x" scale="1.6" fill="white" />
            </button>
          </div>
        </div>
      </div>
      <div class="compose-tweet-bar">
        <button class="add-image-btn" :disabled="maxedImages">
          <input
            :id="`upload-image-${isModal ? 'modal' : ''}`"
            type="file"
            accept="image/png, image/gif, image/jpeg"
            @change="onFileChange"
            hidden
            :disabled="maxedImages"
          />
          <label :for="`upload-image-${isModal ? 'modal' : ''}`"
            ><v-icon name="ri-image-add-line" scale="1.1" fill="#1d9bf0" />
          </label>
        </button>
        <div class="limit-and-btn">
          <span class="circle-wrapper">
            <div ref="circle" class="circle" style="--circle: 0">
              <span
                class="character-limit"
                :class="{ 'red-text': isRedRange }"
                v-if="isYellowRange"
                >{{ charactersLeft }}</span
              >
            </div></span
          >
          <button
            class="new-tweet-btn"
            :disabled="!user || isRedRange || noContent"
            @click="postTweet(null)"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.compose-tweet-container {
  max-width: 600px;
  width: 100%;
  padding: 1rem;
  display: flex;
}

.compose-tweet-body {
  width: 100%;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
}

.compose-tweet-content {
  height: fit-content;
  width: 100%;
  border-bottom: rgba(255, 255, 255, 0.25) 1px solid;
  padding-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
}

textarea {
  width: 100%;
  border: 0;
  background-color: rgba(255, 255, 255, 0);
  color: white;
  font-size: 1.2rem;
  resize: none;
  overflow: hidden;
}

textarea:focus {
  outline: 0;
}

.compose-tweet-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.9rem;
}

.add-image-btn {
  height: 35px;
  width: 35px;
  border: 0;
  border-radius: 100%;
  background-color: rgba(255, 255, 255, 0);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 0;
  padding: 0;
  transition: background-color 0.15s ease;
}

.add-image-btn:hover:enabled {
  background-color: rgba(0, 132, 255, 0.233);
}

.add-image-btn svg {
  pointer-events: none;
}

.add-image-btn:disabled,
.add-image-btn:disabled label {
  cursor: default;
  opacity: 0.6;
}

.add-image-btn label {
  height: 100%;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-preview-wrapper {
  position: relative;
  display: flex;
}
.image-preview-wrapper img {
  flex: 1;
}

.remove-image-btn {
  position: absolute;
  top: 4px;
  left: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  color: white;
  cursor: pointer;
  padding: 0;
}

.remove-image-btn:focus {
  outline: 0;
  border: 0;
}

.remove-image-btn,
.remove-image-btn svg {
  width: 30px;
  height: 30px;
}

.limit-and-btn {
  display: flex;
  align-items: center;
}

.new-tweet-btn {
  border: 0;
  border-radius: 25px;
  background-color: #1d9bf0;
  color: white;
  cursor: pointer;
  width: 80px;
  height: 35px;
  padding: 0;
  margin-left: 0.8rem;
  transition: background-color 0.15s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.new-tweet-btn:hover:enabled {
  background-color: #1687d3;
}

.new-tweet-btn:disabled {
  cursor: default;
  opacity: 0.4;
}

.circle-wrapper {
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.character-limit {
  font-size: 0.8rem;
}

/* modified https://stackoverflow.com/questions/70368658/percentage-circle-border-css-react */
.circle {
  --circle: 0.3;
  --color: #28a7fc;
  --outerRadius: 22px;
  --innerRadius: 18px;
  height: var(--outerRadius);
  width: var(--outerRadius);
  border-radius: 50%;
  position: relative;
  clip-path: circle(50%);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: width 0.1s ease, height 0.1s ease;
}

.circle::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: conic-gradient(
    var(--color) 0 calc(var(--circle) * 360deg),
    rgba(209, 223, 255, 0.301) calc(var(--circle) * 360deg) 360deg
  );
  z-index: -2;
}

.circle::after {
  content: "";
  position: absolute;
  width: var(--innerRadius);
  height: var(--innerRadius);
  background-color: #262a2e;
  border-radius: 50%;
  z-index: -1;
  transition: width 0.1s ease, height 0.1s ease;
}
</style>
