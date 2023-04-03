// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "minecraft-96f09",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: "1:931467249550:web:c2f431f148eb31a2c286df",
  measurementId: "G-GPQKMDV1GG"
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


export const firestore = firebase.firestore();