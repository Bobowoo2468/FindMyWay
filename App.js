import React from 'react';
import { View, Text, Image, ScrollView, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './App/Profile/Profile';
import Map from './App/Map/Map'
import LanguageSelect from './App/LanguageSelect/LanguageSelect'

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
  <View>
    <Button title="Go to Profile"
        onPress={() =>
        navigation.navigate('Profile', { name: 'Bo Tuan', occupation: "Student @ NUS",
                            description: "Inclusiveness is a lifestyle",
                            hobbies: "Playing the piano", languages: "English, Chinese, German",
                            likes: "20", })
      }
      />

    <Button title="Go to Map"
        onPress={() =>
        navigation.navigate('Map', { name: 'Google', latitude: 37.4220936, longitude: -122.083922, })
      }
      />

    <Button title="Go to Language Select"
        onPress={() =>
        navigation.navigate('LanguageSelect', { name: 'Language Select', })
      }
      />
  </View>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return         <ScrollView>
                     <Profile name = {route.params.name}
                              occupation = {route.params.occupation}
                              description = {route.params.description}
                              hobbies = {route.params.hobbies}
                              languages = {route.params.languages}
                              likes = {route.params.likes}
                              navigation = {navigation}
                              />
                 </ScrollView>
};

const MapScreen = ({ navigation, route }) => {
    return <Map latitude = {route.params.latitude} longitude = {route.params.longitude}/>
};

const LanguageSelectScreen = ({ navigation, route }) => {
    return (<LanguageSelect navigation = {navigation }/>);
}

const DestinationSelectScreen = ({ navigation, route }) => {
    return (<Text></Text>);
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="LanguageSelect" component={LanguageSelectScreen} options = {{ title: "SELECT LANGUAGE" }} />
        <Stack.Screen name="DestinationSelect" component={DestinationSelectScreen} options = {{ title: "INPUT DESTINATION" }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;