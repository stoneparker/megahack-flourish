import React from 'react';
import { ScrollView, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';
import { Input, DataInput, GenInput } from './../../Components/Input';

import { Container, Title, Box, GenTitle, NextButton } from './styles';

export default function Register() {
  const navigation = useNavigation();

  function navigateToRegisterRent() {
    navigation.navigate('RegisterRent');
  }

  function navigateToLogin() {
    navigation.navigate('Login');
  }
  
  return (
  <ScrollView>
  <Container>
    <Image 
        style={{width: 250, marginTop: 15}}
        source={require('./../../../assets/logotipo.png')}
      />
      <Text style={{bottom: 50, color: '#4F4F4F', width: 200 }}>Complete com suas informações...</Text>


      <Title>Usuário</Title>
      <Input />

      <Title>Email</Title>
      <Input />

      <Title>Senha</Title>
      <Input />

      <Title>Confirmar Senha</Title>
      <Input />

    <Box>
      <Title>Data de Nascimento</Title>
      <DataInput />
      <GenTitle>Gênero</GenTitle>
      <GenInput />
    </Box>
    <NextButton onPress={navigateToRegisterRent}><Text style={{textAlign: "center", color: "white", fontSize: 20, top: 10, letterSpacing: 1.2}}>PRÓXIMO</Text></NextButton>
  </Container>
  </ScrollView>
  );
}

//<Text onPress={navigateToLogin}>Login</Text>