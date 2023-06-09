import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage" ; 
import {getFirestore} from "@firebase/firestore" ; 
import {getAuth} from "@firebase/auth"
const dotenv = require("dotenv")
dotenv.config()

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app) ; 
const firestore = getFirestore(app) ; 
const auth = getAuth(app) ; 

export {storage, firestore, auth} 