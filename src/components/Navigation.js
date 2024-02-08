import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/home';
import Page1 from '../pages/page1';


const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Group>
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="page1" component={Page1} />
        </Stack.Group>
    </Stack.Navigator>
  );
};

export default Navigation;