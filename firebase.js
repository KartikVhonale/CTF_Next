// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQoO4Jnre7Pk7azZ3JgYnslB4Id11bitw",
  authDomain: "aarhantctf.firebaseapp.com",
  projectId: "aarhantctf",
  storageBucket: "aarhantctf.appspot.com",
  messagingSenderId: "474018306563",
  appId: "1:474018306563:web:00cb8b8eefb0dd5aa3cc36",
  measurementId: "G-8ZBBXP9JD7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);