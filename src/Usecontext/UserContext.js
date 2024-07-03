import React, {createContext, useState} from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const setUserDetails = (userDetails) => {
        setUser(userDetails);
    }

    return(
        <UserContext.Provider value={{user, setUserDetails}}>
            {children}
        </UserContext.Provider>
    )
}