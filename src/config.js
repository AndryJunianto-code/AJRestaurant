import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBgEBNISNgQ5ZMwIBYnGJcoYOXNeAF0bgM",
  authDomain: "ajrestaurant-41b50.firebaseapp.com",
  projectId: "ajrestaurant-41b50",
  storageBucket: "ajrestaurant-41b50.appspot.com",
  messagingSenderId: "491578633759",
  appId: "1:491578633759:web:06c7b8308444139459ef2a",
  measurementId: "G-5ZMCBM3XYE",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectAuth, projectFirestore };
