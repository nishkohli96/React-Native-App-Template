import React, { useContext } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import packageJson from '../../package.json';

import { ThemedHeader, ThemedHeaderText } from '@styledComps/ThemedComps';
import { ThemeContext } from '@context/ThemeContext';
import { CommonStyles } from '@themes/CommonStyles';

const DrawerHeader = () => {
    const navigation = useNavigation();
    const { Theme, themeName } = useContext(ThemeContext);

    const styles = StyleSheet.create({
        container: {
            height: 50,
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 20,
            textAlign: 'center',
            flexDirection: 'row',
            // borderBottomColor: `${Theme.colors.border}`,
            // borderBottomWidth: 0.5,
        },
    });

    return (
        <ThemedHeader style={styles.container}>
            <StatusBar
                backgroundColor={Theme.colors.header}
                barStyle={
                    themeName === 'light' ? 'dark-content' : 'light-content'
                }
            />
            <Icon
                name="menu"
                size={CommonStyles.headerIcon}
                color={Theme.colors.text}
                onPress={() => navigation.openDrawer()}
            />
            <ThemedHeaderText>{packageJson.name}</ThemedHeaderText>
        </ThemedHeader>
    );
};

export default DrawerHeader;
