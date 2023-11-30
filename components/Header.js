import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Header = ({ title, onBackPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton}>
                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <Path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="black"/>
                </Svg>
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 3 * 16,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
    },
    backButton: {
        width: 1.5 * 16,
        height: 1.5 * 16,
        flexShrink: 0,
    },
    title: {
        flex: 1,
        color: '#090A0A',
        textAlign: 'center',
        fontFamily: 'Public Sans',
        fontSize: 1.125 * 16,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 1.125 * 16,
    },
});

export default Header;
