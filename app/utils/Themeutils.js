import AsyncStorage from '@react-native-community/async-storage';

import { DarkTheme } from '@Themes/DarkTheme';
import { LightTheme } from '@Themes/LightTheme';

let currentTheme, themeItem, dark;

export const getAppTheme = async () => {
    themeItem = await AsyncStorage.getItem('Theme');
    if (themeItem === null) {
        themeItem = 'light';
        AsyncStorage.setItem('Theme', themeItem);
    }
    currentTheme = themeItem === 'light' ? LightTheme : DarkTheme;
    dark = themeItem === 'light' ? false : true;
    return { currentTheme, themeItem, dark };
};

export const changeTheme = async () => {
    let res = await AsyncStorage.getItem('Theme');
    themeItem = res === 'light' ? 'dark' : 'light';
    AsyncStorage.setItem('Theme', themeItem);
    return { themeItem };
};
