import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

import { Container, Title } from './styles';

export default function Register() {
  const navigation = useNavigation();

  function navigateToRegisterRent() {
    navigation.navigate('RegisterRent');
  }

  function navigateToLogin() {
    navigation.navigate('Login');
  }
  
  return (
  <Container>

    <View>
        
        <Text onPress={navigateToRegisterRent}>Próximo</Text>
        <Text onPress={navigateToLogin}>Login</Text>

    </View>

  </Container>
  );
}
