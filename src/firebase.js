// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // collection
import { getAuth } from "firebase/auth";

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

const app = initializeApp(config);

export const auth = getAuth(app);
export const db = getFirestore();
