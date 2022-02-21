import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/compat/auth';

//paste your config below
const firebaseApp = firebase.initializeApp({

})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };