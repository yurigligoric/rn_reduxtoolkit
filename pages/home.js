import { View, Text,TouchableHighlight } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigate = useNavigation();

  const handlePress =() =>{
    navigate.navigate('page1');

  };
  return (
    <View>
      <Text>home</Text>
      <TouchableHighlight onPress={handlePress}>
       <Text>GOTO PAGE1</Text>
      </TouchableHighlight>

    </View>
  );
};

export default Home;
