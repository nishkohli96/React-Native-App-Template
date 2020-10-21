import React, { useContext } from 'react';
import { StyleSheet, Button } from 'react-native';
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import {
    ThemedContainer,
    ThemedSubContainer,
    ThemedText,
    ThemedView,
} from '@styledComps/ThemedComps';
import { AuthContext, dummyUser } from '@context/AuthContext';
import PageHeader from '@components/PageHeader';
import { CommonStyles } from '@themes/CommonStyles';

const UserDetails = () => {
    const { user, setUser } = useContext(AuthContext);
    const navigation = useNavigation();

    const SignOut = () => {
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
                            title="SignOut"
                            style={styles.btn}
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
