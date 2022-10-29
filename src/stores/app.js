import { defineStore } from "pinia";
import router from "@/router/index.js";

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useAppStore = defineStore("app", {
  // a function that returns a fresh state
  state: () => ({
    currentId: null, // initialized on mount
    currentUser: null, // initialized on mount
    path: "",
    view: "home", //  timeline (default) | profile | tweet | search
    previousViews: ["home"],
    viewTweetId: null,
    viewProfileId: null,
    profileTab: "tweets", // tweets (default) | tweets-and-replies | media | likes
    showModal: false,
    modalType: "status", // status | reply | edit-profile | retweet-list | like-list
    modalReply: { userId: null, tweetId: null },
    NUM_INITIAL_TWEETS: 5,
    NUM_LOAD_OLDER_TWEETS: 3,
  }),
  // optional getters
  getters: {
    routeName: () => {
      return router.currentRoute.value.name;
    },
    routeTweetId: () => {
      return router.currentRoute.value.params.id;
    },
    routeUsername: () => {
      return router.currentRoute.value.params.username;
    },
  },
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
    getLastView() {
      return this.previousViews[this.previousViews.length - 1];
    },
    setView(view) {
      if (this.view === view) return;
      const views = [
        "home",
        "explore",
        "profile",
        "notifications",
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
      if (view === "tweet" || view === "followers" || view === "following") {
        if (this.getLastView() !== this.view)
          this.previousViews.push(this.view);
      }
      this.view = view;
    },
    goToLastView() {
      this.setView(this.getLastView());
    },
    setProfileTab(tab) {
      if (this.profileTab === tab) return;
      const tabs = ["tweets", "tweets-and-replies", "media", "likes"];
      if (!tabs.includes(tab)) {
        throw Error("wrong tab");
      }
      this.profileTab = tab;
    },
    setViewTweetId(id) {
      this.viewTweetId = id;
    },
    setTweetContext(id) {
      if (window.getSelection().toString().length > 0) return; // don't trigger click while highlighting text
      router.push({ name: "Tweet", params: { id } });
      // this.setView("tweet");
      // this.setViewTweetId(id);
    },
    setViewProfileId(id) {
      this.viewProfileId = id;
    },
    viewUserProfile(username) {
      router.push({ name: "Profile", params: { username } });
      // this.setProfileTab("tweets");
      // this.setViewProfileId(id);
      // this.setView("profile");
    },
    toggleModal() {
      this.showModal = !this.showModal;
      if (!this.showModal) this.modalType = "status"; // FAIL SAFE
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
    setModalReply(userId, tweetId) {
      this.modalReply = { userId, tweetId };
    },
  },
});
