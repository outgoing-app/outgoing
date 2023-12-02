import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CreateButton = ({buttonText, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.createButton}
            onPress={onPress}
        >
            <Text style={styles.createButtonText}>{buttonText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    createButton: {
        width: 282,
        height: 50,
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    createButtonText: {
        fontFamily: 'Public Sans',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default CreateButton;
