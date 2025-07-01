// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-LmpkP44d9r6EJlGedg_A9kXlikdbgcA",
  authDomain: "iilmlab.firebaseapp.com",
  projectId: "iilmlab",
  storageBucket: "iilmlab.firebasestorage.app",
  messagingSenderId: "31644160264",
  appId: "1:31644160264:web:35b7b8a42b0c9574dfdcbd",
  measurementId: "G-G70Z3YTGJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);