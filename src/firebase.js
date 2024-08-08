// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2_AJ-likNO6JFuHNFtD0ud2Z_sNdsJKg",
  authDomain: "shilpi1912-3f990.firebaseapp.com",
  projectId: "shilpi1912-3f990",
  storageBucket: "shilpi1912-3f990.appspot.com",
  messagingSenderId: "909944330561",
  appId: "1:909944330561:web:e2b4bd8646943f5c00e9c0",
  measurementId: "G-FR2V7PKZ75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export default app;