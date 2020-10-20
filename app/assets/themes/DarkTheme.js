import { DefaultTheme } from 'react-native-paper';

export const DarkTheme = {
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        primary: 'grey',
        background: '#181a18', //'#1f2421',
        card: 'green',
        text: '#d0dbd5',
        border: 'silver',
        notification: 'silver',
        header: '#111211',
    },
};
