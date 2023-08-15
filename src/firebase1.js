import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyATcYJ2Jmc6jTI3_G34l9VokHHdB0VlqxQ",
  authDomain: "clone-e098f.firebaseapp.com",
  projectId: "clone-e098f",
  storageBucket: "clone-e098f.appspot.com",
  messagingSenderId: "767627518236",
  appId: "1:767627518236:web:b06a6aed52f4a7c784dad9",
  measurementId: "G-QKYJGM89QD"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db };


