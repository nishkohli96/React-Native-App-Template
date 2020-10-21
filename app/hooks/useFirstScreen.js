import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const useFirstScreen = () => {
    const [firstScreen, setFirstScreen] = useState('IntroScreen');

    useEffect(() => {
        const checkFirstUse = async () => {
            let fs = await AsyncStorage.getItem('firstTime');
            if (fs === null) {
                await AsyncStorage.setItem('firstTime', 'true');
            } else {
                setFirstScreen('NavDrawer');
            }
        };
        checkFirstUse();
        return () => console.log('cmp unmount');
    }, []);
    return firstScreen;
};

export default useFirstScreen;
