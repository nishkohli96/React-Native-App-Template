import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import IntroScreen from '@screens/IntroScreen';
import NavDrawer from '@screens/NavDrawer';
import { AppThemeContext } from '@context/ThemeContext';

const Stack = createStackNavigator();

const Index = () => {
    // const [firstScreen, setFirstScreen] = useState('IntroScreen');

    // useEffect(() => {
    //     const checkFirstUse = async() => {
    //         let fs =  await AsyncStorage.getItem('firstTime');
    //         if(fs === null){
    //             await AsyncStorage.setItem('firstTime','true');
    //         } else {
    //             setFirstScreen('NavDrawer');
    //         }
    //     }
    //     checkFirstUse().then(() => console.log('fs ',firstScreen));
    //     return () => console.log('cmp unmount')
    // },[]);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'IntroScreen'}>
                <Stack.Screen
                    name="IntroScreen"
                    component={IntroScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="NavDrawer"
                    component={NavDrawer}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Index;
