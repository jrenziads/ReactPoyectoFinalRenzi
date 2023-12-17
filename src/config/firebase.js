
import { initializeApp } from "firebase/app";
import {getFirestore} from  "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "proces.env.REAC_APP_apikey",
  authDomain: "clase13-34b2f.firebaseapp.com",
  projectId: "clase13-34b2f",
  storageBucket: "clase13-34b2f.appspot.com",
  messagingSenderId: "646026783577",
  appId: "1:646026783577:web:7ce0b03e1e9310c9f7ba48"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();