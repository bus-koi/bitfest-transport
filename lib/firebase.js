// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCF8AKpdRvYSzH7SCpdOU8aA2cvZTPre3I",
    authDomain: "bit-fest.firebaseapp.com",
    projectId: "bit-fest",
    storageBucket: "bit-fest.appspot.com",
    messagingSenderId: "148850105452",
    appId: "1:148850105452:web:e60de6703c627682ff8c49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export function logout() {
    return signOut(auth);
}

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    return signInWithPopup(auth, provider);
};
