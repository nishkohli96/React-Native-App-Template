import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import packageJson from '../../package.json';
import { ThemedText, ThemedContainer } from '@styledComps/ThemedComps';
import { ThemeContext } from '@context/ThemeContext';
import { CommonStyles } from '@themes/CommonStyles';

const DrawerLayout = () => {
    const navigation = useNavigation();
    const { t } = useTranslation('common');
    const { Theme } = useContext(ThemeContext);

    return (
        <ThemedContainer style={styles.container}>
            <DrawerContentScrollView>
                <View style={styles.drawerContent}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                    >
                        <View style={styles.userInfoSection}>
                            <View
                                style={{ flexDirection: 'row', marginTop: 15 }}
                            >
                                <Avatar.Image
                                    source={{
                                        uri:
                                            'https://api.adorable.io/avatars/50/abott@adorable.png',
                                    }}
                                    size={CommonStyles.avatarIcon}
                                />
                                <View
                                    style={{
                                        marginLeft: 15,
                                        flexDirection: 'column',
                                    }}
                                >
                                    <ThemedText style={styles.title}>
                                        {t('USER.hiuser', {
                                            userName: 'Guest',
                                        })}
                                    </ThemedText>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={() => (
                                <Icon
                                    name="md-home-outline"
                                    color={Theme.colors.text}
                                    size={CommonStyles.drawerIcons}
                                />
                            )}
                            label={() => (
                                <ThemedText>{t('DRAWER.home')}</ThemedText>
                            )}
                            onPress={() => {
                                navigation.navigate('HomeScreen');
                            }}
                        />
                        <DrawerItem
                            icon={() => (
                                <Icon
                                    name="person-outline"
                                    color={Theme.colors.text}
                                    size={CommonStyles.drawerIcons}
                                />
                            )}
                            label={() => (
                                <ThemedText>{t('DRAWER.profile')}</ThemedText>
                            )}
                            onPress={() => {
                                navigation.navigate('Notifications');
                            }}
                        />
                        <DrawerItem
                            icon={() => (
                                <Icon
                                    name="notifications-outline"
                                    color={Theme.colors.text}
                                    size={CommonStyles.drawerIcons}
                                />
                            )}
                            label={() => (
                                <ThemedText>
                                    {t('DRAWER.notifications')}
                                </ThemedText>
                            )}
                            onPress={() => {
                                navigation.navigate('IntroScreen3');
                            }}
                        />
                        <DrawerItem
                            icon={() => (
                                <Icon
                                    name="settings-outline"
                                    color={Theme.colors.text}
                                    size={CommonStyles.drawerIcons}
                                />
                            )}
                            label={() => (
                                <ThemedText>{t('DRAWER.settings')}</ThemedText>
                            )}
                            onPress={() => {
                                navigation.navigate('Settings');
                            }}
                        />
                        <DrawerItem
                            icon={() => (
                                <Icon
                                    name="chatbox-ellipses-outline"
                                    color={Theme.colors.text}
                                    size={CommonStyles.drawerIcons}
                                />
                            )}
                            label={() => (
                                <ThemedText>{t('DRAWER.help')}</ThemedText>
                            )}
                            onPress={() => {
                                navigation.navigate('IntroScreen2');
                            }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    label={() => (
                        <ThemedText>
                            {t('APP.version', {
                                appVersion: packageJson.version,
                            })}
                        </ThemedText>
                    )}
                />
            </Drawer.Section>
        </ThemedContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRightWidth: 0.2,
        borderColor: 'silver',
    },
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 25,
        marginTop: 8,
        fontWeight: '100',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: 'silver',
        borderTopWidth: 0.5,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});

export default DrawerLayout;
