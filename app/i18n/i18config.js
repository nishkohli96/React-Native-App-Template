import i18next from 'i18next';
import AsyncStorage from '@react-native-community/async-storage';
import common_en from './translations/en/common.json';
import common_fr from './translations/fr/common.json';
import common_hi from './translations/hi/common.json';

export const Languages = [
    { initials: 'en', fullName: 'English' },
    { initials: 'fr', fullName: 'Français' },
    { initials: 'hi', fullName: 'हिंदी' },
];

let currentLang;

/* Retrieving the AsyncStorage value for 'Language' Property, and then configure
    i18n to use that language only, unless changed in settings */

export const getCurrentLang = async () => {
    try {
        currentLang = await AsyncStorage.getItem('Language');
        if (currentLang === null) {
            currentLang = JSON.stringify(Languages[0]);
            await AsyncStorage.setItem('Language', currentLang);
        }
        return currentLang;
    } catch {
        console.log('keys ', await AsyncStorage.getAllKeys());
    }
};

export const changeLang = async (lang) => {
    await AsyncStorage.setItem('Language', JSON.stringify(lang));
};

const configurei18 = (lang) => {
    currentLang = JSON.parse(lang);
    i18next.init({
        interpolation: { escapeValue: false }, // React already does escaping
        lng: currentLang.initials, // language to use
        fallbackLng: 'en', // in case no language found
        resources: {
            en: {
                common: common_en, // 'common' is our custom namespace
            },
            fr: {
                common: common_fr,
            },
            hi: {
                common: common_hi,
            },
        },
    });
};

const get18config = () => {
    return i18next;
};

const setInitialLang = async () => {
    await getCurrentLang().then((lang) => {
        configurei18(lang);
    });
};

setInitialLang();

export default get18config;
