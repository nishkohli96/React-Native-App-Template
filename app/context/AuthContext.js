import React, { useEffect } from 'react';
import * as Firebase from 'firebase';

const AuthContext = React.createContext();

const AppAuthContext = ({ children }) => {
    useEffect(() => {
        Firebase.initializeApp({
            apiKey: 'AIzaSyCkOk5zbedTjQDLZRHKOp3yTpdi-22oNxQ',
            authDomain: '<your-auth-domain>',
            databaseURL: '<your-database-url>',
            projectId: '<your-cloud-firestore-project>',
            storageBucket: '<your-storage-bucket>',
            messagingSenderId: '<your-sender-id>',
        });
    }, []);

    return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export { AuthContext, AppAuthContext };
