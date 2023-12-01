import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

const IndividualGroup = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'salmon', 
        },
        header: {
            paddingTop: 50, 
            paddingBottom: 20,
            backgroundColor: 'salmon',
            alignItems: 'center',
        },
        whiteSquare: {
            backgroundColor: 'white',
            margin: 20,
            borderRadius: 25,
            flex: 1, 
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                {/* placeholder for header content */}
            </View>
            <View style={styles.whiteSquare}>
                {/* placeholder for the white square content */}
            </View>
        </SafeAreaView>
    );
};

export default IndividualGroup;
