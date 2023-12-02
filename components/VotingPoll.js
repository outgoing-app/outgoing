import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import image from '../assets/background.png';
import { useNavigation } from '@react-navigation/native';
import { PublicSans_700Bold, PublicSans_400Regular, useFonts } from "@expo-google-fonts/public-sans";
import BackButton from '../components/BackButton';
import UserIcon from '../components/UserIcon';
import CreateButton from './CreateButton';
import { CheckBox } from '@rneui/themed';
import Header from '../components/Header';

const VotingPoll = ({options}) => {
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
          marginBottom: 5,
        },
        detailsContainer:{
          flexDirection: 'row',
          gap: 40,
        },
        pollContainer:{
            flexDirection: 'column',
            width: 273,
            alignSelf: 'center',
            padding: 10,
            borderRadius: 8,
            borderColor: '#FF7880',
            borderWidth: 1,
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

    //const [selectedIndex, setIndex] = React.useState(0);
    // dummy variables
    const waitingInitials = ['AS', 'BO', 'PD', 'LS'];
    const confirmedInitials = ['MS', 'KZ'];
    const times = ['11/27/23 @ 6:00 PM - 8:00 PM', '11/28/23 @ 9:00 PM - 11:00 PM', '11/29/23 @ 10:00 AM - 12:00 PM'];
    const vote = () => {
        console.log("Voted!")
    }
    return (
        <View style={styles.outerContainer}>
            <Text style={styles.headerText}>Pottery Lesson</Text>
            <View
                style={{
                borderBottomColor: '#FC6E77',
                borderBottomWidth: 2,
                width: 350,
                alignSelf: 'center',
                marginTop: 15,
                marginBottom: 10,
                }}
            />
            <View style={styles.innerContainer}>
                <Text style={styles.subText}>Waiting on</Text>
                <View style={{flexDirection: 'row'}}>
                    {waitingInitials.map((name) => <UserIcon initials={name} size={35} />)}
                </View>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.subText}>Confirmed</Text>
                <View style={{flexDirection: 'row'}}>
                    {confirmedInitials.map((name) => <UserIcon initials={name} size={35} />)}
                </View>
            </View>
            <View style={styles.pollContainer}>
                <Text style={styles.subText}>Vote on time(s):</Text>
                {times.map((time) => 
                <CheckBox 
                title={time} 
                size={20}
                margin={0}
                textStyle={{fontWeight:'normal', fontSize: 12, color:'8B8B8B'}}
                />)}
            </View>
            <View style={{alignItems: 'center'}}>
                <CreateButton buttonText="Vote" onPress={vote}/>
            </View>
        </View>
    );
};

export default VotingPoll;
