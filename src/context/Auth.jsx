import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    //State
    const [isAuthenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        if(isAuthenticated) {
            alert('Welcome back !!!');
        }
    }, [isAuthenticated])

    const changeAuthen = () => 
    setAuthenticated(!isAuthenticated);

    const AuthenContextData = {
        isAuthenticated,
        changeAuthen
    }

    return (
        <AuthContext.Provider value={AuthenContextData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;