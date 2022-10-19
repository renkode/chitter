<script setup>
import { onMounted, ref } from "vue";
import ProfilePicture from "./ProfilePicture.vue";
import { useUserStore } from "@/stores/user";
import { getMediaClass } from "../mixins/tools.js";

const store = useUserStore();
const textArea = ref(null);
const circle = ref(null);
const images = ref([
  "https://pbs.twimg.com/media/Fe5WTVmXoAITutA?format=jpg&name=large",
  "https://pbs.twimg.com/media/Fe5WT7-XoBoEEWt?format=jpg&name=large",
  "https://pbs.twimg.com/media/Fe0r_ZgWAAEN8px?format=jpg&name=large",
]);

const onFileChange = (e) => {
  images.value.push(URL.createObjectURL(e.currentTarget.files[0]));
  console.table(images.value);
};

const removeFile = (index) => {
  images.value.splice(index, 1);
};

const resizeTextArea = () => {
  textArea.value.style.height = "";
  textArea.value.style.height = textArea.value.scrollHeight + "px";
};

const adjustCircle = () => {
  const characterRatio = textArea.value.value.length / 280;
  circle.value.style = `--circle: ${characterRatio}`;
};

const handleInput = () => {
  resizeTextArea();
  adjustCircle();
};

onMounted(() => {
  resizeTextArea();
});
</script>

<template>
  <div class="compose-tweet-container">
    <div class="profile-pic-container">
      <ProfilePicture :url="store.userData.imgs.avatarUrl" :size="48" />
    </div>
    <div class="compose-tweet-body">
      <div class="compose-tweet-content">
        <textarea
          ref="textArea"
          placeholder="What's happening?"
          @input="handleInput"
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
            <!-- <button
              class="remove-image-btn"
              @click="removeFile(images.indexOf(img))"
            >
              <v-icon name="bi-x" scale="2.0" fill="white" />
            </button> -->
          </div>
        </div>
      </div>
      <div class="compose-tweet-bar">
        <span class="add-image">
          <input type="file" id="upload-image" @change="onFileChange" hidden />
          <label for="upload-image"
            ><v-icon name="ri-image-add-line" scale="1.1" fill="#1d9bf0" />
          </label>
        </span>
        <div class="limit-and-btn">
          <div ref="circle" class="circle" style="--circle: 0">
            <span class="character-limit"></span>
          </div>
          <button class="new-tweet-btn">Tweet</button>
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

.add-image {
  height: 35px;
  width: 35px;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.15s ease;
}

.add-image:hover {
  background-color: rgba(0, 132, 255, 0.233);
}

label {
  cursor: pointer;
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
  place-content: center;
  border: 0;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.753);
  color: white;
  cursor: pointer;
  width: 30px;
  height: 30px;
  z-index: 2;
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

.new-tweet-btn:hover {
  background-color: #1687d3;
}

/* https://stackoverflow.com/questions/70368658/percentage-circle-border-css-react */
.circle {
  --circle: 0.3;
  --color: #28a7fc;
  height: 21px;
  width: 21px;
  border-radius: 50%;
  position: relative;
  clip-path: circle(50%);
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
  width: 80%;
  height: 80%;
  top: 10%;
  left: 10%;
  background-color: rgb(38, 42, 46);
  border-radius: 50%;
  z-index: -1;
}
</style>
