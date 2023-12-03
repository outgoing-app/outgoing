import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, ScrollView} from 'react-native';
import image from '../assets/background.png';
import { useFonts, PublicSans_700Bold, PublicSans_400Regular } from "@expo-google-fonts/public-sans";
import { Ionicons } from '@expo/vector-icons';
import CreateButton from '../components/CreateButton'
import { useNavigation } from '@react-navigation/native';
import NewGroup from './NewGroup.js'

const GroupsScreen = () => {
    const [fontsLoaded] = useFonts({
        PublicSans_700Bold,
        PublicSans_400Regular,
    });

    const navigation = useNavigation();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },

        image: {
            flex: 1,
            justifyContent: 'center',
        },

        scrollContainer: {
            alignItems: 'center',
        },
        groupContainer: {
            marginTop:20,
            width: 327,
            height: 186,
            borderWidth: 2,
            borderColor: 'rgba(255, 0, 0, 0.5)',
            backgroundColor: 'white',
            borderRadius: 8,
            padding: 20,
        },
        groupTitle: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        groupName: {
            color: 'rgba(252, 110, 119, 1)',
            fontFamily: 'Public Sans',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'left',
            height:24,
            marginBottom:12,
        },
        editIcons: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom:12,
            color: 'rgba(108, 112, 114, 1)',

        },
        profilePics: {
            flexDirection: 'row',
            alignItems: 'top',
            marginBottom:12,

        },
        profilePic: {
            width: 20,
            height: 20,
            borderRadius: 16,
            marginRight: 8,
        },
        groupDetails: {
            color: 'rgba(108, 114, 117, 0.8)',
            fontFamily: 'Public Sans',
            fontSize: 12,
            fontStyle: 'italic',
            marginTop: 8,

        },
        seeMoreButton: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(252, 110, 119, 1)',
            borderRadius: 48,
            marginTop: 8,
            paddingVertical: 3,
            width:90,
            height:22,
        },
        seeMoreText: {
            color: 'white',
            fontFamily: 'Public Sans',
            fontSize: 12,
            fontWeight: 'bold',
        },
        addButtonContainer: {
            position:'absolute',
            alignItems: 'center',
            marginTop: 20,
            bottom:20,
            right:40,
        },

    });

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.groupContainer}>
                    <View style={styles.groupTitle}>
                        <Text style={styles.groupName}>Suitemates 💌</Text>
                        <View style={styles.editIcons}>
                            <TouchableOpacity>
                                <Ionicons name="create-outline" size={24} color="rgba(108, 112, 114, 1)" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionicons name="cloud-upload-outline" size={24} color="rgba(108, 112, 114, 1)" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionicons name="close-outline" size={24} color="rgba(108, 112, 114, 1)" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.profilePics}>
                        <Image source={require('../assets/927.png')} style={styles.profilePic} />
                        <Image source={require('../assets/928.png')} style={styles.profilePic} />
                        <Image source={require('../assets/929.png')} style={styles.profilePic} />
                    </View>
                    <Text style={styles.groupDetails}>
                        1. Kossar’s Bagels {'\n'}
                        2. Bronx Zoo {'\n'}
                        3. Karaoke
                    </Text>
                    <TouchableOpacity style={styles.seeMoreButton}>
                        <Text style={styles.seeMoreText}>See More</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.groupContainer}>
                    <View style={styles.groupTitle}>
                        <Text style={styles.groupName}>UI Design Team 26</Text>
                        <View style={styles.editIcons}>
                            <TouchableOpacity>
                                <Ionicons name="create-outline" size={24} color="rgba(108, 112, 114, 1)" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionicons name="cloud-upload-outline" size={24} color="rgba(108, 112, 114, 1)" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionicons name="close-outline" size={24} color="rgba(108, 112, 114, 1)" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.profilePics}>
                        <Image source={require('../assets/930.png')} style={styles.profilePic} />
                        <Image source={require('../assets/931.png')} style={styles.profilePic} />
                        <Image source={require('../assets/932.png')} style={styles.profilePic} />
                        <Image source={require('../assets/933.png')} style={styles.profilePic} />
                    </View>
                    <Text style={styles.groupDetails}>
                        1. Tiger Sugar boba {'\n'}
                        2. Project demo rehearsal {'\n'}
                        3. Escape room
                    </Text>
                    <TouchableOpacity style={styles.seeMoreButton}>
                        <Text style={styles.seeMoreText}>See More</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.groupContainer}>
                    <View style={styles.groupTitle}>
                        <Text style={styles.groupName}>High School Reunion</Text>
                        <View style={styles.editIcons}>
                            <TouchableOpacity>
                                <Ionicons name="create-outline" size={24} color="rgba(108, 112, 114, 1)" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionicons name="cloud-upload-outline" size={24} color="rgba(108, 112, 114, 1)" />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionicons name="close-outline" size={24} color="rgba(108, 112, 114, 1)" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.profilePics}>
                        <Image source={require('../assets/927.png')} style={styles.profilePic} />
                        <Image source={require('../assets/934.png')} style={styles.profilePic} />
                        <Image source={require('../assets/935.png')} style={styles.profilePic} />
                        <Image source={require('../assets/936.png')} style={styles.profilePic} />
                    </View>
                    <Text style={styles.groupDetails}>
                        1. Soho shopping {'\n'}
                        2. Dinner in LES {'\n'}
                        3. Rockaway Beach and DUMBO
                    </Text>
                    <TouchableOpacity style={styles.seeMoreButton}>
                        <Text style={styles.seeMoreText}>See More</Text>
                    </TouchableOpacity>
                </View>

                </ScrollView>
                <View style={styles.addButtonContainer}>
                    <CreateButton
                        buttonText="Add Group"
                        onPress={() => navigation.navigate('NewGroup')}
                    />
                </View>

            </ImageBackground>
        </View>
    );
};

export default GroupsScreen;
