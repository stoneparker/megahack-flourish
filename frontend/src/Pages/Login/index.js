import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, Label } from '../../Utils/Styles/GlobalStyles';
import Header from '../../Components/Header';
import Button from '../../Components/Button';
import { Input } from './../../Components/Input';

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
      <Header title="Faça seu login e entre nessa economia!"/>

      <Title>Usuário</Title>
      <Input />

      <Title >Senha</Title>
      <Input />

      <Label>Esqueci a senha</Label>
      
      <Button onPress={navigateToHome} text="ENTRAR" />

      <Label onPress={navigateToRegister}>Não possui um cadastro?</Label>
    </Container>
  );
  
}

