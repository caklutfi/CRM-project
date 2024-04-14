// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS3uu1gSsqGv1_aBZsAmgBiRttqEj-Vco",
  authDomain: "erp-pas.firebaseapp.com",
  projectId: "erp-pas",
  storageBucket: "erp-pas.appspot.com",
  messagingSenderId: "356650003851",
  appId: "1:356650003851:web:8a330119bcf7cc0cb6d38e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);