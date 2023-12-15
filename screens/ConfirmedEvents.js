import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Pressable, ScrollView } from 'react-native';
import image from '../assets/background.png';
import { PublicSans_700Bold, PublicSans_400Regular, useFonts } from "@expo-google-fonts/public-sans";
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

const ConfirmedEventsScreen = ({ route, onDeleteEvent, getConfirmedEvents }) => {
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
            marginLeft: 3,
            marginHorizontal: -15,
            width: 25,
            height: 25,
            borderRadius: 35,
            backgroundColor: '#FF7880',
            justifyContent: 'center',
            marginBottom: 10,
        },
        iconText: {
            color: 'white',
            fontSize: 10,
            fontWeight: 'bold',
            textAlign: 'center',
        },
        cancelButton: {
            borderRadius: 14,
            marginBottom: 15,
            paddingHorizontal: 20,
            paddingVertical: 10,
            width: 90,
            alignItems: 'center',
        },
        cancelText: {
            fontSize: 14,
            fontWeight: 'bold',
            letterSpacing: 0.25,

        },
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginTop: -35,
            marginBottom: -10,
        },

    });

    const handleCancelEvent = async (eventId) => {
        if (onDeleteEvent) {
            try {
                await onDeleteEvent(eventId);
                console.log('Event deleted successfully!');
                if (getConfirmedEvents) {
                    getConfirmedEvents();
                }
            } catch (error) {
                console.error('Error deleting event:', error);
            }
        }
    };


    const formatEventTime = (startTimeString, endTimeString) => {
        console.log("Start time:", startTimeString);
        console.log("End time:", endTimeString);
        const formatString = 'MM/DD/YY hh:mm a';

        const startTime = moment(startTimeString, 'YYYY-MM-DDTHH:mm:ss.SSSZ').format(formatString);
        const endTime = moment(endTimeString, 'YYYY-MM-DDTHH:HH:mm:ss.SSSZ').format(formatString);

        return `${startTime} - ${endTime}`;

    };


    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.contentContainer}>
                        {route.confirmedEvents.map(event => (
                            <View style={styles.outerContainer} key={event._id}>
                                <View style={styles.detailsContainer}>
                                    <Text style={styles.subText}>{event.title}</Text>
                                    <View style={styles.container}>
                                        <Text style={styles.statusText}>{event.status}</Text>
                                    </View>
                                </View>
                                <View style={styles.detailsContainer}>
                                    <Text style={styles.detailsLabel}>Time</Text>
                                    <Text style={styles.detailsText}>
                                        {formatEventTime(event.start, event.end)}
                                    </Text>
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
                                    {event.confirmedUsers.slice(0, 4).map((user) => (
                                        <View style={styles.iconContainer} key={user.id}>
                                            <Text style={styles.iconText}>{user.initials}</Text>
                                        </View>
                                    ))}
                                    {event.confirmedUsers.length > 4 && (
                                        <View style={styles.iconContainer}>
                                            <Text style={styles.iconText}>+{event.confirmedUsers.length - 4}</Text>
                                        </View>
                                    )}
                                </View>
                                <View style={styles.buttonContainer}>
                                    <Pressable
                                        style={[styles.cancelButton, { backgroundColor: '#FAE0E0' }]}
                                        onPress={() => handleCancelEvent(event._id)}
                                    >
                                        <Text style={{ ...styles.cancelText, color: '#FF7880' }}>Cancel</Text>
                                    </Pressable>
                                </View>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
};



export default ConfirmedEventsScreen;