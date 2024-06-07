// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwxhk6RxdXjpRxfg3umfGDRTYLtvA3AHU",
    authDomain: "solar-pag.firebaseapp.com",
    projectId: "solar-pag",
    storageBucket: "solar-pag.appspot.com",
    messagingSenderId: "1046742423685",
    appId: "1:1046742423685:web:2b17c9a3bdd68d755bf1ec",
    measurementId: "G-CEJV5QJVRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);