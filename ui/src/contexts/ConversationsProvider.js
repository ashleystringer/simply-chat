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

    return(
        <ConversationsContext.Provider value={conversations}>
            {children}
        </ConversationsContext.Provider>
    );
}