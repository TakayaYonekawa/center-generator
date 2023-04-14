import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useEffect, useState } from "react";


// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBI_V6vQHbJHuogYUV7O0kwVabkNBBud5Q",
  authDomain: "center-generator.firebaseapp.com",
  projectId: "center-generator",
  storageBucket: "center-generator.appspot.com",
  messagingSenderId: "750357104463",
  appId: "1:750357104463:web:dc494a072a17b1c54ce73a"
});

// Initialize Firebase
const db = firebaseApp.firestore();
const auth = getAuth();

export {auth, db};

// カスタムフック
export function useAuth() {
  const [currentUser, setCurrentUser] = useState<any>();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
    return unsub;
  },[])

  return currentUser;
  }


// カスタムフック　END