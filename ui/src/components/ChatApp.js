import Login from './Login';
import Register from './Register';
import { SocketProvider } from '../contexts/SocketProvider';
import { ConversationsProvider } from '../contexts/ConversationsProvider'; 
import { useState, useEffect } from 'react';
import Chat from './Chat';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function ChatApp() {
    const [token, setToken] = useState();
    const test = document.cookie;
    console.log(test);

    console.log(`token: ${token}`);

    const dashboard = (
        <div className="App">
            <SocketProvider>
                <ConversationsProvider>
                    <Chat/>
                </ConversationsProvider>
            </SocketProvider>
        </div>
    );

    useEffect(() => {
        console.log('useEffect');
    }, [token]);

    return (
        token ? dashboard : <Login token={setToken}/>
      );
}

export default ChatApp;
