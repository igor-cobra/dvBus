import React from 'react';
import { NavigatorContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import { Header } from '../components/Header';

export default function routes () {
  return(
    <NavigatorContainer>
      <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#F2F3F5' } }}>

      </Navigator>
    </NavigatorContainer>
  )
}