import React, { useState } from 'react';
import { AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import Header from '../../Components/Header';
import Button from '../../Components/Button';
import { Container, Title } from '../../Utils/Styles/GlobalStyles';
import { Input, SelectInput } from './../../Components/Input';

export default function RegisterGoals() {

  const [selectedValue, setSelectedValue] = useState("Selecione...");

  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate('Home');
  } 

  async function registerFullUser() {
    const userData = await AsyncStorage.getItem('UserData');
    const userRent = await AsyncStorage.getItem('UserRent');
    const userCosts = await AsyncStorage.getItem('UserCosts');
    const userDebts = await AsyncStorage.getItem('UserDebts');

    const responseUserData = await api.post('/user', {
      ...JSON.parse(userData),
      rent: userRent
    });

    JSON.parse(UserCosts).map(async ({itemName, itemValue})=> {
      let name = itemName;
      let value = itemValue;
      await api.post(`/user/${responseUserData.data.id}/cost_type`, {
        name,
        value
      });
    });

    JSON.parse(userDebts).map(async ({itemName, itemValue})=> {
        let name = itemName;
        let value = itemValue;
        await api.post(`/user/${responseUserData.data.id}/debt`, {
          name,
          value
        });
    });
    

    await AsyncStorage.setItem('sessionUser', responseUserData.data.id.toString());

  }

  const data = [
    {
      label: 'Selecione...',
      value: 'Selecione...',
      key: 'item-1',
    },
    {
      label: 'Meta',
      value: 'Meta',
      key: 'item-2',
    },
    {
      label: 'Metinha',
      value: 'Metinha',
      key: 'item-3',
    },
    {
      label: 'Metona',
      value: 'Metona',
      key: 'item-4',
    },
  ]

  return (
    <Container>
      <Header title="Registre suas metas..." />

      <Title>Nome da meta:</Title>
      <Input/>

      <Title>Valor:</Title>
      <Input/>

      <Title>Proporção:</Title>
      <SelectInput selectedValue={selectedValue} setSelectedValue={setSelectedValue} data={data} />

      <Button onPress={navigateToHome} text="SALVAR E ADICIONAR OUTRO" />
      <Button onPress={registerFullUser} text="FINALIZAR" />
    </Container>
  );
}
