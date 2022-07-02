import React, { useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const SocketContext = React.createContext();

export function useSocket(){
    return useContext(SocketContext);
}

export function SocketProvider({id, children}){
    const [socket, setSocket] = useState();

    useEffect(()=>{
        const socket = io('http://localhost:5000/');

        setSocket(socket);

        return () => socket.close();
    }, [id]);

    return(
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
}