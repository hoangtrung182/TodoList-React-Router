import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();
const ThemeContextProvider  = ({ children }) => {
    //state
    const [theme, setTheme] = useState({
        isLightTheme: true,
        light: {
            backgroundColor: '#fff',
            color: '#000'
        },
        dark: {
            backgroundColor: '#000',
            color: '#fff'
        }
    })

    const changeTheme = () => {
        setTheme({
            ...theme,
            isLightTheme: !theme.isLightTheme
        })
    }
    // Data context
    const themeContextData = {
        theme,
        changeTheme
    }

    // return provider
    return (
        <ThemeContext.Provider value={themeContextData}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;