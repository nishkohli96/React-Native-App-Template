import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

import HomeScreen from './HomeScreen';
import ChangeLang from './ChangeLang';
import DrawerLayout from '@Components/DrawerLayout';
import IntroScreen1 from '@Components/IntroScreen1';
import IntroScreen2 from '@Components/IntroScreen2';
import IntroScreen3 from '@Components/IntroScreen3';
import Login from '@Screens/Login';
import UserDetails from '@Screens/UserDetails';
import Settings from '@Screens/Settings';

/*
Refer https://reactnavigation.org/docs/drawer-navigator#checking-if-the-drawer-is-open
*/
const Drawer = createDrawerNavigator();

const NavDrawer = () => {
    const navigation = useNavigation();

    function NotificationsScreen() {
        return (
            <View style={styles.notifView}>
                <Button
                    onPress={() => navigation.goBack()}
                    title="Go back home"
                />
            </View>
        );
    }

    return (
        <Drawer.Navigator
            initialRouteName="HomeScreen"
            overlayColor="transparent"
            drawerContent={() => <DrawerLayout />}
        >
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            <Drawer.Screen
                name="Notifications"
                component={NotificationsScreen}
            />
            <Drawer.Screen name="IntroScreen1" component={IntroScreen1} />
            <Drawer.Screen name="IntroScreen2" component={IntroScreen2} />
            <Drawer.Screen name="IntroScreen3" component={IntroScreen3} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="UserDetails" component={UserDetails} />
            <Drawer.Screen name="Settings" component={Settings} />
            <Drawer.Screen name="ChangeLang" component={ChangeLang} />
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    notifView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default NavDrawer;
