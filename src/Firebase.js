// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgdKIRyMoCzvsq6cY0vTIn-u0ehIPNYJU",
  authDomain: "gedi-7553b.firebaseapp.com",
  projectId: "gedi-7553b",
  storageBucket: "gedi-7553b.appspot.com",
  messagingSenderId: "820535446008",
  appId: "1:820535446008:web:426fabc025342f6b0eee0d",
  measurementId: "G-LCYDMGB6NZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// const analytics = getAnalytics(app);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        window.location.href = "./driver-database";
    }).catch((error)=>{
        console.log(error);
    })
};

