import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { StackHeaderProps } from '@react-navigation/stack';

import HeaderStyles from '../styles/components/HeaderStyles';

interface HeaderProps extends StackHeaderProps {
  showBack?: boolean;
  title: string;
}

export default function Header({ showBack = true, title, navigation }: HeaderProps) {
  return (
    <View style={HeaderStyles.container}>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#15B6D6"/>
      </BorderlessButton>

      <Text style={HeaderStyles.title}>{title}</Text>

      {showBack?(
        <BorderlessButton onPress={navigation.goBack}>
          <Feather name="x" size={24} color="#FF669D"/>
        </BorderlessButton>      
      ) : (
        <View/>
      )}
    </View>
  )
}