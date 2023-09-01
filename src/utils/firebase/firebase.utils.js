// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
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

export const auth = getAuth(); //initialize authorization
export const signInWithGooglePopup = () => signInWithPopup(auth, provider); //provides popup authorization
export const db = getFirestore(); // initialize firestore db

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  //if user doesnt exist create
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }

  return userDocRef;
};
