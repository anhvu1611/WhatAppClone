import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Colors } from './src/theme/Colors'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from './src/screens/ChatScreen';
import HomeScreen from './src/screens/HomeScreen'
import ContactScreen from './src/screens/ContactScreen'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="ContactScreen" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App