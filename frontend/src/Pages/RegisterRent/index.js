import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Input } from '../../Components/Input';
import { Container, Title } from '../../Utils/Styles/GlobalStyles';
import Header from '../../Components/Header';
import Button from '../../Components/Button';

export default function RegisterRent() {
  const navigation = useNavigation();

  function navigateToRegisterCosts() {
    navigation.navigate('RegisterCosts');
  }

  return (
    <Container>
      <Header title="Informe um pouco sobre suas finanças..." />

      <Title>Quanto você ganha?</Title>
      <Input/>

      <View style={{flexDirection: "row"}}>
        <Image 
            style={{width: 100, marginRight: 100}}
            source={require('../../../assets/icons8-carro.png')}
        />
        <Image 
            style={{width: 100, marginRight: 30, right: 60, top: 20}}
            source={require('../../../assets/icons8-dinheiro.png')}
        />
      </View>
      <View style={{flexDirection: "row"}}>
        <Image 
            style={{width: 100, marginRight: 100, top: 20}}
            source={require('../../../assets/icons8-praia.png')}
        />
        <Image 
            style={{width: 130}}
            source={require('../../../assets/icons8-macbook.png')}
        />
      </View>

      <Button onPress={navigateToRegisterCosts} text="PRÓXIMO" />
    </Container>

      
  );
}

//
