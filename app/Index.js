import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import IntroScreen from '@Screens/IntroScreen';
import NavDrawer from '@Screens/NavDrawer';
import { AppThemeContext } from '@Context/ThemeContext';
import { AppAuthContext } from '@Context/AuthContext';

const Stack = createStackNavigator();

const Index = () => {
    const [firstScreen, setFirstScreen] = useState(null);

    AsyncStorage.getItem('firstTime').then((item) => {
        console.log('itm ', item);
        if (!item) {
            console.log('in this loop');
            setFirstScreen('IntroScreen');
        } else {
            setFirstScreen('NavDrawer');
        }
    });

    if (!firstScreen) {
        /* Feel free to design a splash Screen for this part */
        return (
            <View>
                <Text>App loading</Text>
            </View>
        );
    }
    return (
        <NavigationContainer>
            <AppAuthContext>
                <AppThemeContext>
                    <Stack.Navigator initialRouteName={firstScreen}>
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
                </AppThemeContext>
            </AppAuthContext>
        </NavigationContainer>
    );
};

export default Index;
