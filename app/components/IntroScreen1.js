import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { ThemedText, ThemedContainer } from '@styledComps/ThemedComps';

export default class IntroScreen1 extends Component {
    render() {
        return (
            <ThemedContainer>
                <ThemedText> Hiii </ThemedText>
            </ThemedContainer>
        );
    }
}

const styles = StyleSheet.create({});
