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
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const firebaseAuth = firebase.auth();
export const firestore = firebase.firestore();
export const signinWithGoogle = () => firebaseAuth.signInWithPopup(provider);
export default firebase;

/**
 * Save the authenticated user to our firebase DB
 * @param {object} authenticatedUser 
 * @param {object} meta 
 */
export const createUser = async (authenticatedUser, meta) => {
    if (!authenticatedUser) {
        return;
    }
    const { uid } = authenticatedUser;
    const userDocRef = firestore.doc(`/users/${uid}`);
    const userDocSnapshot = await userDocRef.get();

    if (userDocSnapshot.exists) {
        return userDocRef;
    }
    const { displayName, email } = authenticatedUser;
    const userData = { ...meta, displayName, email, createdAt: new Date().toISOString() }
    try {
        await userDocRef.set(userData)
    } catch (error) {
        console.log("Error saving user ", error.message);
    }
    return userDocRef;
}