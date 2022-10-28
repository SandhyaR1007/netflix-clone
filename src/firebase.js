import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmgwfXijCUaOAV3_3IOjHZUpKtdMm8uX4",
  authDomain: "netflix-clone-f1855.firebaseapp.com",
  projectId: "netflix-clone-f1855",
  storageBucket: "netflix-clone-f1855.appspot.com",
  messagingSenderId: "625591512334",
  appId: "1:625591512334:web:19ee2ca86ab57df7a07b5f",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
