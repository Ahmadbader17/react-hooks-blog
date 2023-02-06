
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBk5qhDnBghWiNf9h_yE1ml_0W70XKpIZM",
  authDomain: "react-hooks-blog-fef2b.firebaseapp.com",
  projectId: "react-hooks-blog-fef2b",
  storageBucket: "react-hooks-blog-fef2b.appspot.com",
  messagingSenderId: "395808590401",
  appId: "1:395808590401:web:2c377dfef6041fbcc214c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore = firebase.firestore();