import React from 'react';

import { View, Text, Image, Button } from 'react-native';


import { useNavigation } from '@react-navigation/native';
import { Input } from './../../Components/Input'
import { Container, Title, LoginButton } from './styles';
import { render } from 'react-dom';


export default function Login() {
  
  const navigation = useNavigation();

  function navigateToRegister() {
    navigation.navigate('Register');
  }

  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <Container>

      <Image 
        style={{width: 250, bottom: 50}}
        source={require('./../../../assets/logotipo.png')}
      />

      <Text style={{bottom: 100, right: 50, color: '#4F4F4F' }}>Faça seu login e entre </Text>
      <Text style={{bottom: 100, right: 50, color: '#4F4F4F' }}>nessa economia!</Text>

      <View>
          <Title style={{left: 35, top: 10}}>Usuário</Title>
          <Input />

          <Title style={{left: 35, top: 10}}>Senha</Title>
          <Input />
      </View>

      <View>

        <Text style={{textAlign: "center", top: 55, color: "#4F4F4F"}}>Esqueci a senha</Text>
        
        <LoginButton onPress={navigateToHome}><Text style={{textAlign: "center", color: "white", fontSize: 20, top: 10}}>Entrar</Text></LoginButton>

        <Text onPress={navigateToRegister} style={{textAlign: "center", top: 100, color: "#4F4F4F"}}>Não possui um cadastro?</Text>

      </View>
      
    </Container>
  );
  
}

