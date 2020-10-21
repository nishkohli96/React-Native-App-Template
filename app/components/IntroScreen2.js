import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class IntroScreen2 extends Component {
    render() {
        return (
            <View style={styles.viewStyles}>
                <Text> This is screen 2 </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewStyles: {
        backgroundColor: 'lightblue',
        color: 'darkblue',
        flex: 2,
        justifyContent: 'center',
    },
});
