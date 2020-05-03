import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


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
      <Button onPress={navigateToHome} text="FINALIZAR" />
    </Container>
  );
}
