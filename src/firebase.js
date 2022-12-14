// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // collection
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
} from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyD6efB2gVxJok3DM0tgxjUkK8VWPquFqdA",
  authDomain: "chitter-f923a.firebaseapp.com",
  projectId: "chitter-f923a",
  storageBucket: "chitter-f923a.appspot.com",
  messagingSenderId: "348242830403",
  appId: "1:348242830403:web:8dfacbe7d847ad5c2820f6",
};

// Initialize Firebase

const firebase = initializeApp(config);

const user = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userFirebase) => {
        unsubscribe();
        resolve(userFirebase);
      },
      reject
    );
  });
};

const db = getFirestore();

const auth = getAuth();
setPersistence(auth, browserLocalPersistence);

const storage = getStorage(firebase);

export { firebase, db, auth, storage, user };
