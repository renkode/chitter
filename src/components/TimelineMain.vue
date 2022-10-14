<script setup>
import { ref } from "vue";
import TweetSC from "./TweetSC.vue";

const pic = ref([
  "https://pbs.twimg.com/media/Fe_VPZRXwAcQJ8r?format=jpg&name=large",
]);
const pics2 = ref([
  "https://pbs.twimg.com/media/Fe_7yHVUcAUwGVg?format=jpg&name=large",
  "https://pbs.twimg.com/media/Fe2FJ3vUcAA_6zX?format=jpg&name=large",
]);
const pics3 = ref([
  "https://pbs.twimg.com/media/Fe5WTVmXoAITutA?format=jpg&name=large",
  "https://pbs.twimg.com/media/Fe5WT7-XoBoEEWt?format=jpg&name=large",
  "https://pbs.twimg.com/media/Fe0r_ZgWAAEN8px?format=jpg&name=large",
]);
const pics4 = ref([
  "https://pbs.twimg.com/media/Fb6m91SWAAMsMeb?format=jpg&name=large",
  "https://pbs.twimg.com/media/Fb6nCfbXwAMLCBi?format=jpg&name=large",
  "https://pbs.twimg.com/media/Fb6nEFlXoAAE98n?format=jpg&name=large",
  "https://pbs.twimg.com/media/Fb6nFGsWIAM9e-R?format=jpg&name=large",
]);
</script>

<template>
  <div class="main-wrapper">
    <div class="timeline-wrapper">
      <div class="timeline-header">Home</div>
      <div class="compose-tweet-container"></div>
      <div class="tweet-list">
        <TweetSC
          text="I think most people underestimate how #little being 5’4 is. I’m literally hopping around on my phone rn to type tjis out #girl"
          :media="pic"
        />
        <TweetSC
          text="lmao has survived the transition from early internet, and yet rofl has not. Much to consider. https://oh-vue-icons.js.org/"
          :media="pics2"
        />
        <TweetSC
          text="38 y/o gf who still says “sweet summer child”: they’re debating whether PAWG is a slur and i just can’t with the hellsite today.

Me [heard “PAWG” and got so hard i got nauseous]: i think i hauve Covid"
          :media="pics3"
        />
        <TweetSC text="aheem heem" :media="pics4" />
      </div>
    </div>
  </div>
</template>

<style>
.main-wrapper {
  width: 600px;
  height: 100%;
  flex-grow: 0;
}

.timeline-wrapper {
  width: 600px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: rgba(255, 255, 255, 0.25) 1px solid;
  border-top: 0;
  border-bottom: 0;
}

.timeline-header {
  font-size: 1.2rem;
  min-height: 53px;
  height: 53px;
  width: 100%;
  padding-left: 16px;
  background-color: rgba(38, 42, 46, 0.836);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 2;
}

.compose-tweet-container {
  border-bottom: rgba(255, 255, 255, 0.25) 1px solid;
}

.tweet-list {
  height: fit-content;
}

.compose-tweet-container,
.tweet-list {
  width: 598px;
}

@media screen and (max-width: 1005px) {
  .main-wrapper {
    flex-grow: 0;
    width: 100%;
  }
}

@media screen and (max-width: 700px) {
  .main-wrapper,
  .timeline-wrapper,
  .timeline-header,
  .compose-tweet-container,
  .tweet-list {
    width: 100%;
  }
}

@media screen and (max-height: 500px) {
  .main-wrapper {
    display: flex;
    justify-content: center;
  }
}

@media screen and (max-width: 500px) {
  .timeline-wrapper {
    border: rgba(255, 255, 255, 0) 1px solid;
  }
}
</style>
