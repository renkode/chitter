<script setup>
import { onMounted, ref } from "vue";
import ProfilePicture from "./ProfilePicture.vue";
import { useUserStore } from "@/stores/user";

const store = useUserStore();
const textArea = ref(null);
const circle = ref(null);

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
      <textarea
        ref="textArea"
        placeholder="What's happening?"
        @input="handleInput"
      ></textarea>
      <div class="compose-tweet-bar">
        <span class="add-image"
          ><v-icon name="ri-image-add-line" scale="1.1" fill="#1d9bf0"
        /></span>
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
}

textarea {
  width: 100%;
  border: 0;
  background-color: rgba(255, 255, 255, 0);
  border-bottom: rgba(255, 255, 255, 0.25) 1px solid;
  color: white;
  font-size: 1.2rem;
  resize: none;
  overflow: hidden;
  padding-bottom: 1.2rem;
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
