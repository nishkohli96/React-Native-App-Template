import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { getAppTheme, changeTheme } from '@Utils/Themeutils';

const ThemeContext = React.createContext();

const AppThemeContext = ({ children }) => {
    const [theme, setTheme] = useState(null);
    const [themeStr, setThemeStr] = useState(null);
    const [dark, setDarkMode] = useState(false);

    const setNewTheme = async () => {
        await changeTheme().then((res) => {
            setThemeStr(res.themeItem);
        });
    };

    useEffect(() => {
        const setCurrentTheme = () => {
            getAppTheme().then((res) => {
                setTheme(res.currentTheme);
                setThemeStr(res.themeItem);
                setDarkMode(res.dark);
            });
            return () => null;
        };
        setCurrentTheme();
    }, [theme, themeStr, dark]);

    const ThemeObj = ({ children }) => {
        if (!theme) {
            return { children };
        }
        return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
    };
    if (!theme) {
        return <></>;
    }
    return (
        <ThemeContext.Provider
            value={{
                themeName: themeStr,
                Theme: theme,
                Dark: dark,
                changeTheme: setNewTheme,
            }}
        >
            <ThemeObj>{children}</ThemeObj>
        </ThemeContext.Provider>
    );
};

export { AppThemeContext, ThemeContext };
