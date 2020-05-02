import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input } from './../../Components/Input';
import { Container, Title, Viewer, NextButton } from './styles';

// import { Container } from './styles';

export default function RegisterRent() {
  const navigation = useNavigation();

  function navigateToRegisterCosts() {
    navigation.navigate('RegisterCosts');
  }

  return (
    <Container>
    
    <View>
      <Image 
        style={{width: 250, marginTop: 60}}
        source={require('./../../../assets/logotipo.png')}
      />

      <Text style={{paddingBottom: 20, bottom: 50, color: '#4F4F4F', width: 150 }}>Informe um pouco sobre suas finanças...</Text>
    </View>

    <Viewer>
        <Title>Quanto ganha?</Title>
        <Input></Input>
    </Viewer>

    <View style={{flexDirection: "row"}}>

    <Image 
        style={{width: 100, marginRight: 100}}
        source={require('./../../../assets/icons8-carro.png')}
    />

    <Image 
        style={{width: 100, marginRight: 30, right: 60, top: 20}}
        source={require('./../../../assets/icons8-dinheiro.png')}
    />

    </View>

    <View style={{flexDirection: "row"}}>

    <Image 
        style={{width: 100, marginRight: 100, top: 20}}
        source={require('./../../../assets/icons8-praia.png')}
    />

    <Image 
        style={{width: 130}}
        source={require('./../../../assets/icons8-macbook.png')}
    />

    </View>

    <Viewer>
        <NextButton onPress={navigateToRegisterCosts}><Text style={{textAlign: "center", color: "white", fontSize: 20, top: 10, letterSpacing: 1.2}}>PRÓXIMO</Text></NextButton>
    </Viewer>
  
      
       

              
    </Container>

      
  );
}

//
