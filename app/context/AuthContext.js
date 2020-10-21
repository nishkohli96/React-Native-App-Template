import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const AuthContext = React.createContext();
const dummyUser = {
    name: 'Guest',
    email: null,
    avatarURL: null,
};

const AppAuthContext = ({ children }) => {
    const [user, changeUser] = useState(null);

    // Firebase.initializeApp({
    //     apiKey: 'AIzaSyCkOk5zbedTjQDLZRHKOp3yTpdi-22oNxQ',
    //     // authDomain: '<your-auth-domain>',
    //     // databaseURL: '<your-database-url>',
    //     // projectId: '<your-cloud-firestore-project>',
    //     // storageBucket: '<your-storage-bucket>',
    //     // messagingSenderId: '<your-sender-id>',
    // });

    useEffect(() => {
        const getUser = async () => {
            const userCreds = await AsyncStorage.getItem('UserCreds');
            if (!userCreds) {
                AsyncStorage.setItem('UserCreds', JSON.stringify(dummyUser));
            }
            changeUser(JSON.parse(userCreds));
        };
        getUser();
    }, [user]);

    const setNewUser = (user) => {
        changeUser(user);
        AsyncStorage.setItem('UserCreds', JSON.stringify(user));
    };

    if (!user) {
        return <></>;
    }

    return (
        <AuthContext.Provider value={{ user: user, setUser: setNewUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AppAuthContext, dummyUser };
