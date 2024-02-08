import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from '../pages/home';
import page1 from '../pages/page1';


const Navigation = () => {

    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Group>
            <Stack.Screen name="home" component={home} />
            <Stack.Screen name="page1" component={page1} />



        </Stack.Group>

    </Stack.Navigator>
  );
};

export default Navigation;