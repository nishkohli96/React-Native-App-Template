import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class IntroScreen3 extends Component {
    render() {
        return (
            <View style={styles.viewStyles}>
                <Text> This is screen 3 </Text>
                <Text> Let us now move to the Main App </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyles: {
        backgroundColor: 'beige',
        color: '#097f52',
        flex: 2,
        justifyContent: 'center',
    },
});
