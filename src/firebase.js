// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8o_xmFU5rP8ixxW4rAmumNzCIjUVpI2s",
  authDomain: "todoa-app-41ed6.firebaseapp.com",
  projectId: "todoa-app-41ed6",
  storageBucket: "todoa-app-41ed6.appspot.com",
  messagingSenderId: "138169027740",
  appId: "1:138169027740:web:a3e06113a510a3575a7159"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);