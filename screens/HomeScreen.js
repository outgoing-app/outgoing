import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import image from '../assets/screen-background.png';
import { useFonts, PublicSans_700Bold, PublicSans_400Regular } from "@expo-google-fonts/public-sans";
import CalendarComponent from '../components/CalendarComponent'; 

const HomeScreen = () => {
    const [fontsLoaded] = useFonts({
        PublicSans_700Bold,
        PublicSans_400Regular,
    });

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        image: {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center",
        },
        header: {
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
            margin: 10,
        },
        mainContent: {
            flex: 1,
            justifyContent: 'center', 
            alignItems: 'center', 
        },
    });

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.mainContent}>
                    <CalendarComponent />
                </View>
            </ImageBackground>
        </View>
    );
};

export default HomeScreen;
