import { React, useState, setState } from 'react';
import { View, Text, StyleSheet, ImageBackground, useWindowDimensions } from 'react-native';
import image from '../assets/background.png';
import { useNavigation } from '@react-navigation/native';
import { PublicSans_700Bold, PublicSans_400Regular, useFonts } from "@expo-google-fonts/public-sans";
import { TabView, SceneMap, TabBar, TextView } from 'react-native-tab-view';
import PendingEventsScreen from './PendingEvents';
import ConfirmedEventsScreen from './ConfirmedEvents';

const UpcomingEventsScreen = (props) => {

    // Retrieve data passed as props from top-level component
    const { userId, users, pendingEvents, confirmedEvents } = props;

    // [TO BE REMOVED] Check that data are successfully loaded in
    console.log('current userId: ', props.userId)
    console.log('users: ', users)
    console.log('pending events: ', pendingEvents)
    console.log('confirmed events: ', confirmedEvents)

    const navigation = useNavigation();

    const handlePendingEvent = (event) => {
        navigation.navigate('PendingEvent', { event });
    };

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
        { key: 'pending', title: '  Pending  ' },
        { key: 'confirmed', title: '  Confirmed  ' },
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
                    renderScene={SceneMap({
                        pending: () => <PendingEventsScreen route={{ pendingEvents: props.pendingEvents }} />,
                        confirmed: () => <ConfirmedEventsScreen route={{ confirmedEvents: props.confirmedEvents }} />,
                    })}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                />
            </ImageBackground>
        </View >
    );
};

export default UpcomingEventsScreen;
