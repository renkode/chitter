import { defineStore } from "pinia";
import router from "@/router/index.js";

export const useAppStore = defineStore("app", {
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
    showToast: false,
    toastText: "",
    NUM_INITIAL_TWEETS: 5,
    NUM_LOAD_OLDER_TWEETS: 3,
  }),
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
  actions: {
    setCurrentUser(user) {
      this.currentUser = user || null;
      this.currentId = user.id;
    },
    logOut() {
      this.currentUser = null;
      this.currentId = null;
    },
    setProfileTab(tab) {
      if (this.profileTab === tab) return;
      const tabs = ["tweets", "tweets-and-replies", "media", "likes"];
      if (!tabs.includes(tab)) {
        throw Error("wrong tab");
      }
      this.profileTab = tab;
    },
    setTweetContext(id) {
      if (window.getSelection().toString().length > 0) return; // don't trigger click while highlighting text
      router.push({ name: "Tweet", params: { id } });
    },
    viewUserProfile(username) {
      router.push({ name: "Profile", params: { username } });
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
    toggleToast(text) {
      this.showToast = !this.showToast;
      this.toastText = text;
    },
  },
});
