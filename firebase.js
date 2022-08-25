// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQAXtIIzUhwTOdwSD4E1Rc-hrCH4aeHB4",
  authDomain: "freeflow-nftmarketplace.firebaseapp.com",
  projectId: "freeflow-nftmarketplace",
  storageBucket: "freeflow-nftmarketplace.appspot.com",
  messagingSenderId: "221093869319",
  appId: "1:221093869319:web:13d4ba479393d50b8837a2",
  measurementId: "G-TJG0K01HJX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);