import React from 'react';
import { View, StyleSheet, ImageBackground, ScrollView, Text } from 'react-native';
import Header from '../components/Header'; 
import NavBar from '../components/NavBar'; 

const HomeScreen = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#FFFFFF',
        },
        scrollViewContent: {
            paddingHorizontal: 10,
        },
        tabContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingVertical: 10,
        },
        tab: {
            backgroundColor: '#FF7880', 
            borderRadius: 20,
            padding: 10,
            paddingHorizontal: 20,
        },
        tabText: {
            color: '#FFFFFF',
            fontSize: 16,
        },
        eventPlaceholder: {
            backgroundColor: '#FF7880', 
            borderRadius: 12,
            padding: 20,
            marginHorizontal: 20,
            marginVertical: 10,
        },
        eventText: {
            color: '#FFFFFF',
            fontSize: 16,
        },
        dateText: {
            textAlign: 'center',
            color: '#FF7880', 
            fontSize: 16,
            marginVertical: 10,
        },
    });

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/background.png')} style={{ flex: 1 }}>
                <Header /> 
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.tabContainer}>
                        <View style={styles.tab}><Text style={styles.tabText}>Monthly</Text></View>
                        <View style={styles.tab}><Text style={styles.tabText}>Weekly</Text></View>
                        <View style={styles.tab}><Text style={styles.tabText}>Daily</Text></View>
                    </View>
                    {/* placeholder for event date */}
                    <Text style={styles.dateText}>November 2023</Text>
                    {/* placeholder for event */}
                    <View style={styles.eventPlaceholder}>
                        <Text style={styles.eventText}>Lunch at Fumo 12PM - 2PM</Text>
                    </View>
                    {/* placeholder for event */}
                    <View style={styles.eventPlaceholder}>
                        <Text style={styles.eventText}>Ktown Karaoke 11PM - 1AM</Text>
                    </View>
                </ScrollView>
                <NavBar />
            </ImageBackground>
        </View>
    );
};

export default HomeScreen;
