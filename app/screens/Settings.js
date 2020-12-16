import React from 'react';
import { ScrollView, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    ThemedView,
    ThemedText,
    ThemedContainer,
} from '@StyledComps/ThemedComps';
import PageHeader from '@Components/PageHeader';
import { CommonStyles } from '@Themes/CommonStyles';
import { ThemeContext } from '@Context/ThemeContext';

const Settings = () => {
    const { Theme, Dark, changeTheme } = React.useContext(ThemeContext);
    const navigation = useNavigation();
    const toggleTheme = () => changeTheme();
    const { t } = useTranslation('common');

    return (
        <ThemedContainer>
            <PageHeader title={t('DRAWER.settings')} />
            <ScrollView>
                <ThemedView style={styles.itemView}>
                    <ThemedView style={styles.iconView}>
                        <Icon
                            name="palette"
                            color="#d6bd8b"
                            size={CommonStyles.icons.tabIcons}
                        />
                    </ThemedView>
                    <ThemedView style={styles.itemText}>
                        <ThemedText style={styles.text}>
                            {t('SETTINGS.darkTheme')}
                        </ThemedText>
                    </ThemedView>
                    <ThemedView style={styles.itemOption}>
                        <Switch
                            trackColor={{ false: '#767577', true: '#7b9ab0' }}
                            thumbColor={Dark ? '#42a4eb' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleTheme}
                            value={Dark}
                        />
                    </ThemedView>
                </ThemedView>

                <TouchableOpacity
                    onPress={() => navigation.navigate('ChangeLang')}
                >
                    <ThemedView style={styles.itemView}>
                        <ThemedView style={styles.iconView}>
                            <Icon
                                name="alphabetical-variant"
                                color="#8c3146"
                                size={CommonStyles.icons.tabIcons}
                            />
                        </ThemedView>
                        <ThemedView style={styles.itemText}>
                            <ThemedText style={styles.text}>
                                {t('SETTINGS.language')}
                            </ThemedText>
                        </ThemedView>
                        <ThemedView style={styles.itemOption}>
                            <Icon
                                name="chevron-right"
                                color={Theme.colors.border}
                                size={CommonStyles.icons.tabIcons}
                            />
                        </ThemedView>
                    </ThemedView>
                </TouchableOpacity>
            </ScrollView>
        </ThemedContainer>
    );
};

const styles = StyleSheet.create({
    itemView: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 5,
        paddingRight: 5,
        borderBottomColor: 'silver',
        borderBottomWidth: 0.5,
    },
    iconView: {
        display: 'flex',
        flex: 0.2,
        alignItems: 'center',
    },
    itemText: {
        flex: 0.6,
        paddingLeft: 20,
    },
    itemOption: {
        display: 'flex',
        flex: 0.2,
        alignItems: 'center',
    },
    text: {
        fontSize: CommonStyles.texts.settingsText,
    },
});

export default Settings;
