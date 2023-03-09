import React, { useState } from "react";
import { View, Image, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';

import Icons from '../resources/Icons';

import { authUser, findUserData } from '../resources/login';

import MainStyle from "../styles/MainStyle"
import LoginStyle from "../styles/pages/LoginStyle";

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleAuthenticateLogin() {
    let userUid = await authUser(email, password);
    let userFound = await findUserData(userUid);

    if (userFound) {
      navigation.navigate('MapNavigation');
    }
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
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <Text style={MainStyle.label}>senha</Text>
      <TextInput
        style={MainStyle.input}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <RectButton style={LoginStyle.loginButton} onPress={handleAuthenticateLogin}>
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