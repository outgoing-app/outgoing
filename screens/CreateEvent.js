// react native
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ImageBackground, Pressable, TextInput, ScrollView, KeyboardAvoidingView} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import image from '../assets/background.png'
import { useNavigation } from '@react-navigation/native'
import { PublicSans_700Bold, PublicSans_400Regular, useFonts } from "@expo-google-fonts/public-sans"
import UserIcon from '../components/UserIcon'
import GroupIcon from '../components/GroupIcon'
import { CheckBox } from '@rneui/themed'
import CreateButton from '../components/CreateButton'
import SelectDropdown from 'react-native-select-dropdown'

/*db = connectDB()
console.log(db.getEvents())*/

const CreateEvent = (props) => {
  console.log(props.groups)

  const [selectedGroups, setSelectedGroups] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const groupOptions = props.groups.map(item => {
    return {name: item.name, type: 'group'}
  });
  const userOptions = props.users.map(item => {
    return {name: item.firstname+" "+item.lastname, type: 'user'}
  });
  let allOptions = userOptions.concat(groupOptions)

  const [selectedIndex, setIndex] = React.useState(0);
  const handleCreateEvent = console.log("created");

  const[name, setName] = useState('');
  const[startTime, setStartTime] = useState('');
  const[startDate, setStartDate] = useState('');
  const[endTime, setEndTime] = useState('');
  const[endDate, setEndDate] = useState('');
  const[addressLine1, setAddressLine1] = useState('');
  const[addressLine2, setAddressLine2] = useState('');
  const[note, setNote] = useState('');

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
          height: 610,
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
        formContainer: {
          flexDirection: 'row'
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
        scrollContainer: {
          alignItems: 'center',
        },
    });

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                  <View style={styles.outerContainer}>
                  <ScrollView>
                      <View style={styles.formContainer}>
                        <Text style={styles.headerText}>Create event:  </Text>
                        <TextInput       
                          onChangeText={setName}
                          value={name}
                          style={styles.headerText}
                          placeholder='Name'
                          placeholderTextColor='FF7880'
                          />
                      </View>
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
                        <UserIcon initials='A' size={35}/>
                      </View>
                      <View style={styles.innerContainer}>
                        <Text style={styles.subText}>Invitees</Text>
                        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                          <SelectDropdown 
                          data={allOptions.map(item => {
                            return item.name
                          })}
                          onSelect={(selectedItem, index) => {
                            console.log(index)
                            if(allOptions[index].type=='user'){
                              setSelectedUsers([
                                ...selectedUsers,
                                selectedItem.charAt(0)
                              ]);
                            }else{
                              setSelectedGroups([
                                ...selectedGroups,
                                selectedItem.charAt(0)
                              ]);
                            }
                          }}
                          buttonTextAfterSelection={(selectedItem, index) => {return selectedItem}}
                          rowTextForSelection={(item, index) => {return item}}
                          buttonStyle={{
                            width: 90,
                            height: 30,
                          }}
                          buttonTextStyle={{fontSize: 10}}
                          rowTextStyle={{fontSize: 10}}
                          rowStyle={{
                            width: 90,
                            height: 30,
                          }}
                          defaultButtonText='Select'
                          />
                          {selectedUsers.map(initial => (
                            <UserIcon initials={initial} size={35}/>
                          ))}
                          {selectedGroups.map(initial => (
                            <GroupIcon groupName={initial}/>
                          ))}
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
                            title="Create voting"
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
                              <View style={{flexDirection: 'row'}}>
                                <TextInput       
                                    onChangeText={setStartDate}
                                    value={startDate}
                                    style={styles.detailsText}
                                    placeholder='MM/DD/YYYY'
                                  />
                                  <Text>    </Text>
                                  <TextInput       
                                    onChangeText={setStartTime}
                                    value={startTime}
                                    style={styles.detailsText}
                                    placeholder='HH:MM'
                                  />
                              </View>
                            </View>
                            <View style = {styles.detailsContainer}>
                              <Text style={styles.detailsLabel}>End</Text>
                              <View style={{flexDirection: 'row'}}>
                                <TextInput       
                                    onChangeText={setEndDate}
                                    value={endDate}
                                    style={styles.detailsText}
                                    placeholder='MM/DD/YYYY'
                                  />
                                  <Text>    </Text>
                                  <TextInput       
                                    onChangeText={setEndTime}
                                    value={endTime}
                                    style={styles.detailsText}
                                    placeholder='HH:MM'
                                  />
                              </View>
                            </View>
                            <View style = {styles.detailsContainer}>
                              <View style={styles.detailsLabel}>
                                <Ionicons name='location-outline' size={24} color='#FF7880' />
                              </View>
                              <View style = {{flexDirection: 'column'}}>
                                <TextInput
                                  onChangeText = {setAddressLine1}
                                  value={addressLine1}
                                  style={styles.detailsText}
                                  placeholder='Address Line 1'
                                />
                                <TextInput
                                  onChangeText = {setAddressLine2}
                                  value={addressLine2}
                                  style={styles.detailsText}
                                  placeholder='Address Line 2'
                                />
                              </View>
                            </View>
                            <View style = {styles.detailsContainer}>
                              <Text style={styles.detailsLabel}>Notes</Text>
                              <TextInput
                                onChangeText = {setNote}
                                value={note}
                                style={styles.detailsText}
                                placeholder='Additional Info'
                              />
                            </View> 
                          </View>
                        </View>
                        <CreateButton buttonText="Create Event" onPress={handleCreateEvent} />
                    </ScrollView>
                  </View>
            </ImageBackground>
        </View>
    );
};

export default CreateEvent;
