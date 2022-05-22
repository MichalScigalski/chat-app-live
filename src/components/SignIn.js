import React from 'react';
import { Button } from '@material-ui/core';
import { GoogleAuthProvider } from "firebase/auth";
import { FaGithub } from 'react-icons/fa';
import { auth } from '../firebase';
import './SignIn.css'

function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    auth.signInWithPopup(provider);
}

function SignIn() {
    return (
        <div className="SignIn">
            <div>
                <h1>ChatLive</h1>
                <p><FaGithub fontSize={'20px'}/> <span>@michalscigalski</span></p>
                <Button color="secondary" variant="contained" onClick={signInWithGoogle}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default SignIn
