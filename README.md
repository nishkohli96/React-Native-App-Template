# App-Template

Set your project environment using the following [link](https://reactnative.dev/docs/environment-setup)

## Overview

A React-Native App Template (for the time being, Android only) with support for NavDrawer, Tab Layout, Dark Mode and SSO using Facebook and Google.

### Development Steps

-   Access all your .env file vars using this [Package](https://github.com/luggit/react-native-config/). Don't forget to do the "Extra Step for Android" as mentioned in the docs.
-   Make sure the distributionUrl in gradle-wrapper.properties has version >= 6.3
-   Generate your app Icon using [MakeAppIcon](https://makeappicon.com/)
-   Read More about app icon setup on this [Link](https://aboutreact.com/react-native-change-app-icon/), also create a round icon on [AndroidAssetStudio](https://romannurik.github.io/AndroidAssetStudio/), rename as icon_launcher_round and paste in android icons folder
-   To use your own fonts, refer this [Link](https://medium.com/better-programming/using-custom-fonts-in-react-native-2019-289099609837)
-   To change App name, change app_name value in android/app/src/main/res/values/strings.xml file
-   Add [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver) for easier imports, make sure to name root folder of code, anything else besides 'src'.
-   Use `react-native link react-native-vector-icons` to link the Icons to your Android and iOS app, else they won't load.
-   Add [Firebase](https://rnfirebase.io/) to your App
-   Resolve MultiDex error using this [link](https://developer.android.com/studio/build/multidex)
-   [Initialize FB SDK](https://stackoverflow.com/questions/30213369/facebook-sdk-has-not-been-initialized-facebooksdk-sdkinitialize)
-   Run this Command to generate the Key Hash and Paste the same in Allowed fingerprints in Facebook Dev console

```
cd android && keytool -exportcert -alias androiddebugkey -keystore "D:\React\ReactNative\rnAppTemplate\android\app\debug.keystore" | "C:\openssl-0.9.8k_X64\bin\openssl" sha1 -binary | "C:\openssl-0.9.8k_X64\bin\openssl" base64
```
