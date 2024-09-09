// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5FmyT7qypq7HGPbN_V1XIMy0P8S6-M38",
  authDomain: "cryptoplanet-458ac.firebaseapp.com",
  projectId: "cryptoplanet-458ac",
  storageBucket: "cryptoplanet-458ac.appspot.com",
  messagingSenderId: "508933007596",
  appId: "1:508933007596:web:ead96f5711625b23375dc9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app);
