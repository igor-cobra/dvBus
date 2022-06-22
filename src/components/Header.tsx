import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, StyleSheet, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { StackHeaderProps } from '@react-navigation/stack';

import './styles.css';

interface HeaderProps extends StackHeaderProps {
  showCancel?: boolean;
  title: string;
}

export default function Header({ showCancel = true, title, navigation }: HeaderProps) {
  function handleCancelCreateBusStop() {
    navigation.navigate('BusPointsMap');
  }

  return (
    <View style={styles.container}>
    </View>
  )
}