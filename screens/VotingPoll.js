import React, { useEffect , useState} from 'react';
import { View, Text, StyleSheet, ImageBackground, Button, Modal} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { PublicSans_700Bold, PublicSans_400Regular, useFonts } from "@expo-google-fonts/public-sans";
import BackButton from '../components/BackButton';
import UserIcon from '../components/UserIcon';
import CreateButton from '../components/CreateButton';
import { CheckBox } from '@rneui/themed';
import Header from '../components/Header';
import PendingEventsScreen from './PendingEvents';

// dummy variables
const eventName = "Pottery Lesson"
const waitingInitials = ['AS', 'BO', 'PD', 'LS'];
const confirmedInitials = ['MS', 'KZ'];
// may need mapping function based on structure of db
const times = [
    {index: 0, time: '11/27/23 @ 6:00 PM - 8:00 PM'}, 
    {index: 1, time: '11/28/23 @ 9:00 PM - 11:00 PM'}, 
    {index: 2, time: '11/29/23 @ 10:00 AM - 12:00 PM'}
];


const VotingPoll = ({isVisible, onClose}) => {
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        PublicSans_700Bold,
        PublicSans_400Regular,
    });
    // keeps track of checked options
    const[checkedState, setCheckedState] = useState(
        new Array(times.length).fill(false)
    );
    // updates checked options
    const handleChange = (idx) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === idx ? !item : item
        );
        setCheckedState(updatedCheckedState)
    };

    const vote = () => {
        console.log(checkedState)
        // update database with # votes for each option
        
    }

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
          marginTop: 150,
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

    return (
        <Modal transparent={true} visible={isVisible}>
        <View style={styles.outerContainer}>
            <Text style={styles.headerText}>{eventName}</Text>
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
                title={time.time} 
                size={20}
                margin={0}
                checked = {checkedState[time.index]}
                onPress={()=>{
                    handleChange(time.index);
                }}
                textStyle={{fontWeight:'normal', fontSize: 12, color:'8B8B8B'}}
                />)}
            </View>
            <View style={{alignItems: 'center'}}>
                <CreateButton buttonText="Vote" onPress={onClose}/>
            </View>
        </View>
        </Modal>
    );
};

export default VotingPoll;
