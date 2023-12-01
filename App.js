import React from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import image from './assets/background.png';
import {PublicSans_700Bold,PublicSans_400Regular, useFonts} from "@expo-google-fonts/public-sans";
import GroupsScreen from './screens/GroupsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NewGroup from './screens/NewGroup';

const HomeScreen = () => {
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
        buttonText: {
            color: 'white',
            fontFamily: 'Public Sans',
            fontSize: 24,
            textAlign: 'center',
            marginVertical: 20,
        },
    });

    const handleGroupsPress = () => {
        navigation.navigate('Groups');
    };

    const handleNewGroup = () => {
        navigation.replace('Create New Group');
    };


    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <TouchableOpacity onPress={handleGroupsPress}>
                    <Text style={styles.buttonText}>Groups</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNewGroup}>
                    <Text style={styles.buttonText}>Create New Group</Text>
                </TouchableOpacity>

            </ImageBackground>
        </View>
    );
};

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
          <Tab.Navigator
                      screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if(route.name=='Home'){
                          iconName = focused? 'home' : 'home-outline';
                        }else if(route.name=='Groups'){
                          iconName = focused? 'clipboard' : 'clipboard-outline';
                        }else if(route.name==' '){
                          iconName = focused? 'add-circle' : 'add-circle';
                          return <Ionicons name={iconName} 
                          size={75} 
                          color={'#FF7880'}
                          style={{
                            bottom: 5,
                            height: 100,
                            borderRadius: 68
                          }}/>;
                        }else if(route.name=='Events'){
                          iconName = focused? 'people' : 'people-outline';
                        }else if(route.name=='Profile'){
                          iconName = focused? 'person-circle' : 'person-circle-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={color}  />;
                        },
                        tabBarActiveTintColor: '#FF7880',
                        tabBarInactiveTintColor: '#8B8B8B',
                        tabBarLabelStyle: { textAlign: 'center' },
                        tabBarIndicatorStyle: {
                        borderBottomColor: '#C2D5A8',
                        borderBottomWidth: 2,
                        },
        
                        tabBarLabelStyle: {
                        textTransform: 'none',
                        },
            })}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Groups" component={GroupsScreen} />
            <Tab.Screen name=" " 
            component={NewGroup}
            />
            <Tab.Screen name="Events" component={HomeScreen}/>
            <Tab.Screen name="Profile" component={HomeScreen}/>
          </Tab.Navigator>
      </NavigationContainer>
    );
};

export default App;
