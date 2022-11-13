import { defineStore } from "pinia";
import { useUsersStore } from "./users";
import router from "@/router/index.js";
import { auth, db } from "@/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";

export const useAppStore = defineStore("app", {
  state: () => ({
    currentId: null, // initialized on mount
    currentUser: null, // initialized on mount
    profileTab: "tweets", // tweets (default) | tweets-and-replies | media | likes
    showModal: false,
    modalType: "status", // status | reply | edit-profile | retweet-list | like-list
    modalReply: { userId: null, tweetId: null },
    showToast: false,
    toastText: "",
    componentKey: 0, // to force component update
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
    async goTo(route) {
      return router.push(route);
    },

    setCurrentUser(user) {
      this.currentUser = user || null;
      this.currentId = user.id;
    },

    async logIn(email, password) {
      const users = useUsersStore();
      return signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          users.syncCurrentUserToAuth(user.uid);
          this.toast("Welcome!");
          this.goTo("/home");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          return errorCode;
        });
    },

    logOut() {
      const users = useUsersStore();
      signOut(auth)
        .then(() => {
          users.setCurrentUser(null, null);
          this.goTo("explore");
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async signUp(name, username, email, password) {
      return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const users = useUsersStore();
          users.setCurrentUser(
            users.createUser(user.uid, name, username),
            user.uid
          );
          this.toast("Welcome!");
          this.goTo("/home");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          return errorCode;
        });
    },

    setProfileTab(tab) {
      if (this.profileTab === tab) return;
      const tabs = ["tweets", "tweets-and-replies", "media", "likes"];
      if (!tabs.includes(tab)) {
        throw Error("wrong tab");
      }
      this.profileTab = tab;
    },

    viewTweet(id) {
      if (window.getSelection().toString().length > 0) return; // don't trigger click while highlighting text
      router.push({ name: "Tweet", params: { id } });
    },

    viewUserProfile(username) {
      router.push({ name: "Profile", params: { username } });
    },

    setModalType(type) {
      const types = [
        "status",
        "reply",
        "edit-profile",
        "retweet-list",
        "like-list",
        "signup",
        "login",
      ];
      if (!types.includes(type)) {
        throw Error("wrong modal type");
      }
      this.modalType = type;
    },

    toggleModal(type) {
      if (type) this.setModalType(type);
      this.showModal = !this.showModal;
      //if (!this.showModal) this.modalType = "status"; // FAIL SAFE
    },

    setModalReply(userId, tweetId) {
      this.modalReply = { userId, tweetId };
    },

    toast(text) {
      this.showToast = !this.showToast;
      this.toastText = text;
    },
  },
});
