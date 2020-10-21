import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';

import IntroScreen from '@screens/IntroScreen';
import NavDrawer from '@screens/NavDrawer';
import { AppThemeContext } from '@context/ThemeContext';
import { View, Text } from 'react-native';

const Stack = createStackNavigator();

const Index = () => {
    const [firstScreen, setFirstScreen] = useState(null);

    AsyncStorage.getItem('firstTime').then((item) => {
        if (item) {
            setFirstScreen('NavDrawer');
        } else {
            setFirstScreen('IntroScreen');
        }
    });

    if (!firstScreen) {
        return (
            <View>
                <Text>App loading</Text>
            </View>
        );
    }
    return (
        <NavigationContainer>
            <AppThemeContext>
            <Stack.Navigator initialRouteName={firstScreen}>
                <Stack.Screen
                    name='IntroScreen'
                    component={IntroScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='NavDrawer'
                    component={NavDrawer}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
            </AppThemeContext>
        </NavigationContainer>
    );
};

export default Index;
