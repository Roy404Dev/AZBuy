// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

//TODO HERE
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId:  process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket:  process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:  process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId:  process.env.VITE_FIREBASE_APP_ID,
  measurementId:  process.env.VITE_FIREBASE_MEASUREMENT_ID,
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
