<script setup>
import { ref, defineProps, onMounted } from "vue";
import { urlRegex, hashtagRegex, atRegex } from "@/mixins/utilities.js";
import { useAppStore } from "@/stores/app";

const props = defineProps(["text"]);
const textEl = ref(null);
const app = useAppStore();

const embedLinks = () => {
  if (!props.text || props.text.length === 0) return;

  const embedArr = props.text.split(" ").map((str) => {
    const newLineSplit = str.split(/\r?\n/);
    switch (true) {
      case urlRegex.test(str):
        return `<a class="blue-link" href="${str}" target="_blank">${str}</a>`;
      case hashtagRegex.test(str):
        return `<a class="blue-link">${str}</a>`;
      case newLineSplit.some((word) => atRegex.test(word)): // SPLIT BY NEWLINE
        return newLineSplit
          .map((word) => {
            if (atRegex.test(word)) {
              return `<a class="blue-link user-link" data-username=${str.replace(
                "@",
                ""
              )}>${newLineSplit.filter((word) => atRegex.test(word))[0]}</a>`;
            } else {
              return word;
            }
          })
          .join("\n");
      default:
        return str;
    }
  });
  return embedArr.join(" ");
};

onMounted(() => {
  const anchors = textEl.value.querySelectorAll(".user-link");
  Array.from(anchors).forEach((anchor) =>
    anchor.addEventListener(
      "click",
      function handleClick(e) {
        e.stopPropagation();
        app.viewUserProfile(anchor.dataset.username);
      },
      {
        capture: false,
        once: true,
      }
    )
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
