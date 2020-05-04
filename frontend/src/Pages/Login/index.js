import React, { useState } from 'react';
import {AsyncStorage, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api'
import { Container, Title, Label } from '../../Utils/Styles/GlobalStyles';
import Header from '../../Components/Header';
import Button from '../../Components/Button';
import { Input } from './../../Components/Input';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  function navigateToRegister() {
    navigation.navigate('Register');
  }

  async function authentication() {
    try {
      const {data} = await api.post('/session', {
        email,
        password
      });
      console.log(data.id)
      await AsyncStorage.setItem('sessionUser', data.id.toString());
      navigation.navigate('Home');
    }
    catch (e) {
      alert('Usuário não encontrado')
    }

  }

  return (
    <Container>
      <Header title="Faça seu login e entre nessa economia!"/>

      <Title>Email</Title>
      <Input keyboardType="email-address" autoCapitalize="none" autoCompleteType="email" value={email} onChangeText={setEmail} />

      <Title >Senha</Title>
      <Input secureTextEntry={true} value={password} onChangeText={setPassword} />

      
      <Button onPress={authentication} text="ENTRAR" />

      <Label onPress={navigateToRegister}>Não possui um cadastro?</Label>
    </Container>
  );
  
}

