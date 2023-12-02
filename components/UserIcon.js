import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';

const UserIcon = ({ initials, size }) => {
    const styles = StyleSheet.create({
        iconContainer: {
            marginVertical: 10,
            marginRight: 15,
            width: size,
            height: size,
            borderRadius: size,
            backgroundColor: '#FF7880',
            justifyContent: 'center',
        },

        iconText: {
            color: 'white',
            fontSize: 12,
            fontWeight: 'bold',
            textAlign: 'center',
        },

    });

    return(
        <View style={styles.iconContainer}>
            <Text style={styles.iconText}>{initials}</Text>
        </View>
    );
}

export default UserIcon;