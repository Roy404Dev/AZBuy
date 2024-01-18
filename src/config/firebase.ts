// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "azbuy-42a89.firebaseapp.com",
  projectId: "azbuy-42a89",
  storageBucket: "azbuy-42a89.appspot.com",
  messagingSenderId: "325149385418",
  appId: "1:325149385418:web:1fafc13a8eba4ec2580a33",
  measurementId: "G-LCZP3806J8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
