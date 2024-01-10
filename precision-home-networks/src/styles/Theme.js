import React, { createContext, useState, useEffect } from 'react';

// Create a context
export const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
 const [isDarkMode, setIsDarkMode] = useState(false);

 useEffect(() => {
    const savedThemePreference = localStorage.getItem('isDarkmode');
    if (savedThemePreference !== null) {
        setIsDarkMode(JSON.parse(savedThemePreference));
    }
 }, []);

 const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('isDarkmode', JSON.stringify(!isDarkMode));
 };

 return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
 );
};
