import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GroupsScreen from './screens/GroupsScreen';
import UpcomingEventsScreen from './screens/UpcomingEvents';
import HomeScreen from './screens/HomeScreen';
import NewGroup from './screens/NewGroup';
import { users, events, groups } from './assets/dummyData'

const CURRENT_USER_ID = 1;
const Tab = createBottomTabNavigator();

const App = () => {
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
                    children={() => <GroupsScreen userId={CURRENT_USER_ID} users={users} groups={groups} />} />
                <Tab.Screen name=" " component={NewGroup} />
                <Tab.Screen
                    name="Events"
                    children={() => <UpcomingEventsScreen userId={CURRENT_USER_ID} users={users} events={events} />} />
                <Tab.Screen name="Profile" component={HomeScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const AddButton = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={{
                bottom: 5,
                height: 100,
                borderRadius: 68,
                alignItems: 'center',
            }}
            onPress={() => navigation.navigate('NewGroup')}
        >
            <Ionicons name="add-circle" size={75} color={'#FF7880'} />
        </TouchableOpacity>
    );
};

export default App;
