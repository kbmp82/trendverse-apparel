// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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

const googleGrovider = new GoogleAuthProvider();
googleGrovider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(); //initialize authorization
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleGrovider); //provides popup authorization
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleGrovider);
export const db = getFirestore(); // initialize firestore db

//add user to database
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

//create user authentication from email and password
export const createAuthUserWithEmailAndPassword = async (
  email,
  password,
  displayName
) => {
  if (!email || !password) return;
  const { user } = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
    displayName
  );
  if (user) {
    user.displayName = displayName;
    createUserDocumentFromAuth(user);
  }
  return user;
};

//sign in user with email and password

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

//sign out user
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
