import { React, useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GroupsScreen from './screens/GroupsScreen';
import UpcomingEventsScreen from './screens/UpcomingEvents';
import HomeScreen from './screens/HomeScreen';
import NewGroup from './screens/NewGroup';
import axios from 'axios'
import PendingEventScreen from './screens/PendingEvent';
import CreateEvent from './screens/CreateEvent';

const CURRENT_USER_ID = 1;  // "logged in" user; please do not change this id

const IP_ADDRESS = '10.206.27.172'; // change this to your IP ADDRESS to connect with the server

const Tab = createBottomTabNavigator();

const App = () => {
    const [users, setUsers] = useState([])
    const [groups, setGroups] = useState([])
    const [pendingEvents, setPendingEvents] = useState([])
    const [confirmedEvents, setConfirmedEvents] = useState([])
    //const [handleDeleteEvent] = useState([])

    const handleDeleteEvent = async (eventId) => {
        try {
            const serverUrl = `http://${IP_ADDRESS}:3000`;
            await axios.delete(`${serverUrl}/event/${eventId}`);
        } catch (error) {
            console.error('Error deleting event:', error);
        }
    };

    const confirmEvent = async (eventId) => {
        try {
            const serverUrl = `http://${IP_ADDRESS}:3000`;
            await axios.post(`${serverUrl}/event/confirm/${eventId}`);
        } catch (error) {
            console.error('Error confirming event:', error);
        }
    };

    const getConfirmedEvents = async () => {
        try {
            const confirmedEvents = await axios.get(`http://${IP_ADDRESS}:3000/events/confirmed`)
            console.log('confirmed events data: ', confirmedEvents.data)
            setConfirmedEvents(confirmedEvents.data)
        } catch (error) {
            console.log('errors: ', error)
        }
    }

    const getAllUsers = async () => {
        try {
            const users = await axios.get(`http://${IP_ADDRESS}:3000/users`)
            console.log('users data: ', users.data)
            setUsers(users.data)
        } catch (error) {
            console.log('errors: ', error)
        }
    }

    const getAllGroups = async () => {
        try {
            const groups = await axios.get(`http://${IP_ADDRESS}:3000/groups`)
            console.log('groups data: ', groups.data)
            setGroups(groups.data)
        } catch (error) {
            console.log('errors: ', error)
        }
    }

    const getPendingEvents = async () => {
        try {
            const pendingEvents = await axios.get(`http://${IP_ADDRESS}:3000/events/pending`)
            console.log('pending events data: ', pendingEvents.data)
            setPendingEvents(pendingEvents.data)
        } catch (error) {
            console.log('errors: ', error)
        }
    }

    useEffect(() => {
        getAllUsers()
        getAllGroups()
        getPendingEvents()
        getConfirmedEvents()
    }, [])

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Groups') {
                            iconName = focused ? 'clipboard' : 'clipboard-outline';
                        } else if (route.name === ' ') {
                            return <AddButton />;
                        } else if (route.name === 'Events') {
                            iconName = focused ? 'people' : 'people-outline';
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'person-circle' : 'person-circle-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#FF7880',
                    tabBarInactiveTintColor: '#8B8B8B',
                    tabBarLabelStyle: { textAlign: 'center' },
                    tabBarIndicatorStyle: {
                        borderBottomColor: '#C2D5A8',
                        borderBottomWidth: 2,
                    },
                    tabBarLabelStyle: {
                        textTransform: 'none',
                    },
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen
                    name="Groups"
                    children={() => <GroupsScreen
                        userId={CURRENT_USER_ID}
                        users={users}
                        groups={groups}
                    />}
                />
                <Tab.Screen
                    name=" "
                    children={() => <CreateEvent
                        userID={CURRENT_USER_ID}
                        users={users}
                        groups={groups}
                    />} />
                <Tab.Screen
                    name="Events"
                    children={() => <UpcomingEventsScreen
                        userId={CURRENT_USER_ID}
                        users={users}
                        pendingEvents={pendingEvents}
                        confirmedEvents={confirmedEvents}
                        onDeleteEvent={handleDeleteEvent}
                        getConfirmedEvents={getConfirmedEvents}
                        getPendingEvents={getPendingEvents}
                        confirmEvent={confirmEvent}
                    />}
                />
                <Tab.Screen name="Profile" component={HomeScreen} />

            </Tab.Navigator>
        </NavigationContainer>
    );
};

const AddButton = () => {
    const navigation = useNavigation();

    return (
        <Ionicons name='add-circle'
            size={75}
            color={'#FF7880'}
            style={{
                bottom: 5,
                height: 100,
                borderRadius: 68
            }} />
    );
};

export default App;
