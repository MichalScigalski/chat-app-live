import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD1k-UwbkgTv80vKmN33aWMHO3Xyde_GuI",
    authDomain: "reactchatlive.firebaseapp.com",
    projectId: "reactchatlive",
    storageBucket: "reactchatlive.appspot.com",
    messagingSenderId: "661970197463",
    appId: "1:661970197463:web:ab58446a2910da3c060992"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };