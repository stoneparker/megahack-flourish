import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

import { Container, Text } from './styles';

export default function Register() {
  const navigation = useNavigation();

  function navigateToRegisterRent() {
    navigation.navigate('RegisterRent');
  }

  function navigateToLogin() {
    navigation.navigate('Login');
  }
  
  return (
    <View>
        <Text onPress={navigateToRegisterRent}>Register ihuaaaaaa</Text>
        <Text onPress={navigateToLogin}>Login</Text>
    </View>
  );
}
