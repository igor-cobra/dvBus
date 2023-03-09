import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDN-Kkl9432kCAXnPASZIJmXElEqMDzxwM",
  authDomain: "dvbus-27846.firebaseapp.com",
  databaseURL: "https://dvbus-27846-default-rtdb.firebaseio.com",
  projectId: "dvbus-27846",
  storageBucket: "dvbus-27846.appspot.com",
  messagingSenderId: "363689195011",
  appId: "1:363689195011:web:54247fc1c063fe36368036"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);