import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';
import Header from '../components/Header';
import image from '../assets/background.png';
import { useNavigation } from '@react-navigation/native';
import { PublicSans_700Bold, PublicSans_400Regular, useFonts } from "@expo-google-fonts/public-sans";

const BackButton = () => {
    const navigation = useNavigation;
    const [fontsLoaded] = useFonts({
        PublicSans_700Bold,
        PublicSans_400Regular,
    });

    const styles = StyleSheet.create({
        buttonContainer: {
            flex: 1,
            justifyContent: 'flex-start',
            paddingHorizontal: '10',
            paddingVertical: '30',
            color: 'pink',
            borderRadius: 5,
        }
    });

    return(
        <Button title='<-- Back' color='pink'/>
    )
}

export default BackButton;
