import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from 'react-native';
import { ThemeContext } from '@Context/ThemeContext';
import { CommonStyles } from '@Themes/CommonStyles';
import DrawerHeader from '@Components/DrawerHeader';
import IntroScreen1 from '@Components/IntroScreen1';
import IntroScreen2 from '@Components/IntroScreen2';
import IntroScreen3 from '@Components/IntroScreen3';
import { useTranslation } from 'react-i18next';

const Tab = createMaterialBottomTabNavigator();
/* Refer https://reactnavigation.org/docs/material-bottom-tab-navigator  */

const HomeScreen = () => {
    const { Theme } = useContext(ThemeContext);
    const { t } = useTranslation('common');

    const styles = StyleSheet.create({
        barStyles: {
            backgroundColor: Theme.colors.header,
            padding: 5,
            borderTopWidth: 0.3,
            borderTopColor: 'silver',
        },
    });

    const InitialScreen = () => {
        return (
            <>
                <DrawerHeader />
                <IntroScreen1 />
            </>
        );
    };

    return (
        <Tab.Navigator
            initialRouteName="Feed"
            barStyle={styles.barStyles}
            shifting={false} // inactive tabs label won't show
            backBehavior="order"
        >
            <Tab.Screen
                name="Feed"
                component={InitialScreen}
                options={{
                    tabBarLabel: <Text>{t('TABS.home')}</Text>,
                    tabBarIcon: () => (
                        <Icon
                            name="home"
                            color="#3156c4"
                            size={CommonStyles.icons.tabIcons}
                        />
                    ),
                    // tabBarColor: 'crimson',
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={IntroScreen2}
                options={{
                    tabBarLabel: <Text>{t('TABS.updates')}</Text>,
                    tabBarIcon: () => (
                        <Icon
                            name="bell"
                            color="#32a84e"
                            size={CommonStyles.icons.tabIcons}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={IntroScreen3}
                options={{
                    tabBarLabel: <Text>{t('TABS.profile')}</Text>,
                    tabBarIcon: () => (
                        <Icon
                            name="account"
                            color="#c43140"
                            size={CommonStyles.icons.tabIcons}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default HomeScreen;
