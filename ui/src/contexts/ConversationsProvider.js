import React, { useContext, useEffect, useState } from 'react';

const ConversationsContext = React.createContext();

export function useConversations(){
    return useContext(ConversationsContext);
}

export function ConversationsProvider({children}){
    return(
        <ConversationsContext.Provider>
            {children}
        </ConversationsContext.Provider>
    );
}