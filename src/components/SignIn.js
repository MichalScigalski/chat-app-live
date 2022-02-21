import React from 'react';
import { Button } from '@material-ui/core';
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase';

function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    auth.signInWithPopup(provider);
}

function SignIn() {
    return (
        <div>
            <Button color="secondary" variant="contained" onClick={signInWithGoogle}>Sign in with Google</Button>
            <h3>login</h3>
        </div>
    )
}

export default SignIn
