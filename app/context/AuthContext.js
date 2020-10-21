import React, { useEffect, useState } from 'react';
import * as Firebase from 'firebase';

const AuthContext = React.createContext();

const AppAuthContext = ({ children }) => {
    
    const [user, changeUser] = useState(null);

    useEffect(() => {
        Firebase.initializeApp({
            apiKey: 'AIzaSyCkOk5zbedTjQDLZRHKOp3yTpdi-22oNxQ',
            // authDomain: '<your-auth-domain>',
            // databaseURL: '<your-database-url>',
            // projectId: '<your-cloud-firestore-project>',
            // storageBucket: '<your-storage-bucket>',
            // messagingSenderId: '<your-sender-id>',
        });
    }, []);

    const setNewUser = (user) => {
        console.log('in chanhe 8 ',user);
        changeUser(user);
    }

    return (
        <AuthContext.Provider value={{ user: user, setUser: setNewUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AppAuthContext };
