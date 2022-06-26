import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';

import MainStyle from "../styles/MainStyle"
import MapNavigationStyles from "../styles/pages/MapNavigationStyle"
import mapMarkerImg from '../../assets/mapMarker.png';

export default function MapNavigation() {
  const navigation = useNavigation();

  function handleNavigateToLocationDetails() {

  }

  function handleNavigateToCreateLocation() {

  }

  return (
    <View style={MainStyle.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -25.7497369,
          longitude: -53.06060683,
          latitudeDelta: 0.035,
          longitudeDelta: 0.035,
        }} 
        style={MapNavigationStyles.mapStyle}
      >
        <Marker 
          icon={mapMarkerImg}
          calloutAnchor={{ x: 2.7, y: 0.8 }}
          coordinate={{ 
            latitude: -25.74887231218309,
            longitude: -53.05140153393881,
          }}
        >
          <Callout tooltip={true} onPress={handleNavigateToLocationDetails}>
            <View style={MapNavigationStyles.calloutContainer}>
              <Text style={MapNavigationStyles.calloutText}>Ponto Superação Sul</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={MainStyle.footer}>
        <Text style={MainStyle.footerText}>1 Ponto encontrado</Text>
        <RectButton style={MainStyle.create} onPress={handleNavigateToCreateLocation}>
          <Feather name="plus" size={20} color="#FFF" />
        </RectButton>
      </View>
    </View>
  )
}