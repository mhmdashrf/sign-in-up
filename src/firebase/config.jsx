// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj0XBgAsGOblDma55Kdc2KvuZGby-jBgM",
  authDomain: "vite-project-5aeea.firebaseapp.com",
  projectId: "vite-project-5aeea",
  storageBucket: "vite-project-5aeea.appspot.com",
  messagingSenderId: "689927899143",
  appId: "1:689927899143:web:d0ebc67eff7250c12382a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
