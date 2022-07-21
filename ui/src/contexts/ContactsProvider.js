import React, { useContext, useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';


const ContactsContext = React.createContext();

export function useContacts(){
    return useContext(ContactsContext);
}

export function ContactsProvider({children}){

    const [contacts, setContacts] = useLocalStorage('contact', []);

    function createContact(id, name){
        
        setContacts((prevContacts) => {
            return [...prevContacts, {id, name}];
        });
        
    }

    return(
        <ContactsContext.Provider value={createContact}>
            {children}
        </ContactsContext.Provider>
    );
}