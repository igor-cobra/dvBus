import React from 'react';
import { Image, View, ScrollView, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';

import { RectButton } from 'react-native-gesture-handler';
import Icons from "../resources/Icons"

import MainStyle from "../styles/MainStyle"
import BusDetailStyle from "../styles/pages/BusDetailStyle"

export default function BusDetail() {
  return (
    <ScrollView style={MainStyle.container}>
      <View style={BusDetailStyle.imagesContainer}>
        <ScrollView horizontal pagingEnabled>
          <Image style={BusDetailStyle.image} source={{ uri: Icons.getInstance().stop }} />
          <Image style={BusDetailStyle.image} source={{ uri: Icons.getInstance().stop }} />
          <Image style={BusDetailStyle.image} source={{ uri: Icons.getInstance().stop }} />
        </ScrollView>
      </View>

      <View style={BusDetailStyle.detailsContainer}>
      <Text style={BusDetailStyle.title}>Ponto Academia Superação Sul</Text>
      <Text style={BusDetailStyle.description}>Ponto sentido UTFPR em frente a academia Superação Sul.</Text>
      
      <View style={BusDetailStyle.mapContainer}>
        <MapView 
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: -25.7497369,
            longitude: -53.06060683,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }} 
          zoomEnabled={false}
          pitchEnabled={false}
          scrollEnabled={false}
          rotateEnabled={false}
          style={BusDetailStyle.mapStyle}
        >
          <Marker
            coordinate={{ 
              latitude: -25.7497369,
              longitude: -53.06060683,
            }}
          />
        </MapView>

        <View style={BusDetailStyle.routesContainer}>
          <Text style={BusDetailStyle.routesText}>Ver rotas no Google Maps</Text>
        </View>
      </View>
      
      <View style={BusDetailStyle.separator} />

      <Text style={BusDetailStyle.title}>Horários para UTFPR</Text>
      <Text style={BusDetailStyle.description}>Horários previstos para o ônibus passar com destino a UTFPR</Text>

      <View style={BusDetailStyle.scheduleContainer}>
        <View style={[BusDetailStyle.scheduleItem, BusDetailStyle.scheduleItemBlue]}>
          <Feather name="clock" size={40} color="#2AB5D1" />
          <Text style={[BusDetailStyle.scheduleText, BusDetailStyle.scheduleTextBlue]}>Segunda à Sexta 7h</Text>
        </View>
      </View>
    </View>
  </ScrollView>
)}