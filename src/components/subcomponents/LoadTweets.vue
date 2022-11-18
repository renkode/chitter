<script setup>
import { ref, defineProps, onMounted } from "vue";
import { useTweetStore } from "@/stores/tweets";
import LoadSpinner from "./LoadSpinner.vue";

const store = useTweetStore();
const props = defineProps({
  rawTweets: Array,
  isFetching: Boolean,
  fetch: Function, // argument must accept an array
});
const unfetchedTweets = ref(props.rawTweets);

const loadMoreTweets = () => {
  props.fetch(unfetchedTweets.value.slice(0, store.fetchLimit));
  unfetchedTweets.value = unfetchedTweets.value.slice(store.fetchLimit);
};
</script>

<template>
  <template v-if="unfetchedTweets.length > 0">
    <LoadSpinner v-show="props.isFetching" />
    <div
      class="load-tweets blue-text"
      @click.stop="loadMoreTweets"
      v-show="!props.isFetching"
    >
      Show more tweets
    </div>
  </template>
</template>

<style>
.load-tweets {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  background-color: #262a2e;
  border: rgba(255, 255, 255, 0.25) 1px solid;
  border-left: 0;
  border-right: 0;
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.load-tweets:hover {
  background-color: rgba(255, 255, 255, 0.065);
}
</style>
