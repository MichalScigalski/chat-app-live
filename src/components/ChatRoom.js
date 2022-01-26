import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@material-ui/core';
import { auth, db } from '../firebase';
import firebase from 'firebase/compat/app';
import './ChatRoom.css';
import SendIcon from '@mui/icons-material/Send';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';


function ChatRoom() {
    const [messages, setMessages] = useState([]);
    const [counterCharMsg, setCounterCharMsg] = useState(0);
    const bottomScroll = useRef();
    const inputText = useRef();

    useEffect(() => {
        db.collection('messages').orderBy('createdAt').onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    const [formValue, setFormValue] = useState('');

    async function sendMessage(e) {
        e.preventDefault();
        const { uid, photoURL } = auth.currentUser;
        if (formValue !== '' && formValue.length < 300) {
            await db.collection('messages').add({
                text: formValue,
                photoURL,
                uid,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
            setFormValue('');
            setCounterCharMsg(0);
            bottomScroll.current.scrollIntoView({ behavior: 'smooth' });
        }
        else { console.log("Empty or too long message") }
        inputText.current.focus()
    }

    function deleteCollection(collectionName) {
        // const { uid } = auth.currentUser;
        db.collection(collectionName)
            .get()
            .then(res => {
                res.forEach(element => {
                    element.ref.delete();
                });
            });
    }

    const clearChat = () => {
        const arr = document.querySelectorAll('.message');
        arr.forEach(element => {
            element.remove();
        });
    }

    return (
        <div className="chatRoom">
            <div className="chatRoomButtons">
                <Button color="secondary" variant="outlined" onClick={() => auth.signOut()}>Sign Out</Button>
                <h3>Hello <strong>{auth.currentUser.displayName}</strong></h3>
                <Button color="secondary" variant="outlined" onClick={clearChat}>Clear Chat</Button>
                <Button color="secondary" variant="outlined" onClick={() => deleteCollection('messages')}>Delete data</Button>
            </div>
            <div className="chatRoomMessages">
                {messages.map(({ id, text, photoURL, uid }, _index) => (
                    <div key={_index} className={`message ${uid === auth.currentUser.uid ? 'sent' : 'recived'}`}>
                        <img alt='profile_picture' src={photoURL} />
                        <p title={messages[_index].createdAt}>{text}</p>
                    </div>
                ))}
                <div ref={bottomScroll}></div>
            </div>
            <div>
                <form className="chatRoomControlls" onSubmit={sendMessage}>
                    <div className="chatRoomControllsInput">
                        <SentimentSatisfiedOutlinedIcon className="emojiIcon" color="disabled" />
                        <span className={counterCharMsg >= 300 || counterCharMsg === 0 ? 'counterIncorrect' : 'counterCorrect'}>{counterCharMsg}/300</span>
                        <input ref={inputText} value={formValue} onChange={(e) => { setFormValue(e.target.value); setCounterCharMsg(e.target.value.length) }} placeholder="type a message..." />
                    </div>
                    <button className="sendButton" type="submit" > <SendIcon className="SendIcon" /></button>
                </form>
            </div>
        </div>
    )
}



export default ChatRoom