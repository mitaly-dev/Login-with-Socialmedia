// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQrv9uQZcl2CtlrhC71DxyNJ7QqJXfAqo",
  authDomain: "login-app-fbe73.firebaseapp.com",
  projectId: "login-app-fbe73",
  storageBucket: "login-app-fbe73.appspot.com",
  messagingSenderId: "1055844924164",
  appId: "1:1055844924164:web:13d4dc8aaec357b7e36e51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app