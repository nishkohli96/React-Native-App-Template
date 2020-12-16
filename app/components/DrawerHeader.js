import React, { useContext } from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import packageJson from '../../package.json';

import { ThemedHeader, ThemedHeaderText } from '@StyledComps/ThemedComps';
import { ThemeContext } from '@Context/ThemeContext';
import { CommonStyles } from '@Themes/CommonStyles';

const DrawerHeader = () => {
    const navigation = useNavigation();
    const { Theme, themeName } = useContext(ThemeContext);

    const styles = StyleSheet.create({
        container: {
            height: CommonStyles.headerComp.height,
            paddingTop: CommonStyles.headerComp.paddingTop,
            paddingBottom: CommonStyles.headerComp.paddingBottom,
            paddingLeft: CommonStyles.headerComp.paddingLeft,
            textAlign: 'center',
            flexDirection: 'row',
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
                size={CommonStyles.headerComp.headerIcon}
                color={Theme.colors.text}
                onPress={() => navigation.openDrawer()}
            />
            <ThemedHeaderText>{packageJson.name}</ThemedHeaderText>
        </ThemedHeader>
    );
};

export default DrawerHeader;
