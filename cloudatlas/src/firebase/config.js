// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc,
    query, where, orderBy,
    serverTimestamp,
    getDoc, updateDoc,connectFirestoreEmulator
  } from 'firebase/firestore';
  import{ 
    getAuth, connectAuthEmulator 
  } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4G_RcmcgxpJtbGj_RZroW0-ziiYXAm7I",
  authDomain: "chat-app-e2387.firebaseapp.com",
  projectId: "chat-app-e2387",
  storageBucket: "chat-app-e2387.appspot.com",
  messagingSenderId: "637383148424",
  appId: "1:637383148424:web:595973f08ed9e31a36703d",
  measurementId: "G-7N3X55BE00"
};

// init firebase
const app = initializeApp(firebaseConfig)

// // init services
const db = getFirestore(app)
const auth = getAuth(app);

connectAuthEmulator(auth, 'http://localhost:9099');
connectFirestoreEmulator(db, 'localhost', 8080);




// const popup = signInWithPopup();
// const fbprovider = FacebookAuthProvider();
// // collection ref
// const ref = // // collection ref
// const ref = collection(db, 'obs');

export {auth, db};