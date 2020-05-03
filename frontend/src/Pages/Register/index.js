import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Input, DataInput, GenInput } from '../../Components/Input';
import { Container, Title } from '../../Utils/Styles/GlobalStyles';
import Header from '../../Components/Header';
import Button from '../../Components/Button';

import { Box, GenTitle, FirstBoxDivision, SecondBoxDivision } from './styles';

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
        <Header title="Complete com suas informações..." />


        <Title>Usuário</Title>
        <Input />

        <Title>Email</Title>
        <Input />

        <Title>Senha</Title>
        <Input />

        <Title>Confirmar Senha</Title>
        <Input />

      <Box>
        <FirstBoxDivision>
          <Title>Data de Nascimento</Title>
          <DataInput />
        </FirstBoxDivision>
        <SecondBoxDivision>
          <GenTitle>Gênero</GenTitle>
          <GenInput />
        </SecondBoxDivision>
      </Box>

      <Button onPress={navigateToRegisterRent} text="PRÓXIMO" />

    </Container>
  </ScrollView>
  );
}

//<Text onPress={navigateToLogin}>Login</Text>