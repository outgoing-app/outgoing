import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import image from '../assets/background.png';
import { PublicSans_700Bold, PublicSans_400Regular, useFonts } from "@expo-google-fonts/public-sans";
import Ionicons from 'react-native-vector-icons/Ionicons';

const ConfirmedEventsScreen = ({ route }) => {
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
        outerContainer: {
            backgroundColor: '#fff',
            borderRadius: 12,
            borderWidth: 0.5,
            borderColor: '#000',
            padding: 10,
            marginTop: 15,
            marginLeft: 15,
            marginRight: 15,
            borderColor: '#FF7880',
            borderWidth: 2,
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 15
        },
        subText: {
            fontSize: 16,
            textAlign: 'left',
            color: '#FC6E77',
            fontWeight: 'bold',
            marginBottom: 10
        },
        detailsContainer: {
            flexDirection: 'row',
            gap: 20,
        },
        detailsLabel: {
            color: '#8B8B8B',
            width: 40,
            marginVertical: 5,
        },
        detailsText: {
            color: 'black',
            marginVertical: 5,
        },
        detailsText2: {
            color: '#6C7072',
            marginVertical: 5,
            fontStyle: 'italic'
        },
        remindButton: {
            borderRadius: 16,
            color: '#ffffff',
            backgroundColor: '#FF7880',
            marginVertical: 5,
            width: 60,
            marginLeft: 'auto'
        },
        remindText: {
            fontSize: 12,
            letterSpacing: 0.25,
            padding: 5,
            color: '#ffffff',
            textAlign: 'center'
        },
        statusText: {
            color: '#6C7072',
            marginVertical: 5,
            fontStyle: 'italic',
            marginLeft: 'auto'
        },
        statusCircle: {
            marginRight: 'auto',
            marginTop: 4
        },
        iconContainer: {
            marginVertical: 3,
            width: 25,
            height: 25,
            borderRadius: 35,
            backgroundColor: '#FF7880',
            justifyContent: 'center',
        },
        iconText: {
            color: 'white',
            fontSize: 10,
            fontWeight: 'bold',
            textAlign: 'center',
        },
    });

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.contentContainer}>
                    {route.confirmedEvents.map(event => {
                        return (
                            <View style={styles.outerContainer}>
                                <View style={styles.detailsContainer}>
                                    <Text style={styles.subText}>{event.title}</Text>
                                    <View style={styles.container}>
                                        <Text style={styles.statusText}>{event.status}</Text>
                                    </View>
                                </View>
                                <View style={styles.detailsContainer}>
                                    <Text style={styles.detailsLabel}>Time</Text>
                                    <Text style={styles.detailsText}>{event.time}</Text>
                                </View>
                                <View style={styles.detailsContainer}>
                                    <View style={styles.detailsLabel}>
                                        <Ionicons name='location-outline' size={20} color='#FF7880' />
                                    </View>
                                    <Text style={styles.detailsText}>
                                        {event.location}
                                    </Text>
                                </View>
                                <View style={[styles.detailsContainer, { margin: 0 }]}>
                                    {event.confirmedUsers.slice(0, 4).map((initials) => {
                                        return (
                                            <View style={styles.iconContainer}>
                                                <Text style={styles.iconText}>{initials}</Text>
                                            </View>
                                        )
                                    })}
                                    {event.confirmedUsers.length > 4 && (
                                        <View style={styles.iconContainer}>
                                            <Text style={styles.iconText}>+{event.confirmedUsers.length - 4}</Text>
                                        </View>
                                    )}
                                </View>
                            </View>
                        )
                    })}
                </View>
            </ImageBackground>
        </View>
    );
};

export default ConfirmedEventsScreen;