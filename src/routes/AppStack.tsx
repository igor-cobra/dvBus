import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Login from "../pages/Login"
import Header from '../components/Header';

import MapNavigation from '../pages/MapNavigation'
import CreateAccount from '../pages/CreateAccount'

export default function routes () {
  return(
    <NavigationContainer>
      <Navigator 
        screenOptions={{
          headerShown: false, 
          cardStyle: { backgroundColor: '#F2F3F5' }
      }}>
        
      <Screen 
        name="Login"
        component={Login}
      />

      <Screen 
          name="CreateAccount" 
          component={CreateAccount}
          options={{ 
            headerShown: true,
            header: (props) => <Header title="Criar Conta" showCancel={false} {...props} />,
          }}
      />

      <Screen 
          name="MapNavigation" 
          component={MapNavigation}
          options={{ 
            headerShown: true,
            header: (props) => <Header title="Pontos registrados" showCancel={false} {...props} />,
          }}
      />
      </Navigator>
    </NavigationContainer>
  )
}