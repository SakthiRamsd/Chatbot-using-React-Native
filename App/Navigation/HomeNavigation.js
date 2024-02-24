import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './../Screens/Home'
import Chat from '../Screens/Chat';

const Stcak = createNativeStackNavigator();
export default function HomeNavigation() {
  return (
   <Stcak.Navigator screenOptions={{headerShown:false}}>
        <Stcak.Screen name='home' component={Home}/>
        <Stcak.Screen name='chat' component={Chat}/>
   </Stcak.Navigator>
  )
}