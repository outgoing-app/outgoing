import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, ImageBackground, Pressable, TouchableOpacity, ScrollView} from 'react-native';
import image from '../assets/background.png';
import { PublicSans_700Bold, PublicSans_400Regular, useFonts } from "@expo-google-fonts/public-sans";
import Ionicons from 'react-native-vector-icons/Ionicons';
import PendingEvent from './PendingEvent'
import { useNavigation } from '@react-navigation/native';

const PendingEventsScreen = ({ route }) => {
    const [showSingleEvent, setShowSingleEvent] = useState(false);
    const [eventId, setEventId] = useState(null);
    const [eventType, setEventType] = useState(null)
    const navigation = useNavigation();
    useEffect(() => {
        setShowSingleEvent(false)
        setEventId(null)
    }, [])

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
        detailsTextContainer: {
            flex: 1,
            marginRight: 20,
        },
        remindButtonContainer: {
            marginRight: 190,
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
        }
    });

    const handleSingleEvent = (event) => {
        setShowSingleEvent(!showSingleEvent);
        setEventId(event.id);
        if (event.status === 'Tentatively' && (event.pendingUsers.length > 1 || !event.pendingUsers.includes('You'))) {
            setEventType('red');
        } else if (event.status !== 'Tentatively') {
            setEventType('green');
        } else {
            setEventType('yellow');
        }
        navigation.navigate('PendingEvent', { event });
    };



    if (showSingleEvent && eventType == 'yellow') {
        const events = route.pendingEvents.filter(item => {
            if (item.id == eventId) {
                return item
            }
        })
        return (
            <View style={styles.container}>
                <ImageBackground source={image} style={styles.image}>
                    <PendingEvent event={events[0]} />
                </ImageBackground>
            </View>
        )
    }
    const formatEventTime = (startTimeString, endTimeString) => {
        const startTime = new Date(startTimeString);
        const endTime = new Date(endTimeString);

        const startMonth = (startTime.getMonth() + 1).toString().padStart(2, '0');
        const startDay = startTime.getDate().toString().padStart(2, '0');
        const startHours = startTime.getHours();
        const startPeriod = startHours >= 12 ? 'PM' : 'AM';
        const formattedStartHours = (startHours % 12 || 12).toString().padStart(2, '0');

        const endHours = endTime.getHours();
        const endPeriod = endHours >= 12 ? 'PM' : 'AM';
        const formattedEndHours = (endHours % 12 || 12).toString().padStart(2, '0');

        return `${startMonth}/${startDay} ${formattedStartHours} ${startPeriod} - ${formattedEndHours} ${endPeriod}`;
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.contentContainer}>
                        {route.pendingEvents.map(event => {
                            let statusColor = '#FFBE5C'  // tentatively, only waiting on you
                            if (event.status == 'Tentatively' && (event.pendingUsers.length > 1 || !event.pendingUsers.includes('You'))) {
                                statusColor = '#EA5C1F'
                            } else if (event.status != 'Tentatively') {
                                statusColor = '#B6D639'
                            }
                            let waitingText = 'Waiting on ' + event.pendingUsers[0]
                            const additionalUsers = event.pendingUsers.length - 1
                            if (additionalUsers > 0) {
                                waitingText += ' & ' + additionalUsers + ' others'
                            }
                            return (
                                <TouchableOpacity onPress={() => handleSingleEvent(event)}>
                                    <View style={styles.outerContainer}>
                                        <View style={styles.detailsContainer}>
                                            <Text style={styles.subText}>{event.title}</Text>
                                            <View style={styles.statusCircle}>
                                                <Ionicons name='ellipse' size={10} color={statusColor} />
                                            </View>
                                            <View style={styles.container}>
                                                <Text style={styles.statusText}>{event.status}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.detailsContainer}>
                                            <Text style={styles.detailsLabel}>Time</Text>
                                            <Text style={styles.detailsText}>
                                                <Text style={styles.detailsText}>
                                                    {formatEventTime(event.start, event.end)}
                                                </Text>

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
                                        <View style={styles.detailsContainer}>
                                            <View style={styles.detailsLabel}>
                                                <Ionicons name='time-outline' size={20} color='#FF7880' />
                                            </View>
                                            <View style={styles.detailsTextContainer}>
                                                <Text style={styles.detailsText2}>
                                                    Waiting on {event.pendingUsers.map(user => user.firstname).join(', ')}
                                                    {event.pendingUsers.length > 1 ? '\n' + ` & ${event.pendingUsers.length - 1} others` : ''}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={styles.remindButtonContainer}>
                                            {!(event.pendingUsers.length == 1 && event.pendingUsers[0] == 'You') &&
                                                <Pressable style={styles.remindButton} onPress={() => { }}>
                                                    <Text style={styles.remindText}>Remind</Text>
                                                </Pressable>}
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </ScrollView>
            </ImageBackground>
        </View>
    );
};

export default PendingEventsScreen;