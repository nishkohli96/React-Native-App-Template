import React, { useState, useContext } from 'react';
import { StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { Button } from 'react-native-paper';

import { useTranslation } from 'react-i18next';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-community/google-signin';
import { useNetInfo } from '@react-native-community/netinfo';
import { Snackbar } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { useNavigation } from '@react-navigation/native';
import Config from 'react-native-config'; // Get data from .env file

import {
    ThemedView,
    ThemedContainer,
    ThemedText,
} from '@StyledComps/ThemedComps';
import { CommonStyles } from '@Themes/CommonStyles';
import { AuthContext } from '@Context/AuthContext';

const Login = () => {
    const { t } = useTranslation('common');
    const netInfo = useNetInfo();
    const [visible, setVisible] = useState(false);
    const { setUser } = useContext(AuthContext);
    const navigation = useNavigation();
    // const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState(null);
    const [phoneno, setPhoneNo] = useState(null);
    const [otpVis, setOtpVis] = useState(false);

    React.useEffect(() => {
        GoogleSignin.configure({
            scopes: [
                'email',
                'profile',
                //'https://www.googleapis.com/auth/userinfo.profile',
                // 'https://www.googleapis.com/auth/drive.readonly',
            ],
            webClientId: `${Config.GOOGLE_WEB_CLIENT_ID}`,
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            // hostedDomain: '', // specifies a hosted domain restriction
            // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
            // accountName: '', // [Android] specifies an account name on the device that should be used
            // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
        });
        // return() => {
        // setCode(null);
        // setPhoneNo(null);
        // setOtpVis(false);
        // }
    }, []);

    const CheckConnection = () => {
        const conn = netInfo.isConnected;
        if (!conn) {
            setVisible(true);
            return false;
        }
        return true;
    };

    const GoogleSign = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const res = await GoogleSignin.signIn();

            const person = {
                name: res.user.name,
                email: res.user.email,
                avatarURL: res.user.photo,
            };
            setUser(person);
            navigation.navigate('HomeScreen');
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

    const FbSSO = () => {
        const res = CheckConnection();
        if (res) {
            SignInWithFB();
        } else {
            // setTimeout(() => setVisible(false), 3000);
        }
    };

    const GoogleSSO = () => {
        const res = CheckConnection();
        if (res) {
            GoogleSign();
        } else {
            // setTimeout(() => setVisible(false), 3000);
        }
    };

    const SignInWithFB = async () => {
        const result = await LoginManager.logInWithPermissions([
            'public_profile',
            'email',
        ]);

        if (result.isCancelled) {
            throw 'User cancelled the login process';
        }

        const data = await AccessToken.getCurrentAccessToken();
        if (!data) {
            throw 'Something went wrong obtaining access token';
        }

        const facebookCredential = auth.FacebookAuthProvider.credential(
            data.accessToken
        );
        auth().signInWithCredential(facebookCredential);
        auth().onAuthStateChanged((user) => {
            if (user != null) {
                const person = {
                    name: user.displayName,
                    email: user.email,
                    avatarURL: user.photoURL,
                };
                setUser(person);
                navigation.navigate('HomeScreen');
            }
        });
    };

    /*  Some issues with Phonenum, even after entering correct code, it still shows
        invalid code
        https://rnfirebase.io/auth/phone-auth
    */
    async function signInWithPhoneNumber() {
        setOtpVis(true);
        const confirmation = await auth().signInWithPhoneNumber(phoneno);
        // setConfirm(confirmation);
    }

    async function confirmCode() {
        try {
            await auth().confirmCode(code);
        } catch (error) {
            console.log('Invalid code.');
        } finally {
            setPhoneNo(null);
            setCode(null);
            setOtpVis(false);
        }
    }

    return (
        <ThemedContainer style={styles.container}>
            <ThemedView style={styles.otpView}>
                <TextInput
                    placeholder={t('SSO.enterPhone')}
                    value={phoneno}
                    onChangeText={(text) => setPhoneNo(text)}
                    style={styles.textInput}
                    editable={!otpVis}
                    autoCompleteType={'tel'}
                />

                <Button
                    style={styles.btn}
                    color="tomato"
                    mode="outlined"
                    onPress={() => signInWithPhoneNumber()}
                >
                    {t('SSO.getOTP')}
                </Button>

                <ThemedView>
                    <TextInput
                        placeholder={t('SSO.enterOTP')}
                        value={code}
                        onChangeText={(text) => setCode(text)}
                        style={styles.textInput}
                        editable={otpVis}
                    />

                    <Button
                        style={styles.btn}
                        mode="outlined"
                        color="tomato"
                        onPress={() => confirmCode()}
                    >
                        {t('SSO.submitOTP')}
                    </Button>
                </ThemedView>
            </ThemedView>

            <TouchableOpacity onPress={() => GoogleSSO()}>
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

            <TouchableOpacity onPress={() => FbSSO()}>
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

            <Snackbar
                visible={visible}
                duration={3000}
                onDismiss={() => setVisible(false)}
                style={styles.snackbar}
                action={{
                    label: 'Ok',
                    onPress: () => setVisible(false),
                }}
            >
                {t('SSO.connection')}
            </Snackbar>
        </ThemedContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    otpView: {
        marginBottom: 50,
    },
    btn: {
        borderColor: 'tomato',
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
        marginBottom: 20,
        borderRadius: 5,
        backgroundColor: '#ffffff',
    },
    ssoIcon: {
        width: CommonStyles.icons.ssoIcons,
        height: CommonStyles.icons.ssoIcons,
    },
    ssoLabel: {
        marginLeft: 30,
        fontSize: 20,
        fontFamily: 'Piazzolla-Medium',
        marginTop: 5,
        color: '#181a18',
    },
    snackbar: {
        bottom: 40,
        borderRadius: 10,
        opacity: 0.8,
    },
    textInput: {
        backgroundColor: '#ffffff',
        width: 300,
        height: 60,
        marginBottom: 20,
        marginTop: 20,
        borderWidth: 0.5,
        borderRadius: 5,
    },
});

export default Login;
