import React from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-community/async-storage';

const IntroScreen = () => {
    const navigation = useNavigation(); /* Navigation Hook */

    const gotoMainPage = async () => {
        await AsyncStorage.setItem('firstTime', 'false');
        navigation.navigate('NavDrawer');
    };

    const SkipBtn = () => {
        return <Text style={styles.skipBtn}>Skip</Text>;
    };

    const NextBtn = () => {
        return <Text style={styles.doneBtn}>Next</Text>;
    };

    const DoneBtn = () => {
        return (
            <Text style={styles.doneBtn} onPress={() => gotoMainPage()}>
                Done
            </Text>
        );
    };

    const PageImage = ({ color, dark }) => {
        return (
            <Image
                source={require('../assets/images/hi.png')}
                style={styles.image}
            />
        );
    };

    /* Refer https://www.npmjs.com/package/react-native-onboarding-swiper  */

    return (
        <Onboarding
            onSkip={() => gotoMainPage()}
            onDone={() => gotoMainPage()}
            nextLabel={<NextBtn />}
            skipLabel={<SkipBtn />}
            DoneButtonComponent={DoneBtn}
            pages={[
                {
                    backgroundColor: 'skyblue',
                    image: <PageImage />,
                    title: 'Welcome to myApp',
                    subtitle: "I'm sure you would love it!!",
                },
                {
                    backgroundColor: 'red',
                    image: <PageImage />,
                    title: 'Easy to Customize',
                    subtitle: 'Everything properly documented',
                },
                {
                    backgroundColor: 'yellow',
                    image: <PageImage />,
                    title: 'Enjoy....',
                    subtitle: 'Feel Free to Edit the Code and Experiment',
                },
            ]}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 25,
        fontFamily: 'Piazzolla-Bold',
        margin: 10,
    },
    subHeading: {
        fontSize: 15,
        fontFamily: 'Piazzolla-Light',
        margin: 5,
    },
    doneBtn: {
        marginRight: 20,
        fontSize: 20,
        fontFamily: 'Piazzolla-Bold',
    },
    skipBtn: {
        marginLeft: 20,
        fontSize: 20,
        fontFamily: 'Piazzolla-Bold',
    },
    image: {
        width: 250,
        height: 250,
    },
});

export default IntroScreen;
