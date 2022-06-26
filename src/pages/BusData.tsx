import React, { useState } from 'react';
import { ScrollView, View, Switch, Text, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

import MainStyle from '../styles/MainStyle';
import BusDataStyle from '../styles/pages/BusDataStyle';

interface BusDataRouteParams {
  position: { latitude: number, longitude: number};
}

export default function BusData() {
  const route = useRoute();
  const navigation = useNavigation();

  const [open_on_weekends, setOpenOnWeekends] = useState(false);

  const params = route.params as BusDataRouteParams;
  const position = params.position;

  function handleCreateOrphanage() {
    
  }

  async function handleSelectImages() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      alert('Eita! Precisamos de acesso às suas fotos...');
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);
  }

  return (
    <ScrollView style={MainStyle.container} contentContainerStyle={{ padding: 24 }}>
      <Text style={BusDataStyle.title}>Dados</Text>

      <Text style={BusDataStyle.label}>Nome</Text>
      <TextInput
        style={BusDataStyle.input}
      />

      <Text style={BusDataStyle.label}>Informação</Text>
      <TextInput
        style={[BusDataStyle.input, { height: 110 }]}
        multiline
      />

      <Text style={BusDataStyle.label}>Fotos</Text>
      <TouchableOpacity style={BusDataStyle.imagesInput} onPress={handleSelectImages}>
        <Feather name="plus" size={24} color="#15B6D6" />
      </TouchableOpacity>

      <Text style={BusDataStyle.label}>Horario de visitas</Text>
      <TextInput
        style={BusDataStyle.input}
      />

      <RectButton style={BusDataStyle.nextButton} onPress={handleCreateOrphanage}>
        <Text style={BusDataStyle.nextButtonText}>Cadastrar</Text>
      </RectButton>
    </ScrollView>
  )
}