import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import TelaMapa from './src/pages/TelaMapa';
import Login from './src/pages/Login';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">

      <Stack.Screen name="Home" component={Home} />

      <Stack.Screen name="Login" component={Login} 
          options={{
            headerShown: false,
            title: '',
            headerTransparent: true,
            headerTintColor: '#000',
          }}
        />        

        <Stack.Screen name="Sobre" component={Sobre} 
          options={{
            headerShown: true,
            title: 'Detalhes',
            headerTransparent: false,
            headerTintColor: '#000',
          }}        
        />

        <Stack.Screen name="TelaMapa" component={TelaMapa} 
          options={{
            headerShown: true,
            title: '',
            headerTransparent: true,
            headerTintColor: '#000',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


// APP

