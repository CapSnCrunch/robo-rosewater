// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyaIUW-ePzzGelzw0fzt3VY62Y5WWcqws",
  authDomain: "robo-rosewater.firebaseapp.com",
  projectId: "robo-rosewater",
  storageBucket: "robo-rosewater.appspot.com",
  messagingSenderId: "764294270877",
  appId: "1:764294270877:web:8a6a28aa21f370e26f6974"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()