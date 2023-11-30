import React, { useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import image from '../assets/background.png';
import { useNavigation } from '@react-navigation/native';
import { PublicSans_700Bold, PublicSans_400Regular, useFonts } from "@expo-google-fonts/public-sans";

const NewGroup = () => {
    const navigation = useNavigation();

    const [fontsLoaded] = useFonts({
        PublicSans_700Bold,
        PublicSans_400Regular,
    });

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        image: {
            flex: 1,
            justifyContent: 'center',
        },
        text: {
            color: 'black',
            fontFamily: 'Public Sans',
            fontSize: 42,
            lineHeight: 84,
            fontWeight: 'bold',
            textAlign: 'center',
        },
        contentContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        outer: {
            width: 326,
            height: 450,
            backgroundColor: 'white',
            justifyContent: 'flex-start',
            borderRadius: 8,
            borderWidth: 2,
            borderColor: 'rgba(255, 0, 0, 0.5)',
            padding: 20,
        },
        createNewGroupText: {
            fontFamily: 'Public Sans',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'rgba(255, 0, 0, 0.5)',
            marginBottom: 20,
        },
        innerItem: {
            marginBottom: 20,
        },
        textItem: {
            color: 'black',
            fontFamily: 'Public Sans',
            fontSize: 12,
            fontWeight: 'bold',
            textAlign: 'left',
            height: 16,
            marginTop: 4,
        },
        inputBox: {
            width: 281.64713,
            height: 35,
            backgroundColor: 'white',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'rgba(108, 114, 117, 0.25)',
            paddingHorizontal: 10,
            marginTop: 4,
        },
        createGroupButton: {
            width: 282,
            height: 56,
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
        },
        createGroupButtonText: {
            fontFamily: 'Public Sans',
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
        },
    });

    const handleCreateGroup = () => {
        console.log("Create Group button pressed!");
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.contentContainer}>
                    <Text></Text>
                    <View style={styles.outer}>
                        <Text style={styles.createNewGroupText}>Create New Group</Text>

                        <View style={[styles.innerItem, { alignItems: 'flex-start' }]}>
                            <Text style={styles.textItem}>Group Name</Text>
                            <TextInput style={styles.inputBox} placeholder="Enter group name" />

                        </View>
                        <View style={[styles.innerItem, { alignItems: 'flex-start' }]}>
                            <Text style={styles.textItem}>Add Members</Text>
                            <TextInput style={styles.inputBox} placeholder="Insert usernames" />

                        </View>

                        <View style={[styles.innerItem, { alignItems: 'flex-start' }]}>
                            <Text style={styles.textItem}>Additional Comments</Text>
                            <TextInput style={styles.inputBox} placeholder="Enter here" />

                        </View>
                        <TouchableOpacity
                            style={styles.createGroupButton}
                            onPress={handleCreateGroup}
                        >
                            <Text style={styles.createGroupButtonText}>Create Group</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default NewGroup;
