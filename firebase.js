// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import config from "./config";

const firebaseConfig = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  projectId: "minecraft-96f09",
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: "1:931467249550:web:c2f431f148eb31a2c286df",
  measurementId: "G-GPQKMDV1GG"
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


export const firestore = firebase.firestore();