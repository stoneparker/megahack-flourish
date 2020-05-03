import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, NextButton } from './styles';

export default function RegisterCosts() {
  const navigation = useNavigation();

  function navigateToRegisterGoals() {
    navigation.navigate('RegisterGoals');
  }

  return (
    <ScrollView>
      <Container>
        <View>
        <Image 
          style={{width: 250}}
          source={require('./../../../assets/logotipo.png')}
        />
        <Text style={{paddingBottom: 20, bottom: 50, color: '#4F4F4F', width: 150 }}>Altere sua base de gastos...</Text>
        </View>
        <Text style={{fontSize: 17, marginBottom: 15, alignSelf: 'flex-start', marginLeft: 25}}>Gastos...</Text>
        <View style={{flex: 1, alignItems: 'center', flexDirection: 'column', width: '100%', justifyContent: 'center'}}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',  backgroundColor: '#51B2BC', width: '90%', borderRadius: 50, padding: 15, marginBottom: 15}}>
            <Text style={{fontSize: 24, color: 'white'}}>Aluguel</Text>
            <Text style={{fontSize: 24, color: 'white'}}>R$ 1200,00</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',  backgroundColor: '#51B2BC', width: '90%', borderRadius: 50, padding: 15, marginBottom: 15}}>
            <Text style={{fontSize: 24, color: 'white'}}>Aluguel</Text>
            <Text style={{fontSize: 24, color: 'white'}}>R$ 1200,00</Text>
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', width: '80%', marginBottom: 25}}>
          <Text style={{fontSize: 24}}>Adicionar</Text>
          <Text style={{fontSize: 36}}>+</Text>
        </View>

        <Text style={{fontSize: 17, marginBottom: 15, alignSelf: 'flex-start', marginLeft: 25}}>Dívidas...</Text>
        <View style={{flex: 1, alignItems: 'center', flexDirection: 'column', width: '100%', justifyContent: 'center'}}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',  backgroundColor: '#51B2BC', width: '90%', borderRadius: 50, padding: 15, marginBottom: 15}}>
            <Text style={{fontSize: 24, color: 'white'}}>Aluguel</Text>
            <Text style={{fontSize: 24, color: 'white'}}>R$ 1200,00</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',  backgroundColor: '#51B2BC', width: '90%', borderRadius: 50, padding: 15, marginBottom: 15}}>
            <Text style={{fontSize: 24, color: 'white'}}>Aluguel</Text>
            <Text style={{fontSize: 24, color: 'white'}}>R$ 1200,00</Text>
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', width: '80%', marginBottom: 25}}>
          <Text style={{fontSize: 24}}>Adicionar</Text>
          <Text style={{fontSize: 36}}>+</Text>
        </View>
        <NextButton onPress={navigateToRegisterGoals}><Text style={{textAlign: "center", color: "white", fontSize: 20, top: 10, letterSpacing: 1.2}}>PRÓXIMO</Text></NextButton>

      </Container>
    </ScrollView>
  );
}
