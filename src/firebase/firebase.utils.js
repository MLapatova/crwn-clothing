import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAjjeYnTQZy91XQ5uqBdhWn_JhcbYSD6ts",
    authDomain: "crwn-db-67f59.firebaseapp.com",
    databaseURL: "https://crwn-db-67f59.firebaseio.com",
    projectId: "crwn-db-67f59",
    storageBucket: "crwn-db-67f59.appspot.com",
    messagingSenderId: "319913850901",
    appId: "1:319913850901:web:f40b98cfc80bffb382361c",
    measurementId: "G-LSN8RKS1L3"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;