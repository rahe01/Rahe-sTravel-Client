// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3CFqC2ePvy9jsIN1IYNeP3CDMu1wgzGI",
  authDomain: "tourismmanagement-001.firebaseapp.com",
  projectId: "tourismmanagement-001",
  storageBucket: "tourismmanagement-001.appspot.com",
  messagingSenderId: "941286218921",
  appId: "1:941286218921:web:949ea5cef1961a2025ddb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;