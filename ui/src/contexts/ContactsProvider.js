import React, { useContext, useEffect, useState } from 'react';

const ContactsContext = React.createContext();

export function useContacts(){
    return useContext(ContactsContext);
}

export function ContactsProvider({children}){
    return(
        <ContactsContext.Provider>
            {children}
        </ContactsContext.Provider>
    );
}