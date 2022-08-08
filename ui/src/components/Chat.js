import { useRef, useState, useEffect } from 'react';
import { useConversations } from '../contexts/ConversationsProvider';
import ContactModal from './ContactModal';
import ConversationModal from './ConversationModal';
import ChatMenu from './ChatMenu';
//import useLocalStorage from './useLocalStorage';
import { Tab, Modal, Form, Button } from 'react-bootstrap';
import axios from 'axios';


export default function Chat(){

    /*
    const stuff = useLocalStorage();
    const friendList = useLocalStorage('friendList', []);
    const receivedRequests = useLocalStorage('receivedRequests', []);
    const sentRequests = useLocalStorage('sentRequests', []);
    */

   const [menuState, setMenuState] = useState();

    const usernameRef = useRef();
    const { test1 } = useConversations();

    function handleSubmit(e){
        /*
        store axios request data into stuff
        */

        console.log('handleSubmit');

        console.log(`${usernameRef.current.value}`);

        const data = {
            contact: usernameRef.current.value
        };

        axios.post(`http://localhost:5000/auth/user`, data)
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        });

        test1(data)

        e.preventDefault();
    }

    const chatMenu = (
        <div></div>
    );

    const chatMain = (
        <div></div>
    );

    function handleClick(e){
        console.log('handleClick');
    }


    return(
        <>
            <div class='chat-container'>
                <div class='chat-header'>Chat header</div>
                <main class='chat-main'>
                    <div class='chat-menu'>
                        <ChatMenu setMenuState={setMenuState}/>
                    </div>
                    <div class='chat-board'>
                        Chat Board
                    </div>
                </main>
                <div class='chat-container-form'>
                    <form onSubmit={handleSubmit}>
                        <input type='text' class='message-field' ref={usernameRef}/>
                        <input type='submit' value='Send'/>
                    </form>
                </div>
            </div>
        </>
    );
}