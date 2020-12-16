import React from 'react';
import { StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import {
    ThemedView,
    ThemedText,
    ThemedContainer,
} from '@StyledComps/ThemedComps';
import PageHeader from '@Components/PageHeader';
import { Languages, changeLang } from '@I18Next/i18config';

const ChangeLang = () => {
    const { i18n, t } = useTranslation('common');

    const LangItem = ({ langobj }) => {
        return (
            <ThemedView style={styles.langItemRow}>
                <ThemedView style={styles.langItemText}>
                    <ThemedText>{langobj.fullName}</ThemedText>
                </ThemedView>
                <ThemedView style={styles.langItemRadio}>
                    <RadioButton
                        value={langobj.initials}
                        status={
                            langobj.initials === i18n.language
                                ? 'checked'
                                : 'unchecked'
                        }
                        onPress={() => setLang(langobj)}
                        uncheckedColor="silver"
                        color="#006699"
                    />
                </ThemedView>
            </ThemedView>
        );
    };

    const setLang = (langobj) => {
        i18n.changeLanguage(langobj.initials);
        changeLang(langobj);
    };

    return (
        <ThemedContainer>
            <PageHeader title={t('SETTINGS.changeLang')} />
            {Languages.map((lang) => (
                <LangItem key={lang.initials} langobj={lang} />
            ))}
        </ThemedContainer>
    );
};

const styles = StyleSheet.create({
    langItemRow: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 5,
        borderBottomWidth: 0.3,
        borderBottomColor: 'silver',
    },
    langItemText: {
        display: 'flex',
        flex: 0.7,
        paddingLeft: 30,
        paddingTop: 8,
    },
    langItemRadio: {
        display: 'flex',
        flex: 0.7,
        paddingRight: 20,
        alignItems: 'flex-end',
    },
});

export default ChangeLang;
