// === FIREBASE ===
import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAv4yn5_YF4yWXC08mhsQsgZHzneHpk3mQ",
  authDomain: "lizzproject5.firebaseapp.com",
  databaseURL: "https://lizzproject5.firebaseio.com",
  projectId: "lizzproject5",
  storageBucket: "lizzproject5.appspot.com",
  messagingSenderId: "161316336238",
  appId: "1:161316336238:web:361db54da2709a17cbac7f",
  measurementId: "G-7Z18S98M76",
};

firebase.initializeApp(config);

export default firebase;
