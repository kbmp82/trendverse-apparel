// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBX54em23LbughMHUz1MziBo4w1lN95O50",
  authDomain: "trendverse-d5df0.firebaseapp.com",
  projectId: "trendverse-d5df0",
  storageBucket: "trendverse-d5df0.appspot.com",
  messagingSenderId: "21212872684",
  appId: "1:21212872684:web:b3f15a387f8fa48d108ac9",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
