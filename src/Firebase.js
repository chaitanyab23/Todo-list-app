// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB6EoniITvnq8YKM81PYiczsEQGyih-QMc",
  authDomain: "todo-app-d4544.firebaseapp.com",
  projectId: "todo-app-d4544",
  storageBucket: "todo-app-d4544.appspot.com",
  messagingSenderId: "262037761262",
  appId: "1:262037761262:web:2eb64d7c3cd882cc4197ff",
  measurementId: "G-NVNN0CY5D1",
});

const db = firebaseApp.firestore();

export default db;
