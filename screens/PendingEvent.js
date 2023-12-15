import { React, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import image from '../assets/background.png';
import { useNavigation } from '@react-navigation/native';
import { PublicSans_700Bold, PublicSans_400Regular, useFonts } from "@expo-google-fonts/public-sans";
import UserIcon from '../components/UserIcon';
import moment from "moment/moment";

const PendingEvent = (props) => {
    const [home, setHome] = useState(false)
    const navigation = useNavigation();
    //const event = route.params.event; // Extracting event from route params
    const event = props.event

    // Function to format event time
    const formatEventTime = (timeString) => {
        const dateFormat = 'MMMM DD';
        const date = moment(timeString).format(dateFormat);
        console.log("Start time:", timeString);
        const formatString = 'mm:ss a';

        const time = timeString?.replace(/T\d{2}:/, 'T00:') ? moment(timeString, 'YYYY-MM-DDTHH:mm:ss.SSSZ').format(formatString) : 'Invalid Time';

        return `${date} at ${time}`;
    };

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        image: {
            flex: 1,
            justifyContent: 'center',
        },
        outerContainer: {
            flexDirection: 'column',
            height: 370,
            width: 350,
            alignSelf: 'center',
            padding: 20,
            backgroundColor: 'white',
            borderRadius: 8,
            borderColor: '#FC6E77',
            borderWidth: 2,
            marginBottom: 0,
        },
        innerContainer: {
            marginVertical: 5,
            marginLeft: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        headerText: {
            fontSize: 22,
            color: '#FC6E77',
            textAlign: 'center',
            fontWeight: 'bold',
        },
        subText: {
            fontSize: 16,
            textAlign: 'left',
            color: '#FC6E77',
            fontWeight: 'bold',
        },
        detailsContainer: {
            flexDirection: 'row',
            gap: 20,
            marginVertical: 10,
        },
        detailsLabel: {
            color: '#8B8B8B',
            width: 50,
            marginVertical: 7,
        },
        detailsText: {
            color: 'black',
            marginVertical: 5,
        },
        iconContainer: {
            marginVertical: 3,
            width: 25,
            height: 25,
            borderRadius: 35,
            justifyContent: 'center',
            alignItems: 'center',
        },
        confirmButton: {
            borderRadius: 14,
            marginBottom: 20,
            paddingHorizontal: 20,
            paddingVertical: 15,
            width: 120,
            alignItems: 'center',
        },
        confirmText: {
            fontSize: 16,
            fontWeight: 'bold',
            letterSpacing: 0.25,
        },
    });

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.outerContainer}>
                    <View style={styles.innerContainer}>
                        <Text style={styles.headerText}>{event.title}</Text>
                        <Pressable
                            style={styles.iconContainer}
                            onPress={() => navigation.goBack()}
                        >
                            <Ionicons name='close-circle-outline' size={28} color='#FFC6CA' />
                        </Pressable>
                    </View>
                    <View
                        style={{
                            borderBottomColor: '#FC6E77',
                            borderBottomWidth: 2,
                            width: '100%',
                            alignSelf: 'center',
                            marginTop: 15,
                            marginBottom: 10,
                        }}
                    />
                    <View style={styles.detailsContainer}>
                        <Text style={styles.subText}>Contributors</Text>
                        <View style={{flexDirection:'column'}}></View>
                        <View style={{ flexDirection: 'row' }}>
                            {event.confirmedUsers.map((user, index) => (
                                <UserIcon initials={user.initials} size={35}/>
                            ))}
                        </View>
                    </View>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.detailsLabel}>Start</Text>
                        <Text style={styles.detailsText}>
                            {formatEventTime(event.start)}
                        </Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <Text style={styles.detailsLabel}>End</Text>
                        <Text style={styles.detailsText}>
                            {formatEventTime(event.end)}
                        </Text>
                    </View>
                    <View style={styles.detailsContainer}>
                        <Ionicons name='location-outline' size={24} color='#FF7880' />
                        <Text style={styles.detailsText}>{event.location}</Text>
                    </View>
                    <View style={styles.innerContainer}>
                        <Pressable
                            style={[styles.confirmButton, { backgroundColor: '#FF7880' }]}
                            onPress={() => {
                                props.confirmEvent(event._id)
                                setHome(true)
                            }}
                        >
                            <Text style={{ ...styles.confirmText, color: '#ffffff' }}>Confirm</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.confirmButton, { backgroundColor: '#FAE0E0' }]}
                            onPress={() => {
                                props.onDeleteEvent(event._id)
                                setHome(true)
                            }}
                        >
                            <Text style={{ ...styles.confirmText, color: '#FF7880' }}>Decline</Text>
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default PendingEvent;

