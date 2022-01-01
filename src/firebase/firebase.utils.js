import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAy2CRQ-A83sBHiTzi1MEWR8yWbku4CoC8",
  authDomain: "e-commerce-928f6.firebaseapp.com",
  projectId: "e-commerce-928f6",
  storageBucket: "e-commerce-928f6.appspot.com",
  messagingSenderId: "526463192761",
  appId: "1:526463192761:web:fb546c6a1440cdaf11d568",
  measurementId: "G-ETNZWEWRHG",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export default firebase;
