import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import image from '../assets/background.png';
import { PublicSans_700Bold, PublicSans_400Regular, useFonts } from "@expo-google-fonts/public-sans";
import Ionicons from 'react-native-vector-icons/Ionicons';
import PendingEvent from './PendingEvent'
import VotingPoll from './VotingPoll';
import { useNavigation } from '@react-navigation/native';
import moment from "moment/moment";

const PendingEventsScreen = ({ route, onDeleteEvent, confirmEvent, userId }) => {
    const [showSingleEvent, setShowSingleEvent] = useState(false);
    const [eventId, setEventId] = useState(null);
    const [currEvent, setCurrEvent] = useState(null);
    const [eventType, setEventType] = useState(null)
    const [currentEvent, setCurrentEvent] = useState({})

    const [isVotingVisible, setIsVotingVisible] = useState(false);
    const [isInviteVisible, setIsInviteVisible] = useState(false);

    const onVotingClose = () => {
        setIsVotingVisible(false)
        console.log('closing voting poll visibility')
    };

    const onInviteDecline = () => {
        onDeleteEvent(eventId)
        setIsInviteVisible(false)
        console.log("hello")
    }

    const onInviteConfirm = () => {
        confirmEvent(eventId)
        setIsInviteVisible(false)
        console.log("hey")
    }

    //const navigation = useNavigation();

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
        setEventId(event._id);
        setCurrEvent(event);
        const pendingUserIds = event.pendingUsers.map(user => user.userId)
        console.log('event: ', event)
        if (pendingUserIds.includes(userId) && event.colorCode != 'green') {
            if (event.status == 'Tentatively' && event.colorCode == 'red') {
                console.log('setting is voting visible true')
                setEventType('red');
                setIsVotingVisible(true);
            } else {
                console.log('setting invite visible true')
                setIsInviteVisible(true);
            }
        } else {
            setEventType('yellow');
        }
    }

    const formatEventTime = (startTimeString, endTimeString) => {
        console.log("Start time:", startTimeString);
        console.log("End time:", endTimeString);
        const formatString = 'mm:ss a';

        const startTime = moment(startTimeString.replace(/T\d{2}:/, 'T00:'), 'YYYY-MM-DDTHH:mm:ss.SSSZ').format(formatString);
        const endTime = moment(endTimeString.replace(/T\d{2}:/, 'T00:'), 'YYYY-MM-DDTHH:mm:ss.SSSZ').format(formatString);

        return `${startTime} - ${endTime}`;
    };


    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <VotingPoll
                    event={currEvent}
                    isVisible={isVotingVisible}
                    onClose={onVotingClose}
                />
                {currEvent != null && <PendingEvent
                    event={currEvent}
                    onDeleteEvent={onInviteDecline}
                    onConfirmEvent={onInviteConfirm}
                    isVisible={isInviteVisible}
                />}
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
            </ImageBackground >
        </View >
    );
};

export default PendingEventsScreen;