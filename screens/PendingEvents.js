import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, useWindowDimensions } from 'react-native';
import Header from '../components/Header';
import image from '../assets/background.png';
import { useNavigation } from '@react-navigation/native';
import { PublicSans_700Bold, PublicSans_400Regular, useFonts } from "@expo-google-fonts/public-sans";
import SingleEvent from '../components/SingleEvent'


const PendingEventsScreen = ({ route }) => {
    console.log(route.pendingEvents)
    const navigation = useNavigation();

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
            justifyContent: 'start',
        },
        text: {
            color: 'black',
            fontFamily: 'Public Sans',
            fontSize: 24,
            lineHeight: 84,
            fontWeight: 'normal',
            textAlign: 'center',
        },
        event: {
            backgroundColor: '#fff',
            borderRadius: 4,
            borderWidth: 0.5,
            borderColor: '#000',
            padding: 10,
            marginTop: 10,
            marginLeft: 15,
            marginRight: 15,
            borderColor: '#FF7880',
            borderWidth: 2,
        }
    });

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.contentContainer}>
                    {route.pendingEvents.map(event => {
                        return (
                            <View key={event.id} style={styles.event}>
                                <Text>{event.title}</Text>
                                <Text>{event.location}</Text>
                            </View>
                        )
                    })}
                </View>
            </ImageBackground>
        </View>
    );
};

export default PendingEventsScreen;