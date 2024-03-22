// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJzpImvSCqKrSoa-hptW3jIFAJ49f5mVk",
  authDomain: "react-native-todo-app-43cf5.firebaseapp.com",
  projectId: "react-native-todo-app-43cf5",
  storageBucket: "react-native-todo-app-43cf5.appspot.com",
  messagingSenderId: "71105252530",
  appId: "1:71105252530:web:7b77d089f5a1521b60cdab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
