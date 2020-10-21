import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';

import { ThemedContainer, ThemedText, ThemedView, ThemedSubContainer } from '@styledComps/ThemedComps';
import { AuthContext } from '@context/AuthContext';
import PageHeader from '@components/PageHeader';

const UserDetails = () => {
    
    const { user } = useContext(AuthContext);

    return(
        <ThemedContainer>
            <PageHeader title='My Profile' />
            <ThemedSubContainer>
                <ThemedText>{user.name}</ThemedText>
            </ThemedSubContainer>
        </ThemedContainer>
    );
}

export default UserDetails;