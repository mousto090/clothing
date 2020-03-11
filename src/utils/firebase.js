import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyDHVxj_tPuYe2DhLw1TRLnBBA1MesnhQm8",
    authDomain: "clothing-77955.firebaseapp.com",
    databaseURL: "https://clothing-77955.firebaseio.com",
    projectId: "clothing-77955",
    storageBucket: "clothing-77955.appspot.com",
    messagingSenderId: "516388927204",
    appId: "1:516388927204:web:4138436d8adc42a8b45ef1"
};
// Initialize Firebase
firebase.initializeApp(config);


// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signinWithGoogle = () => firebase.auth().signInWithPopup(provider);
export default firebase;