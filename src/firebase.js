import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD3GHCow0aD5On2TBWDT08X3y0PI7AI6lI",
  authDomain: "chatapp-55976.firebaseapp.com",
  projectId: "chatapp-55976",
  storageBucket: "chatapp-55976.appspot.com",
  messagingSenderId: "682638149321",
  appId: "1:682638149321:web:772f69883182c3d4b7af18",
  measurementId: "G-H42L19QZKQ"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };