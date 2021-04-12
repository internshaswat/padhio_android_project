import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Weather from './screens/Weather';

const Stack = createStackNavigator();

const opt = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

function MyStack() {
  return (
    <Stack.Navigator>
     <Stack.Screen name="Home" component={Home} options={opt} />
      <Stack.Screen name="Login" component={Login} options={opt} />
      <Stack.Screen name="Register" component={Register} options={opt} />
    <Stack.Screen name="Weather" component={Weather} options={opt} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default App;
