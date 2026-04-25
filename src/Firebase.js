// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEZjaK5ibYyaix-QGstcR1UlbsOsW9SWg",
  authDomain: "pawfect-paws.firebaseapp.com",
  projectId: "pawfect-paws",
  storageBucket: "pawfect-paws.firebasestorage.app",
  messagingSenderId: "12118175590",
  appId: "1:12118175590:web:5fdb376e28231603cd62a7",
  measurementId: "G-DXWY1SZNY6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()
export const db=getFirestore()