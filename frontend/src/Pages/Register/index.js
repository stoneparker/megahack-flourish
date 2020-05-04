import React, {useState} from 'react';
import { AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Input, DataInput, GenInput } from '../../Components/Input';
import { Container, Title, Label } from '../../Utils/Styles/GlobalStyles';
import Header from '../../Components/Header';
import Button from '../../Components/Button';

import { Box, GenTitle, FirstBoxDivision, SecondBoxDivision } from './styles';

export default function Register() {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birth_date, setBirthDate] = useState('');
  const [genre, setGenre] = useState('');


  function navigateToLogin() {
    navigation.navigate('Login');
  }
  
  async function registerUser() {
    if(username === '' || email === '' || password === '' || confirmPassword === '' || birth_date === '' || genre === '') {
      alert('Preencha todos os campos.');
      return;
    }
    else if (password !== confirmPassword) {
      alert('As senhas não batem.');
      return;
    }
    else if (!email.includes('@')) {
      alert('Insira um email válido.');
      return;
    }
    else {
      const data = {
        name: username,
        password,
        email,
        confirmPassword,
        birth_date,
        genre
      }
      await AsyncStorage.setItem('UserData', JSON.stringify(data));
      navigation.navigate('RegisterRent');
    }
  }

  return (
    <Container>
        <Header title="Complete com suas informações..." />


        <Title>Usuário</Title>
        <Input value={username} onChangeText={setUsername} />

        <Title>Email</Title>
        <Input keyboardType="email-address" autoCapitalize="none" autoCompleteType="email" value={email} onChangeText={setEmail} />

        <Title>Senha</Title>
        <Input secureTextEntry={true} value={password} onChangeText={setPassword} />

        <Title>Confirmar Senha</Title>
        <Input secureTextEntry={true} value={confirmPassword} onChangeText={setConfirmPassword} />

      <Box>
        <FirstBoxDivision>
          <Title>Data de Nascimento</Title>
          <DataInput value={birth_date} onChangeText={setBirthDate} />
        </FirstBoxDivision>
        <SecondBoxDivision>
          <GenTitle>Gênero</GenTitle>
          <GenInput value={genre} onChangeText={setGenre} />
        </SecondBoxDivision>
      </Box>

      <Label onPress={navigateToLogin} >Ir para Login</Label>
      <Button onPress={registerUser} text="PRÓXIMO" />

    </Container>
  );
}

//<Text onPress={navigateToLogin}>Login</Text>