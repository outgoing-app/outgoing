import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CalendarComponent = () => {
    const styles = StyleSheet.create({
        calendarContainer: {
            padding: 10,
            backgroundColor: '#FF5A5F', // Header background color
            borderRadius: 10,
            // Other shadow properties can remain the same
        },
        header: {
            fontSize: 24,
            fontWeight: 'bold',
            textAlign: 'center',
            padding: 10,
            color: '#fff', // Text color for the header
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
            // The day background is transparent for non-selected days
        },
        dayText: {
            fontSize: 16,
            fontWeight: 'bold',
            color: 'grey', // Text color for non-selected days
        },
        currentDay: {
            backgroundColor: '#FC6E77', // Background color for the selected day
            borderRadius: 20, // Circular background for the current day
        },
        currentDayText: {
            color: '#fff', // Text color for the selected day
        },
    });

    const renderDay = (day, isSelected) => (
        <View style={[styles.day, isSelected && styles.currentDay]} key={day.toString()}>
            <Text style={[styles.dayText, isSelected && styles.currentDayText]}>
                {day}
            </Text>
        </View>
    );

    return (
        <View style={styles.calendarContainer}>
            <Text style={styles.header}>November 2023</Text>
            <View style={styles.week}>
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day) => renderDay(day, day === '15'))}
            </View>
            {/* Additional weeks would be rendered similarly */}
        </View>
    );
};

export default CalendarComponent;
