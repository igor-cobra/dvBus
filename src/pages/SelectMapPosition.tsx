import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { MapEvent, Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import MainStyle from '../styles/MainStyle';
import SelectMapPositionStyle from '../styles/pages/SelectMapPositionStyle'

export default function SelectMapPosition() {
  const navigation = useNavigation();
  const [position, setPosition] = useState({ latitude: 0, longitude: 0});

  function handleSelectMapPosition(event: MapEvent) {
    setPosition(event.nativeEvent.coordinate);
  }

  function handleNextStep() {
    navigation.navigate('BusData', { position });
  }

  return (
    <View style={MainStyle.container}>
      <MapView 
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -25.7497369,
          longitude: -53.06060683,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        onPress={handleSelectMapPosition}
        style={SelectMapPositionStyle.mapStyle}
      >
        { !!position.latitude && (
          <Marker 
            coordinate={position}
          />
        )}
      </MapView>

      { !!position.latitude && (
        <RectButton style={SelectMapPositionStyle.nextButton} onPress={handleNextStep}>
          <Text style={SelectMapPositionStyle.nextButtonText}>Próximo</Text>
        </RectButton>
      )}
    </View>
  )
}