import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';

const GroupIcon = ({ groupName }) => {
    const styles = StyleSheet.create({
        iconContainer: {
            margin: 5,
            height: 35,
            width: 35,
            borderRadius: 7,
            backgroundColor: '#FAE0E0',
            justifyContent: 'center',
            paddingHorizontal: 9,
            paddingVertical: 2,
        },

        iconText: {
            color: '#FC6E77',
            fontSize: 10,
            textAlign: 'center',
        },

    });

    return(
        <View style={styles.iconContainer}>
            <Text style={styles.iconText}>{groupName}</Text>
        </View>
    );
}

export default GroupIcon;