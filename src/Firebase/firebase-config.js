// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApPKjKuXEMevc0Wl9qrevfsG5sOzXvr7s",
  authDomain: "fast-responders-2e633.firebaseapp.com",
  projectId: "fast-responders-2e633",
  storageBucket: "fast-responders-2e633.appspot.com",
  messagingSenderId: "56907583143",
  appId: "1:56907583143:web:4c9f24b06d15f91bc81582"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);

export const db = getFirestore(app);