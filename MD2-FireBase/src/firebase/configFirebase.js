// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChzKrwEVXhsCwLKo_4Q6Z3RlaQJ5EhqSo",
  authDomain: "project-module02-660b7.firebaseapp.com",
  projectId: "project-module02-660b7",
  storageBucket: "project-module02-660b7.appspot.com",
  messagingSenderId: "840415335120",
  appId: "1:840415335120:web:ee90f7b4ded080cba9c4d5",
  measurementId: "G-MCDSCCWD6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage =getStorage(app)
export {storage}