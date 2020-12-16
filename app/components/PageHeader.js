import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { ThemedHeader, ThemedHeaderText } from '@StyledComps/ThemedComps';
import { ThemeContext } from '@Context/ThemeContext';
import { CommonStyles } from '@Themes/CommonStyles';

const DrawerHeader = ({ title }) => {
    const navigation = useNavigation();
    const { Theme } = useContext(ThemeContext);

    return (
        <ThemedHeader style={styles.container}>
            <Icon
                name="arrow-back"
                size={CommonStyles.headerComp.headerIcon}
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
        height: CommonStyles.headerComp.height,
        paddingTop: CommonStyles.headerComp.paddingTop,
        paddingBottom: CommonStyles.headerComp.paddingBottom,
        paddingLeft: CommonStyles.headerComp.paddingLeft,
        textAlign: 'center',
        flexDirection: 'row',
    },
    headerText: {
        marginTop: 4,
    },
});

export default DrawerHeader;
