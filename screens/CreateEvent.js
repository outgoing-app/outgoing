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

const CreateEventSeparately = () => {
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
                  <View style={styles.outerContainer}>
                    <Text style={styles.headerText}>Create "Bronx Zoo"</Text>
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
                      <Text style={styles.subText}>Organizer</Text>
                      <UserIcon initials='AS'/>
                    </View>
                    <View style={styles.innerContainer}>
                      <Text style={styles.subText}>Invitees</Text>
                      <View style={{flexDirection: 'row'}}>
                        <GroupIcon groupName='Suitemates 💌'/>
                        <UserIcon initials='AL'/>
                      </View>
                    </View>
                    <View style={styles.innerContainer}>
                      <Text style={styles.subText}>Schedule</Text>
                      <View style={{flexDirection: 'column', alignItems: 'center', fontWeight: 'light'}}>
                        <CheckBox
                          checked={selectedIndex === 0}
                          onPress={() => setIndex(0)}
                          checkedIcon="dot-circle-o"
                          uncheckedIcon="circle-o"
                          title="Create Voting"
                          containerStyle={{
                            width: 300, 
                            borderWidth: 1, 
                            borderRadius: 8, 
                            borderColor: '#FAE0E0', 
                            padding: 7,
                          }}
                          textStyle={{fontWeight: 'normal'}}
                          checkedColor='#FF7880'
                          uncheckedColor='#FF7880'
                        />
                        <CheckBox
                          checked={selectedIndex === 1}
                          onPress={() => setIndex(1)}
                          checkedIcon="dot-circle-o"
                          uncheckedIcon="circle-o"
                          title="Set date/time"
                          containerStyle={{
                            width: 300, 
                            borderWidth: 1, 
                            borderRadius: 8, 
                            borderColor: '#FAE0E0', 
                            padding: 7
                          }}
                          textStyle={{fontWeight: 'normal'}}
                          checkedColor='#FF7880'
                          uncheckedColor='#FF7880'
                        />
                        </View>
                        <View style={{flexDirection: 'column', marginTop: 10, alignItems: 'left', fontWeight: 'normal'}}>
                          <View style = {styles.detailsContainer}>
                            <Text style={styles.detailsLabel}>Start</Text>
                            <Text style={styles.detailsText}>Fri, Nov 17 at 10:00 AM</Text>
                          </View>
                          <View style = {styles.detailsContainer}>
                            <Text style={styles.detailsLabel}>End</Text>
                            <Text style={styles.detailsText}>Fri, Nov 17 at 1:00 PM</Text>
                          </View>
                          <View style = {styles.detailsContainer}>
                            <View style={styles.detailsLabel}>
                              <Ionicons name='location-outline' size={24} color='#FF7880' />
                            </View>
                            <Text style={styles.detailsText}>
                              2300 Southern Blvd{"\n"}Bronx, NY 10460
                            </Text>
                          </View>
                          <View style = {styles.detailsContainer}>
                            <Text style={styles.detailsLabel}>Notes</Text>
                            <Text style={styles.detailsText}>Meet @ 116th & Broadway</Text>
                          </View> 
                        </View>
                      </View>
                  </View>
            </ImageBackground>
        </View>
    );
};

export default CreateEventSeparately;
