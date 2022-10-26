import { defineStore } from "pinia";

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useAppStore = defineStore("app", {
  // a function that returns a fresh state
  state: () => ({
    currentId: null, // initialized on mount
    currentUser: null, // initialized on mount
    path: "",
    view: "home", //  timeline (default) | profile | tweet | search
    previousView: "home",
    viewTweetId: null,
    viewProfileId: null,
    profileTab: "tweets", // tweets (default) | tweets-and-replies | media | likes
    showModal: false,
    modalType: "status", // status | reply | edit-profile | retweet-list | like-list
    NUM_INITIAL_TWEETS: 5,
    NUM_LOAD_OLDER_TWEETS: 3,
  }),
  // optional getters
  getters: {},
  // optional actions
  actions: {
    setCurrentUser(user) {
      this.currentUser = user || null;
      this.currentId = user.id;
    },
    setPath(str) {
      this.path = str;
      // call router?
    },
    setView(view) {
      if (this.view === view) return;
      const views = [
        "home",
        "explore",
        "profile",
        "tweet",
        "followers",
        "following",
      ];
      if (!views.includes(view)) {
        throw Error("wrong view");
      }
      if (view !== "tweet") {
        this.setViewTweetId(null); // note that this means we can't go back if we go thru tweets like a chain
      }
      this.previousView = this.view;
      this.view = view;
      console.log(
        `current view: ${this.view}`,
        `previous view: ${this.previousView}`
      );
    },
    setProfileTab(tab) {
      if (this.profileTab === tab) return;
      const tabs = ["tweets", "tweets-and-replies", "media", "likes"];
      if (!tabs.includes(tab)) {
        throw Error("wrong tab");
      }
      this.profileTab = tab;
      console.log(`current tab: ${this.profileTab}`);
    },
    setViewTweetId(id) {
      this.viewTweetId = id;
    },
    setViewProfileId(id) {
      this.viewProfileId = id;
    },
    viewUserProfile(id) {
      this.setProfileTab("tweets");
      this.setViewProfileId(id);
      this.setView("profile");
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    setModalType(type) {
      const types = [
        "status",
        "reply",
        "edit-profile",
        "retweet-list",
        "like-list",
      ];
      if (!types.includes(type)) {
        throw Error("wrong modal type");
      }
      this.modalType = type;
    },
  },
});
