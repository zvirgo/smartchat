import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBl04YnymOpyBJ-pnjzfGWpCR44yaxJDg4",
  authDomain: "smartchat-6ce8b.firebaseapp.com",
  projectId: "smartchat-6ce8b",
  storageBucket: "smartchat-6ce8b.appspot.com",
  messagingSenderId: "144342713608",
  appId: "1:144342713608:web:5696d5d6e8576ce53118bd",
};
// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebaseApp.auth();
export { firebaseAuth, firebaseApp };
