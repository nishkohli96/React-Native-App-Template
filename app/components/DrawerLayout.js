import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import packageJson from '../../package.json';
import { ThemedText, ThemedContainer } from '@StyledComps/ThemedComps';
import { ThemeContext } from '@Context/ThemeContext';
import { AuthContext } from '@Context/AuthContext';
import { CommonStyles } from '@Themes/CommonStyles';

const DrawerLayout = () => {
    const navigation = useNavigation();
    const { t } = useTranslation('common');
    const { Theme } = useContext(ThemeContext);
    const { user } = useContext(AuthContext);
    const uname = user.name ? user.name.split(' ')[0] : 'Guest';
    const avatarURL = user.avatarURL;

    const userPage = () => {
        if (!user.email) {
            navigation.navigate('Login');
        } else {
            navigation.navigate('UserDetails');
        }
    };

    return (
        <ThemedContainer style={styles.container}>
            <DrawerContentScrollView>
                <View style={styles.drawerContent}>
                    <TouchableOpacity onPress={() => userPage()}>
                        <View style={styles.userInfoSection}>
                            <View style={styles.avatarView}>
                                <Avatar.Image
                                    source={{ uri: avatarURL }}
                                    size={CommonStyles.icons.avatarIcon}
                                />
                                <View style={styles.userTextView}>
                                    <ThemedText style={styles.title}>
                                        {t('USER.hiuser', {
                                            userName: uname,
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
                                    size={CommonStyles.icons.drawerIcons}
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
                                    size={CommonStyles.icons.drawerIcons}
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
                                    size={CommonStyles.icons.drawerIcons}
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
                                    size={CommonStyles.icons.drawerIcons}
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
                                    size={CommonStyles.icons.drawerIcons}
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
    avatarView: {
        flexDirection: 'row',
        marginTop: 15,
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
    userTextView: {
        marginLeft: 15,
        flexDirection: 'column',
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
