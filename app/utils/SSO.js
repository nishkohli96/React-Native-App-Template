import auth from '@react-native-firebase/auth';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-community/google-signin';

// GoogleSignin.configure({
//     scopes: [
//         'email','profile'
//         //'https://www.googleapis.com/auth/userinfo.profile',
//         // 'https://www.googleapis.com/auth/drive.readonly',
//     ],
//     webClientId:
//         '345766432797-emvv88t6hnf8cgn00sdgoc0u96ds6a2d.apps.googleusercontent.com',
//     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//     // hostedDomain: '', // specifies a hosted domain restriction
//     // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
//     forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
//     // accountName: '', // [Android] specifies an account name on the device that should be used
//     // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
// });
// console.log(GoogleSignIn)

export const GoogleSignOut = async () => {
    try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        console.log('in sign out');
        //this.setState({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
        console.error(error);
    }
};
