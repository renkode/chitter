import { defineStore } from "pinia";

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useAppStore = defineStore("app", {
  // a function that returns a fresh state
  state: () => ({
    path: "",
    view: "home", //  timeline (default) | profile | tweet-context | search
    profileViewMode: "tweets", // tweets (default) | tweets-and-replies | media | likes
    showModal: false,
    modalType: "status", // status | reply | quote
    NUM_INITIAL_TWEETS: 5,
    NUM_LOAD_OLDER_TWEETS: 3,
  }),
  // optional getters
  getters: {},
  // optional actions
  actions: {
    setPath(str) {
      this.path = str;
      // call router?
    },
    setView(view) {
      const views = ["home", "timeline", "profile", "tweet-context"];
      if (!views.includes(view)) {
        throw Error("wrong view");
      }
      this.view = view;
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    setModalType(type) {
      if (type !== "status" || type !== "reply" || type !== "quote") {
        throw Error("wrong modal type");
      }
      this.modalType = type;
    },
  },
});
