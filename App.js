import React from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import image from './assets/background.png';
import {PublicSans_700Bold,PublicSans_400Regular, useFonts} from "@expo-google-fonts/public-sans";
import GroupsScreen from './screens/GroupsScreen';
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
        navigation.navigate('Create New Group');
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

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Groups" component={GroupsScreen} />
                <Stack.Screen name="Create New Group" component={NewGroup} />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
