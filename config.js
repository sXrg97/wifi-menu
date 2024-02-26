// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDou_i-dfxvMqaL1a3y-KTrqKDltAW2WCs",
  authDomain: "wifi-menuro.firebaseapp.com",
  projectId: "wifi-menuro",
  storageBucket: "wifi-menuro.appspot.com",
  messagingSenderId: "488686037255",
  appId: "1:488686037255:web:e46ce343a32e4008463da2",
  measurementId: "G-658422DTZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);