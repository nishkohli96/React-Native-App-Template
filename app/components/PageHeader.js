import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { ThemedHeader, ThemedHeaderText } from '@styledComps/ThemedComps';
import { ThemeContext } from '@context/ThemeContext';
import { CommonStyles } from '@themes/CommonStyles';

const DrawerHeader = ({ title }) => {
    const navigation = useNavigation();
    const { Theme } = useContext(ThemeContext);

    return (
        <ThemedHeader style={styles.container}>
            <Icon
                name="arrow-back"
                size={CommonStyles.headerIcon}
                color={Theme.colors.text}
                onPress={() => navigation.goBack()}
            />
            <ThemedHeaderText style={styles.headerText}>
                {title}
            </ThemedHeaderText>
        </ThemedHeader>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        textAlign: 'center',
        flexDirection: 'row',
    },
    headerText: {
        marginTop: 4,
    },
});

export default DrawerHeader;
