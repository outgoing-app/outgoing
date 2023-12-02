import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import image from '../assets/background.png';
import { useNavigation } from '@react-navigation/native';
import { PublicSans_700Bold, PublicSans_400Regular, useFonts } from "@expo-google-fonts/public-sans";
import BackButton from '../components/BackButton';
import UserIcon from '../components/UserIcon';
import GroupIcon from '../components/GroupIcon';
import { CheckBox } from '@rneui/themed';
import Header from '../components/Header';
import VotingPoll from '../components/VotingPoll';

const PendingPoll = () => {
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
        outerContainer: {
          flexDirection: 'column',
          height: 580,
          width: 350,
          alignSelf: 'center',
          padding: 20,
          backgroundColor: 'white',
          borderRadius: 8,
          borderColor: '#FC6E77',
          borderWidth: 2,
          marginBottom: 0,
        },
        innerContainer: {
          marginVertical: 5,
          marginLeft: 5,
          flexDirection: 'column',
        },
        headerText: {
          fontSize: 22,
          color: '#FC6E77',
          textAlign: 'center',
          fontWeight: 'bold',
        },
        subText:{
          fontSize: 16,
          textAlign: 'left',
          color: '#FC6E77',
          fontWeight: 'bold',
        },
        detailsContainer:{
          flexDirection: 'row',
          gap: 40,
        },
        detailsLabel:{
          color: '#8B8B8B',
          width: 50,
          marginVertical: 7,
        },
        detailsText:{
          color:'black',
          marginVertical: 5,
        },
    });

    const [selectedIndex, setIndex] = React.useState(0);

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <VotingPoll options={3}/>
            </ImageBackground>
        </View>
    );
};

export default PendingPoll;
