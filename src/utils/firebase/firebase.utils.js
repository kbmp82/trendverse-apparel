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

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
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

//import collections
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  //create collection reference
  const collectionRef = collection(db, collectionKey);

  //use batch to verify transaction was completed correctly prior to executing write operation
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object[field].toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

//get collections from database
export const getCollectionsAndDocuments = async (type) => {
  const collectionRef = collection(db, type);
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};
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

  return userSnapshot;
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

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
