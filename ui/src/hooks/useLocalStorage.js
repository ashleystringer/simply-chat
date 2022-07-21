import { useState, useEffect } from 'react';

const PREFIX = 'simply-chat-';

export default function useLocalStorage(key, initialValue){
    
    const prefixedKey = PREFIX + key;

    const [value, setValue] = useState(() => {

        const jsonValue = localStorage.getItem(prefixedKey);

        console.log(jsonValue);

        if(jsonValue != null){
            //return JSON.parse(jsonValue);
        }
    });

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value));
    }, [prefixedKey, value]);

    return [value, setValue];
}