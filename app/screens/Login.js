import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import {
    ThemedView,
    ThemedContainer,
    ThemedText,
} from '@styledComps/ThemedComps';
import { CommonStyles } from '@themes/CommonStyles';
import { GoogleSignOut, FacebookSSO } from '@utils/SSO';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-community/google-signin';

const Login = () => {
    const { t } = useTranslation('common');

    const GoogleSign = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const res = await GoogleSignin.signIn();
            console.log('token ', res);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                console.log('canceled');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('in progress');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('no play services');
            } else {
                console.log('err ', error);
            }
        }
    };

    React.useEffect(() => {
        GoogleSignin.configure({
            scopes: [
                'email',
                'profile',
                //'https://www.googleapis.com/auth/userinfo.profile',
                // 'https://www.googleapis.com/auth/drive.readonly',
            ],
            webClientId:
                '345766432797-emvv88t6hnf8cgn00sdgoc0u96ds6a2d.apps.googleusercontent.com',
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            // hostedDomain: '', // specifies a hosted domain restriction
            // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
            forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
            // accountName: '', // [Android] specifies an account name on the device that should be used
            // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
        });
    }, []);

    return (
        <ThemedContainer style={styles.container}>
            <TouchableOpacity onPress={() => GoogleSign()}>
                <ThemedView style={styles.ssoBtn}>
                    <Image
                        source={require('../assets/images/icons8-google.png')}
                        style={styles.ssoIcon}
                    />
                    <ThemedText style={styles.ssoLabel}>
                        {t('SSO.ssoGoogle')}
                    </ThemedText>
                </ThemedView>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => GoogleSignOut()}>
                <ThemedView style={styles.ssoBtn}>
                    <Image
                        source={require('../assets/images/icons8-google.png')}
                        style={styles.ssoIcon}
                    />
                    <ThemedText style={styles.ssoLabel}>Sign out</ThemedText>
                </ThemedView>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => FacebookSSO()}>
                <ThemedView style={styles.ssoBtn}>
                    <Image
                        source={require('../assets/images/icons8-fb.png')}
                        style={styles.ssoIcon}
                    />
                    <ThemedText style={styles.ssoLabel}>
                        {t('SSO.ssoFacebook')}
                    </ThemedText>
                </ThemedView>
            </TouchableOpacity>
        </ThemedContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    ssoBtn: {
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 20,
        width: 300,
        borderWidth: 0.5,
        paddingRight: 20,
        paddingTop: 15,
        paddingBottom: 15,
        marginBottom: 15,
        borderRadius: 5,
        backgroundColor: '#ffffff',
    },
    ssoIcon: {
        width: CommonStyles.ssoIcons,
        height: CommonStyles.ssoIcons,
    },
    ssoLabel: {
        marginLeft: 30,
        fontSize: 20,
        fontFamily: 'Piazzolla-Medium',
        marginTop: 5,
        color: '#181a18',
    },
});

export default Login;
