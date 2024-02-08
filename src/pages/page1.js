import { View, Text, TouchableHighlight } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Page1 = () => {

  const navigate = useNavigation();
  const handlePress =()=>{
    navigate.navigate('home');
  };
  return (
    <View>
       <Text>Page 1</Text>
      <TouchableHighlight onPress={handlePress}>
        <Text>GOTO Home</Text>
      </TouchableHighlight>

    </View>
  );
};

export default Page1;
