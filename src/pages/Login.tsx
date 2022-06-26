import React from "react";
import { View, Image, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';

import Icons from "../resources/Icons"

import MainStyle from "../styles/MainStyle"
import LoginStyle from "../styles/pages/LoginStyle";

export default function Login() {
  const navigation = useNavigation();

  function handleNavigateToMapNavigation() {
    navigation.navigate('MapNavigation');
  }

  function handleNavigateToCreateAccount() {
    navigation.navigate('CreateAccount');
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
        <Text style={LoginStyle.loginButtonText}>Login</Text>
      </RectButton>
      
      <View style={MainStyle.footer}>
        <Text style={MainStyle.footerText}>Não possui uma conta?</Text>
        <RectButton style={MainStyle.create} onPress={handleNavigateToCreateAccount}>
          <Feather name="plus" size={20} color="#FFF" />
        </RectButton>
      </View>
    </View>
  )
}