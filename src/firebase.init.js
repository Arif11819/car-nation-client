// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcJYTvSIMIhRF-EcKJvx8-CT-2zoGB1w8",
    authDomain: "zara-car-manufacturer-house.firebaseapp.com",
    projectId: "zara-car-manufacturer-house",
    storageBucket: "zara-car-manufacturer-house.appspot.com",
    messagingSenderId: "331935506148",
    appId: "1:331935506148:web:7a97e7c718b34714b896f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;