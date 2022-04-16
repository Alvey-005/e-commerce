import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyBnkFf6pUbnSRSv0RFtth5Co4tKV8rZMHg",
    authDomain: "crwn-ecomz-db.firebaseapp.com",
    projectId: "crwn-ecomz-db",
    storageBucket: "crwn-ecomz-db.appspot.com",
    messagingSenderId: `${process.env.MESSAGING_SENDER_ID}`,
    appId: `${process.env.APP_ID}`,
    measurementId: `${process.env.MEASUREMENT_ID}`
  };
  export const createUserProfileDocument = async (userAuth,additionalData) =>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    console.log(userAuth.uid);
    const snapShot = await userRef.get()
    //console.log(userAuth.displayName,userAuth.email);
    //console.log(snapShot.exists);
    if (!snapShot.exists){
      const {displayName, email } = userAuth;
      const createdAt = new Date();
      try {
           await userRef.set({
             displayName,email,createdAt,...additionalData
           })
      }
      catch(error){
          console.log('error creating user ', error.message);
      }

    }
    return userRef;
    
  } ;
  firebase.initializeApp(config);
  export const auth  = firebase.auth();
  export const firestore  = firebase.firestore();


  const provider = new  firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;