import React, { useState } from "react";
import { View, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";

import Icons from "../resources/Icons"

import MainStyle from "../styles/MainStyle"
import CreateAccountStyle from "../styles/pages/CreateAccountStyle";

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleNavigateToMapNavigation() {
    navigation.navigate('MapNavigation');
  }

  return (
    <View style={MainStyle.container}>
      <Text style={MainStyle.label}>e-mail</Text>
      <TextInput
        style={MainStyle.input}
      />

      <Text style={MainStyle.label}>senha</Text>
      <TextInput
        style={MainStyle.input}
      />

      <RectButton style={CreateAccountStyle.createAccountButton} onPress={handleNavigateToMapNavigation}>
        <Text style={CreateAccountStyle.createAccountButtonText}>Cadastrar</Text>
      </RectButton>
    </View>
  )
}