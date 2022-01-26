import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import './App.css';
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      {user ? <ChatRoom /> : <SignIn /> }
    </div>
  );
}

export default App;
