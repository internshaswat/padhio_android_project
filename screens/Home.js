import * as React from 'react';
import { View } from 'react-native';
import { Block, Button, Input, NavBar, Text } from 'galio-framework';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text h1>Home Screen</Text>
      <Button
        icon="tags"
        iconFamily="antdesign"
        iconSize={30}
        color="warning"
        iconColor="#fff"
        onPress={() => navigation.navigate('Login')}>
          Login
      </Button>
       <Button
       style={{marginTop:20}}
        color="warning"
        iconColor="#fff"
        onPress={() => navigation.navigate('Register')}>
          Register
      </Button>
    </View>
  );
}

export default Home;
