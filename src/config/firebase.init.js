// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWdM6PlQoPAIPAjmUe6C3EwjNAmQ8acFA",
  authDomain: "giga-gadget-77916.firebaseapp.com",
  projectId: "giga-gadget-77916",
  storageBucket: "giga-gadget-77916.firebasestorage.app",
  messagingSenderId: "513448307119",
  appId: "1:513448307119:web:98d45b4d9614071860a75a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);