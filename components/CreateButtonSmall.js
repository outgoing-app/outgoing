import {React, useState} from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CreateButtonSmall = ({buttonText, onPress, disabled}) => {
    const styles = StyleSheet.create({
        buttonNormal: {
            width: 100,
            height: 50,
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            marginHorizontal: 25,
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
        },
        buttonDisabled: {
            width: 100,
            height: 50,
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            marginHorizontal: 25,
            backgroundColor: 'grey', 
        },
        createButtonText: {
            fontFamily: 'Public Sans',
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
        },
    });
    
    return (
        <TouchableOpacity
            style={disabled? styles.buttonDisabled:styles.buttonNormal}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={styles.createButtonText}>{buttonText}</Text>
        </TouchableOpacity>
    );
};



export default CreateButtonSmall;
