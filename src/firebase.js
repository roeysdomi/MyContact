
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: "AIzaSyCtSvcVY1qyeP6zL2XHmjNHw7Ui4st5ZfQ",
authDomain: "mycontact-474ba.firebaseapp.com",
databaseURL: "https://mycontact-474ba-default-rtdb.firebaseio.com",
projectId: "mycontact-474ba",
storageBucket: "mycontact-474ba.appspot.com",
messagingSenderId: "1033314852797",
appId: "1:1033314852797:web:cfc66aac69936a7cdcbcd4"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  export default app.database()

export const auth = getAuth(app)
