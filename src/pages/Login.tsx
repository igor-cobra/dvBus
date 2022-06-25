import React, { useState } from "react";
import { View, Image, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

import Icons from "../resources/Icons"

import MainStyle from "../styles/MainStyle"
import LoginStyle from "../styles/pages/LoginStyle";

export default function Login() {
  const navigation = useNavigation();

  function handleNavigateToMapNavigation() {
    navigation.navigate('MapNavigation');
  }

  return (
    <View style={MainStyle.container}>
      <View style={LoginStyle.imageContainer}>
        <Image
          style={LoginStyle.image}
          source={{
            uri: Icons.getInstance().main,
          }}
        />
      </View>

      <Text style={MainStyle.label}>e-mail</Text>
      <TextInput
        style={MainStyle.input}
      />

      <Text style={MainStyle.label}>senha</Text>
      <TextInput
        style={MainStyle.input}
      />

      <RectButton style={LoginStyle.loginButton} onPress={handleNavigateToMapNavigation}>
        <Text style={LoginStyle.loginButtonText}>Cadastrar</Text>
      </RectButton>
    </View>
  )
}