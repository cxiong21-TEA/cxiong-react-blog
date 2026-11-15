/* Reference from the 8.2_useContext video from module 10 */

import { createContext, useContext, useState, useEffect} from 'react'

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() =>
        localStorage.getItem('theme') || 'light'
    );
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}