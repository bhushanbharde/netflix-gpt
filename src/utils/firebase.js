// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAn5T9d6HzXOMSblD4nsqaiTmFr1l54JCU",
  authDomain: "netflix-gpt-e750c.firebaseapp.com",
  projectId: "netflix-gpt-e750c",
  storageBucket: "netflix-gpt-e750c.firebasestorage.app",
  messagingSenderId: "377453241683",
  appId: "1:377453241683:web:fd01a1493c518019282da6",
  measurementId: "G-EJQ0QBVEL2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

