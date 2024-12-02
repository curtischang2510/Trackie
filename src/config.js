// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";
// import user authentication later 
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJQcjZGpMk9YmJPScRduDlC6h2jXIWAM4",
  authDomain: "trackie-64791.firebaseapp.com",
  projectId: "trackie-64791",
  storageBucket: "trackie-64791.firebasestorage.app",
  messagingSenderId: "637683280222",
  appId: "1:637683280222:web:76ad459ffefe6e744f87cf",
  measurementId: "G-P0707JG523"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { app, db }