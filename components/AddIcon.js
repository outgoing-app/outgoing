import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';

const AddIcon = ({ size }) => {
    const styles = StyleSheet.create({
        iconContainer: {
            marginVertical: 10,
            marginRight: 15,
            width: size,
            height: size,
            borderRadius: size,
            borderWidth: 2,
            borderColor: '#FF7880',
            backgroundColor: 'white',
            justifyContent: 'center',
        },

        iconText: {
            color: '#FF7880',
            fontSize: 12,
            fontWeight: 'bold',
            textAlign: 'center',
        },

    });

    return(
        <View style={styles.iconContainer}>
            <Text style={styles.iconText}>+</Text>
        </View>
    );
}

export default AddIcon;