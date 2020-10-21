import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { ThemedContainer, ThemedText, ThemedView } from '@styledComps/ThemedComps';
import { AuthContext } from '@context/AuthContext';
import PageHeader from '@components/PageHeader';

const UserDetails = () => {
    
    const { user } = useContext(AuthContext);

    return(
        <ThemedContainer>
            <PageHeader title='My Profile' />
            <ThemedText>{user.name}</ThemedText>
        </ThemedContainer>
    );
}

export default UserDetails;