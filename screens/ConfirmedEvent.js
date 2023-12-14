import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import image from '../assets/background.png';
import { useNavigation } from '@react-navigation/native';
import { PublicSans_700Bold, PublicSans_400Regular, useFonts } from "@expo-google-fonts/public-sans";
import BackButton from '../components/BackButton';
import UserIcon from '../components/UserIcon';
import GroupIcon from '../components/GroupIcon';
import { CheckBox } from '@rneui/themed';
import Header from '../components/Header';

const PendingEvent = (props) => {
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
            gap: 20
        },
        headerText: {
            fontSize: 22,
            color: '#FC6E77',
            textAlign: 'center',
            fontWeight: 'bold',
            textAlign: 'center',
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
            backgroundColor: '#FF7880',
            justifyContent: 'center',
        },
        confirmButton: {
            borderRadius: 14,
            color: '#ffffff',
            marginBottom: 20,
            paddingHorizontal: 20,
            paddingVertical: 15,
            width: 240
        },
        confirmText: {
            fontSize: 16,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            padding: 5,
            textAlign: 'center'
        },
        closeCircle: {
            marginLeft: 'auto',
            marginTop: 0,
            marginBottom: 0
        }
    });

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.outerContainer}>
                    <View style={[styles.innerContainer, { alignContent: 'space-between' }]}>
                        <Text style={[styles.headerText]}>{props.event.title}</Text>
                        <View style={styles.closeCircle}>
                            <Ionicons name='close-circle-outline' size={28} color='#FAE0E0' />
                        </View>
                    </View>
                    <View
                        style={{
                            borderBottomColor: '#FC6E77',
                            borderBottomWidth: 2,
                            width: 350,
                            alignSelf: 'center',
                            marginTop: 15,
                            marginBottom: 10,
                        }}
                    />
                    <View style={styles.innerContainer}>
                        <Text style={styles.subText}>Contributor</Text>
                    </View>
                    <View style={[styles.innerContainer, { margin: 0 }]}>
                        {props.event.confirmedUsers.map(user => {
                            return (
                                <View style={styles.iconContainer}>
                                    <UserIcon initials={user.slice(0, 2)} />
                                </View>
                            )
                        })}
                    </View>
                    <View style={styles.innerContainer}>
                        <View style={{ flexDirection: 'column', marginTop: 10, alignItems: 'left', fontWeight: 'normal' }}>
                            <View style={styles.detailsContainer}>
                                <Text style={styles.detailsLabel}>Start</Text>
                                <Text style={styles.detailsText}>{props.event.start}</Text>
                            </View>
                            <View style={styles.detailsContainer}>
                                <Text style={styles.detailsLabel}>End</Text>
                                <Text style={styles.detailsText}>{props.event.end}</Text>
                            </View>
                            <View style={styles.detailsContainer}>
                                <View style={styles.detailsLabel}>
                                    <Ionicons name='location-outline' size={24} color='#FF7880' />
                                </View>
                                <Text style={styles.detailsText}>
                                    {props.event.location}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.innerContainer, { justifyContent: 'center' }]}>
                        <Pressable style={[styles.confirmButton, { backgroundColor: '#FAE0E0' }]} onPress={() => { }}>
                            <Text style={[styles.confirmText, { color: '#FF7880' }]}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default PendingEvent;
