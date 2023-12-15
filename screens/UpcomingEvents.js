import { React, useState, setState } from 'react';
import { View, Text, StyleSheet, ImageBackground, useWindowDimensions } from 'react-native';
import image from '../assets/background.png';
import { useNavigation } from '@react-navigation/native';
import { PublicSans_700Bold, PublicSans_400Regular, useFonts } from "@expo-google-fonts/public-sans";
import { TabView, SceneMap, TabBar, TextView } from 'react-native-tab-view';
import PendingEventsScreen from './PendingEvents';
import ConfirmedEventsScreen from './ConfirmedEvents';

const dummyPendingEvents = [
    {
        id: '1',
        status: 'Tentatively',
        title: 'Ktown Karaoke',
        time: 'Thu, Nov 16, 11:00 AM - 12:00 PM',
        start: 'Thu, Nov 16, 11:00 AM',
        end: 'Thu, Nov 16, 12:00 PM',
        location: 'Gagopa Karaoke',
        confirmedUsers: ['You', 'Jenny', 'Apple'],
        pendingUsers: ['Grace']
    },
    {
        id: '2',
        status: 'Tentatively',
        title: 'Dinner Cruise',
        time: 'Thu, Nov 16, 8:00 PM - 9:30 PM',
        start: 'Fri, Nov 25, 8:00 PM',
        end: 'Fri, Nov 25, 9:30 PM',
        location: 'Sunset Cruise',
        confirmedUsers: ['Abby', 'Jenny', 'Apple'],
        pendingUsers: ['You']
    },
    {
        id: '3',
        status: 'Scheduled',
        title: 'Pottery Lesson',
        time: 'Thu, Nov 16, 11:00 AM - 12:00 PM',
        start: 'Thu, Nov 16, 11:00 AM',
        end: 'Thu, Nov 16, 12:00 PM',
        location: 'Studio',
        confirmedUsers: ['Abby', 'Jenny', 'You'],
        pendingUsers: ['Abby', 'Wendy', 'Liana', 'Kaylee']
    }
]

const dummyConfirmedEvents = [
    {
        id: '1',
        status: 'Scheduled',
        title: 'Brunch at EC',
        time: 'Thu, Nov 16, 11:00 AM - 12:00 PM',
        location: 'East Campus Residence Hall',
        confirmedUsers: ['AS', 'MS', 'GC', 'SS', 'YB', 'KJ']
    },
    {
        id: '2',
        status: 'Scheduled',
        title: 'Barbie Movie',
        time: 'Thu, Nov 25, 3:00 PM - 6:00 PM',
        location: 'AMC 84th Street',
        confirmedUsers: ['MS', 'AM', 'YL']
    }
]

const renderScene = SceneMap({
    pending: PendingEventsScreen,
    confirmed: ConfirmedEventsScreen,
});


const UpcomingEventsScreen = (props) => {
    console.log(props);

    // Retrieve data passed as props from top-level component
    const [users, setUsers] = useState(props.users)
    const [pendingEvents, setPendingEvents] = useState(props.pendingEvents)
    const [confirmedEvents, setConfirmedEvents] = useState(props.confirmedEvents)

    // [TO BE REMOVED] Check that data are successfully loaded in
    console.log('current userId: ', props.userId)
    console.log('users: ', props.users)
    console.log('pending events: ', props.pendingEvents)
    console.log('confirmed events: ', props.confirmedEvents)

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

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'pending', title: '  Pending  ', pendingEvents: dummyPendingEvents },
        { key: 'confirmed', title: '  Confirmed  ', confirmedEvents: dummyConfirmedEvents },
    ]);

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <TabView
                    renderTabBar={props =>
                        <TabBar
                            {...props}
                            indicatorStyle={
                                {
                                    backgroundColor: '#FC6E77',
                                    height: 5,
                                    bottom: -2,
                                }
                            }
                            style={{ backgroundColor: 'white' }}
                            tabStyle={{ backgroundColor: 'white' }}
                            renderLabel={({ route, focused, color }) => (
                                <Text style={{
                                    color: focused ? '#FC6E77' : '#6C7072',
                                    fontWeight: focused ? 'bold' : 'normal'
                                }}>
                                    {route.title}
                                </Text>
                            )}
                        />
                    }
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                />
            </ImageBackground>
        </View >
    );
};

export default UpcomingEventsScreen;
