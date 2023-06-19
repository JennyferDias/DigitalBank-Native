import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {getFirestore, query, getDocs, collection, where, addDoc,} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDnSfoFj4EAhRPC38XoYg9SnTQzGayLX6I",
  authDomain: "diasbank-33532.firebaseapp.com",
  projectId: "diasbank-33532",
  storageBucket: "diasbank-33532.appspot.com",
  messagingSenderId: "277929994729",
  appId: "1:277929994729:web:0cbbc25b809186db03c378"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  logout,
  storage,
};