import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, useWindowDimensions } from 'react-native';
import Header from '../components/Header';
import image from '../assets/background.png';
import { useNavigation } from '@react-navigation/native';
import { PublicSans_700Bold, PublicSans_400Regular, useFonts } from "@expo-google-fonts/public-sans";
import { TabView, SceneMap } from 'react-native-tab-view';
import PendingEventsScreen from './PendingEvents';

const dummyPendingEvents = [
    {
        id: '1',
        status: 'tentatively',
        title: 'Ktown Karaoke',
        startDatetime: new Date("November 16, 2023 11:00:00"),
        endDatetime: new Date("November 16, 2023 12:00:00"),
        location: 'Gagopa Karaoke',
        confirmedUsers: ['Lily', 'Jenny', 'Apple'],
        pendingUsers: ['Grace']
    },
    {
        id: '2',
        status: 'tentatively',
        title: 'Dinner Cruise',
        startDatetime: new Date("November 16, 2023 11:00:00"),
        endDatetime: new Date("November 16, 2023 12:00:00"),
        location: 'Sunset Cruise',
        confirmedUsers: ['Lily', 'Jenny', 'Apple'],
        pendingUsers: ['Lily']
    }
]

const ConfirmedRoute = () => (
    <View style={{ flex: 1 }} />
);

const renderScene = SceneMap({
    pending: PendingEventsScreen,
    confirmed: ConfirmedRoute,
});


const UpcomingEventsScreen = () => {
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
        text: {
            color: 'black',
            fontFamily: 'Public Sans',
            fontSize: 42,
            lineHeight: 84,
            fontWeight: 'bold',
            textAlign: 'center',
        },
    });

    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'pending', title: 'Pending', pendingEvents: dummyPendingEvents },
        { key: 'confirmed', title: 'Confirmed' },
    ]);

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                />
            </ImageBackground>
        </View >
        /*
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.contentContainer}>
                    <Text style={styles.text}>Upcoming Events</Text>
                </View>
            </ImageBackground>
        </View> */
    );
};

export default UpcomingEventsScreen;
