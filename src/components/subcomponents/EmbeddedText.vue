<script setup>
import {
  ref,
  defineProps,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
} from "vue";
import { urlRegex, hashtagRegex, atRegex } from "@/mixins/utilities.js";
import { useAppStore } from "@/stores/app";

const props = defineProps(["text"]);
const app = useAppStore();
const textEl = ref(null);

// remove linebreaks and then put them back because regex is the devil
function createURLAnchor(str) {
  const newLineSplit = str.split(/\r?\n/);
  return newLineSplit
    .map((word) => {
      if (urlRegex.test(word)) {
        return `<a class="blue-link" href="${word}" target="_blank">${word}</a>`;
      } else {
        return word;
      }
    })
    .join("\n");
}

function createHashtagAnchor(str) {
  const newLineSplit = str.split(/\r?\n/);
  return newLineSplit
    .map((word) => {
      if (hashtagRegex.test(word)) {
        return `<a class="blue-link">${word}</a>`;
      } else {
        return word;
      }
    })
    .join("\n");
}

function createUsernameAnchor(str) {
  const newLineSplit = str.split(/\r?\n/);
  return newLineSplit
    .map((word) => {
      if (atRegex.test(word)) {
        return `<a class="blue-link user-link" data-username=${str.replace(
          "@",
          ""
        )}>${word}</a>`;
      } else {
        return word;
      }
    })
    .join("\n");
}

function embedLinks() {
  if (!props.text || props.text.length === 0) return;

  const embedArr = props.text.split(" ").map((str) => {
    switch (true) {
      case urlRegex.test(str):
        return createURLAnchor(str);
      case hashtagRegex.test(str):
        return createHashtagAnchor(str);
      case atRegex.test(str):
        return createUsernameAnchor(str);
      default:
        return str;
    }
  });
  return embedArr.join(" ");
}

const handleClick = (e) => {
  e.stopPropagation();
  app.viewUserProfile(e.currentTarget.dataset.username);
};

onMounted(() => {
  const anchors = textEl.value.querySelectorAll(".user-link");
  Array.from(anchors).forEach((anchor) =>
    anchor.addEventListener("click", handleClick)
  );
});

// edge case: user edits profile bio
onBeforeUpdate(() => {
  const anchors = textEl.value.querySelectorAll(".user-link");
  Array.from(anchors).forEach((anchor) =>
    anchor.removeEventListener("click", handleClick)
  );
});

onUpdated(() => {
  const anchors = textEl.value.querySelectorAll(".user-link");
  Array.from(anchors).forEach((anchor) =>
    anchor.addEventListener("click", handleClick)
  );
});

onBeforeUnmount(() => {
  const anchors = textEl.value.querySelectorAll(".user-link");
  Array.from(anchors).forEach((anchor) =>
    anchor.removeEventListener("click", handleClick)
  );
});
</script>

<template>
  <div ref="textEl" v-html="embedLinks()"></div>
</template>

<style scoped>
a {
  cursor: pointer;
}
</style>
