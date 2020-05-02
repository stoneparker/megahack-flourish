import React from 'react';

import { View, Text, Image, Button } from 'react-native';


import { useNavigation } from '@react-navigation/native';
import { Input } from './../../Components/Input';
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
    
    <View style={{marginTop: 80, marginBottom: 50}}>
      <Image 
        style={{width: 250}}
        source={require('./../../../assets/logotipo.png')}
      />

      <Text style={{paddingBottom: 20, bottom: 50, color: '#4F4F4F', width: 150 }}>Faça seu login e entre nessa economia!</Text>
    </View>
      
      
          <Title>  Usuário</Title>
          <Input />

          <Title >Senha</Title>
          <Input />
      


        <Text style={{textAlign: "center", color: "#4F4F4F"}}>Esqueci a senha</Text>
        
        <LoginButton onPress={navigateToHome}><Text style={{textAlign: "center", color: "white", fontSize: 20, top: 10, letterSpacing: 1.2}}>ENTRAR</Text></LoginButton>

        <Text onPress={navigateToRegister} style={{textAlign: "center", color: "#4F4F4F", marginBottom: 50}}>Não possui um cadastro?</Text>

      
    </Container>
  );
  
}

