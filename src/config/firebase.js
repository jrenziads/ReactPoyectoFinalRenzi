
import { initializeApp } from "firebase/app";
import {getFirestore} from  "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "proces.env.REAC_APP_apikey",
  authDomain: "proces.env.REACT_APP_authDomain",
  projectId: "clase13-34b2f",
  storageBucket: "proces.env.REACT_APP_storageBucket",
  messagingSenderId: "proces.env.EACT_APP_messagingSenderId",
  appId: "proces.env.REACT_APP_appId"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();