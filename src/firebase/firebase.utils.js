import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyBnkFf6pUbnSRSv0RFtth5Co4tKV8rZMHg",
    authDomain: "crwn-ecomz-db.firebaseapp.com",
    projectId: "crwn-ecomz-db",
    storageBucket: "crwn-ecomz-db.appspot.com",
    messagingSenderId: "433193189207",
    appId: "1:433193189207:web:9b8312d7b3f03ee5c78812",
    measurementId: "G-0C4QEKL79H"
  };
  firebase.initializeApp(config);
  export const auth  = firebase.auth();
  export const firestore  = firebase.firestore();


  const provider = new  firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;