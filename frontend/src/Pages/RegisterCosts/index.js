import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import { LabelAdd } from '../../Components/LabelAdd';
import { List } from '../../Components/List';
import { Container } from '../../Utils/Styles/GlobalStyles';
import Header from '../../Components/Header';
import Button from '../../Components/Button';

export default function RegisterCosts() {
  const navigation = useNavigation();

  function navigateToRegisterGoals() {
    navigation.navigate('RegisterGoals');
  }

  const data = [
    {
      itemName: 'Aluguel',
      itemValue: 'R$ 1500,00',
      key: 'item-1'
    },
    {
      itemName: 'Aluguel',
      itemValue: 'R$ 1500,00',
      key: 'item-2'
    },
    {
      itemName: 'Aluguel',
      itemValue: 'R$ 1500,00',
      key: 'item-3'
    },
  ]

  return (
    <ScrollView>
      <Container>
        <Header title="Altere sua base de gastos..." />

        <List title="Gastos" data={data} />
        <LabelAdd />

        <List title="Dívidas" data={data} />
        <LabelAdd />

        <Button onPress={navigateToRegisterGoals} text="PRÓXIMO"/>
      </Container>
    </ScrollView>
  );
}
