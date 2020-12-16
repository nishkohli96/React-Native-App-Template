import React, { useContext } from 'react';
import { StyleSheet, Button } from 'react-native';
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { useTranslation } from 'react-i18next';
import { GoogleSignin } from '@react-native-community/google-signin';
import {
    ThemedContainer,
    ThemedSubContainer,
    ThemedText,
    ThemedView,
} from '@StyledComps/ThemedComps';
import { AuthContext, dummyUser } from '@Context/AuthContext';
import PageHeader from '@Components/PageHeader';
import { CommonStyles } from '@Themes/CommonStyles';

const UserDetails = () => {
    const { user, setUser } = useContext(AuthContext);
    const navigation = useNavigation();
    const { t } = useTranslation('common');

    const SignOut = async () => {
        /* Different code for Google Sign out & Fb Sign Out. If signed in with Google,
            execute try block, else execute catch block */
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
        } catch (error) {
            try {
                auth().signOut();
            } catch (error) {
                console.log('no user signed in');
            }
        }
        setUser(dummyUser);
        navigation.navigate('HomeScreen');
    };

    return (
        <ThemedContainer>
            <PageHeader title="My Profile" />
            <ThemedSubContainer>
                <ThemedView style={styles.avatarView}>
                    <Avatar.Image
                        source={{ uri: user.avatarURL }}
                        size={CommonStyles.icons.avatarIconLg}
                    />
                    <ThemedText style={styles.lgText}>{user.name}</ThemedText>

                    <ThemedView style={styles.btnView}>
                        <Button
                            title={t('SSO.signOut')}
                            color="tomato"
                            onPress={() => SignOut()}
                        />
                    </ThemedView>
                </ThemedView>
            </ThemedSubContainer>
        </ThemedContainer>
    );
};

const styles = StyleSheet.create({
    avatarView: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: 50,
    },
    lgText: {
        fontSize: CommonStyles.texts.profileText,
        marginTop: 30,
        marginBottom: 30,
    },
    btnView: {
        width: 200,
    },
});

export default UserDetails;
