// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAz3DI2jtrhpND1HAVkJCD85ck-zaeX1_o",
    authDomain: "myself-fe2c5.firebaseapp.com",
    projectId: "myself-fe2c5",
    storageBucket: "myself-fe2c5.appspot.com",
    messagingSenderId: "144580228823",
    appId: "1:144580228823:web:7d3e6b5fb77fe627d06292"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app