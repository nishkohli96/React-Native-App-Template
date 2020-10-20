import AsyncStorage from '@react-native-community/async-storage';

import { DarkTheme } from '@themes/DarkTheme';
import { LightTheme } from '@themes/LightTheme';

let currentTheme, themeItem, dark;

export const getAppTheme = async () => {
    themeItem = await AsyncStorage.getItem('Theme');
    if (themeItem === null) {
        themeItem = 'light';
        await AsyncStorage.setItem('Theme', themeItem);
    }
    currentTheme = themeItem === 'light' ? LightTheme : DarkTheme;
    dark = themeItem === 'light' ? false : true;
    return { currentTheme, themeItem, dark };
};

export const changeTheme = async () => {
    let res = await AsyncStorage.getItem('Theme');
    themeItem = res === 'light' ? 'dark' : 'light';
    await AsyncStorage.setItem('Theme', themeItem);
    return { themeItem };
};
