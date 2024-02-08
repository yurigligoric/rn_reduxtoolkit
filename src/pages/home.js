import { View, Text,TouchableHighlight } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement} from '../state/counterSlice';


const Home = () => {
  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();

  const navigate = useNavigation();

  const handlePress = () =>{
    navigate.navigate('page1');

  };


  return (
    <View>
      <Text>home</Text>
      <Text style={{fontSize: '24px'}}>{count}</Text>

      <TouchableHighlight onPress={handlePress}>
         <Text>GOTO PAGE1</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={()=>dispatch(increment())}>
         <Text>Increment</Text>
      </TouchableHighlight>

    </View>
  );
};

export default Home;
