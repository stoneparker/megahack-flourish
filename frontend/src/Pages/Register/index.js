import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

import { Container, Title } from './styles';
import { Input } from './../../Components/Input';

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
    <Image 
        style={{width: 250, top: 25}}
        source={require('./../../../assets/logotipo.png')}
      />

    <View>
        
        <Text onPress={navigateToRegisterRent}>Próximo</Text>
        <Text onPress={navigateToLogin}>Login</Text>

        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        
    </View>

  </Container>
  );
}
