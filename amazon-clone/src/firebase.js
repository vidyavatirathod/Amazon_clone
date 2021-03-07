// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import  firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCdaic0df--lPER7EL5x8DMPhSykHedHWY",
  authDomain: "clone-6c596.firebaseapp.com",
  projectId: "clone-6c596",
  storageBucket: "clone-6c596.appspot.com",
  messagingSenderId: "766377491577",
  appId: "1:766377491577:web:456a19b1231fdf1c9768a8",
  measurementId: "G-63ZMK79PQB"
};

const firebaseApp =firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth }

