
import { initializeApp } from "firebase/app";
import {getFirestore} from  "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBNHABZWEOfQK2NNmH0WHL5Kv2BASPlwOM",
  authDomain: "clase13-34b2f.firebaseapp.com",
  projectId: "clase13-34b2f",
  storageBucket: "clase13-34b2f.appspot.com",
  messagingSenderId: "646026783577",
  appId: "1:646026783577:web:7ce0b03e1e9310c9f7ba48"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);