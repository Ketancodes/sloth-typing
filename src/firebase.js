// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ8qf-OX-sbdxDxmsr0P-MBHiNmu7sjXQ",
  authDomain: "sloth-typing-app.firebaseapp.com",
  projectId: "sloth-typing-app",
  storageBucket: "sloth-typing-app.firebasestorage.app",
  messagingSenderId: "807823163990",
  appId: "1:807823163990:web:dac4f91b83003d1c2971f7",
  measurementId: "G-BM2R7KYXXG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
