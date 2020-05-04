import React, {useState} from 'react';
import { View, Image, AsyncStorage, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Input } from '../../Components/Input';
import { Container, Title } from '../../Utils/Styles/GlobalStyles';
import Header from '../../Components/Header';
import Button from '../../Components/Button';

export default function RegisterRent() {
  const navigation = useNavigation();
  const [rent, setRent] = useState('');

  async function registerRent() {

    if(rent === '') {
      alert('Preencha sua renda.');
      return;
    }
    else {
      await AsyncStorage.setItem('UserRent', rent);
      navigation.navigate('RegisterCosts');
    }
  }

  return (
    <Container
    keyboardShouldPersistTaps='handled'>
      <Header title="Informe um pouco sobre suas finanças..." />

      <Title>Quanto você ganha?</Title>
      <Input keyboardType="numeric" value={rent} onChangeText={setRent} />

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

      <Button onPress={registerRent} text="PRÓXIMO" />
    </Container>

      
  );
}

//
