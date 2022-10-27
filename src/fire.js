// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCt4T-gA5AnOXC2n0_MRcsqSpePc6S7iVg",
  authDomain: "login-23e60.firebaseapp.com",
  projectId: "login-23e60",
  storageBucket: "login-23e60.appspot.com",
  messagingSenderId: "539931733766",
  appId: "1:539931733766:web:c41c16183fcc1a3713f887",
  measurementId: "G-QCXMQ91M41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();