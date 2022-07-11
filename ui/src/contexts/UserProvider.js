import { useContext } from 'react';

const UserContext = react.createContext();

export function useUser(){
    return useContext(UserContext);
}

export function UserProvider({children}){
    return(
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    );
}