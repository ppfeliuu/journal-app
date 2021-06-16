import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVlZduBmlqA0mPtip2IlDTViXwgOuE90A",
  authDomain: "journal-app-9ad82.firebaseapp.com",
  projectId: "journal-app-9ad82",
  storageBucket: "journal-app-9ad82.appspot.com",
  messagingSenderId: "1072637300867",
  appId: "1:1072637300867:web:e475300001032066b34bb6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
