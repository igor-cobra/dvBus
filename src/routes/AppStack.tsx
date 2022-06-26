import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Header from '../components/Header';
import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';
import MapNavigation from '../pages/MapNavigation';
import BusDetail from '../pages/BusDetail';
import SelectMapPosition from '../pages/SelectMapPosition';
import BusData from '../pages/BusData';

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
          header: (props) => <Header title="Criar Conta" showCancel={false} showBack={true} {...props} />,
        }}
      />

      <Screen 
        name="MapNavigation" 
        component={MapNavigation}
        options={{ 
          headerShown: true,
          header: (props) => <Header title="Pontos registrados" showCancel={false} showBack={true} {...props} />,
        }}
      />

      <Screen 
        name="BusDetail" 
        component={BusDetail}
        options={{ 
          headerShown: true,
          header: (props) => <Header title="Informações detalhadas" showCancel={false} showBack={true} {...props} />,
        }}
      />

      <Screen 
        name="SelectMapPosition" 
        component={SelectMapPosition}
        options={{ 
          headerShown: true,
          header: (props) => <Header title="Selecione no mapa" showBack={false} {...props} />,
        }}
      />

      <Screen 
        name="BusData" 
        component={BusData}
        options={{ 
          headerShown: true,
          header: (props) => <Header title="Selecione no mapa" showBack={false} {...props} />,
        }}
      />
      </Navigator>
    </NavigationContainer>
  )
}