import React, { useContext, useEffect, useState } from 'react';
import { useSocket } from './SocketProvider';


const ConversationsContext = React.createContext();

export function useConversations(){
    return useContext(ConversationsContext);
}

export function ConversationsProvider({children}){

    const [conversations, setConversations] = useState();
    const socket = useSocket();

    useEffect(() => {
        if(socket == null) return;

        socket.on('test', (data) => {
            console.log(data);
        });
        return () => socket.off('test');
    }, [socket]);

    function addMessage(){
        
    }

    function test1(test){
    
        console.log(test);
        const data = {};
        socket.emit('test1', {test});
        
    }

    const value = {
        conversations,
        test1
    };

    return(
        <ConversationsContext.Provider value={value}>
            {children}
        </ConversationsContext.Provider>
    );
}