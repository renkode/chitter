<script setup>
import { ref, defineProps, computed, onMounted, watch } from "vue";
import { urlRegex, hashtagRegex, atRegex } from "@/mixins/utilities.js";
import { useAppStore } from "@/stores/app";

const props = defineProps(["text"]);
const textEl = ref(null);
const app = useAppStore();

const embedLinks = computed(() => {
  if (!props.text || props.text.length === 0) return;

  const embedArr = props.text.split(" ").map((str) => {
    switch (true) {
      case urlRegex.test(str):
        return `<a class="blue-link" href="${str}" target="_blank">${str}</a>`;
      case hashtagRegex.test(str):
        return `<a class="blue-link">${str}</a>`;
      case atRegex.test(str.split(/\r?\n/)[0]): // SPLIT BY NEWLINE
        return `<a class="blue-link user-link" data-username=${str.replace(
          "@",
          ""
        )}>${str.split(/\r?\n/)[0]}</a>${
          str.split(/\r?\n/).length > 1
            ? "\n" + str.split(/\r?\n/).slice(1).join("\n")
            : ""
        }`;
      default:
        return str;
    }
  });
  return embedArr.join(" ");
});

onMounted(() => {
  const anchors = textEl.value.querySelectorAll(".user-link");
  Array.from(anchors).forEach((anchor) =>
    anchor.addEventListener("click", function handleClick(e) {
      e.stopPropagation();
      app.viewUserProfile(anchor.dataset.username);
      this.removeEventListener("click", handleClick);
    })
  );
});

watch(textEl, () => {});
</script>

<template>
  <div ref="textEl" v-html="embedLinks"></div>
</template>

<style scoped>
a {
  cursor: pointer;
}
</style>
