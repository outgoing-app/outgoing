import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CalendarComponent = () => {
    const styles = StyleSheet.create({
        calendarContainer: {
            padding: 10,
            backgroundColor: '#fff',
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
        header: {
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
            padding: 10,
        },
        week: {
            flexDirection: 'row',
            justifyContent: 'space-around',
        },
        day: {
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 5,
            borderRadius: 20,
            backgroundColor: 'lightgrey',
        },
        dayText: {
            fontSize: 16,
            fontWeight: 'bold',
        },
    });

    const renderDay = (day) => (
        <View style={styles.day} key={day}>
            <Text style={styles.dayText}>{day}</Text>
        </View>
    );

    return (
        <View style={styles.calendarContainer}>
            <Text style={styles.header}>November 2023</Text>
            <View style={styles.week}>
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(renderDay)}
            </View>
            {/* Additional weeks would be rendered similarly */}
        </View>
    );
};

export default CalendarComponent;
