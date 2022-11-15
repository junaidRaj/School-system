// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASwx4OgeEsA55iCm-irixvUQNEFhuUrhg",
  authDomain: "react-3c144.firebaseapp.com",
  projectId: "react-3c144",
  storageBucket: "react-3c144.appspot.com",
  messagingSenderId: "819064960501",
  appId: "1:819064960501:web:b2f4fc44ce9e05bdaf9cbc",
  measurementId: "G-RZV2E5ZVK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;