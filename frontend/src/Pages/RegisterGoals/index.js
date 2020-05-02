import React, { useState } from 'react';
import { View, Text, Image, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, Viewer, FinishButton, SaveAddButton, PickerBlinders, ListGoals } from './styles';
import { Input } from './../../Components/Input';

// import { Container } from './styles';

export default function RegisterGoals() {

  const [selectedValue, setSelectedValue] = useState("Escolha");

  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate('Home');
  }
  
  return (
    <Container>

    <View>
      <Image 
        style={{width: 250}}
        source={require('./../../../assets/logotipo.png')}
      />

      <Text style={{paddingBottom: 20, bottom: 50, color: '#4F4F4F', width: 150 }}>Registre suas metas...</Text>
    </View>

    <Viewer>
      <Title style={{width: 500}}>Nome da meta:</Title>
      <Input/>

      <Title style={{width: 500}}>Valor:</Title>
      <Input/>

      <Title style={{width: 500}}>Proporção:</Title>


    </Viewer>

  <ListGoals>
    <PickerBlinders
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>

        <Picker.Item label="Escolha" value="" />
        <Picker.Item label="Metinha" value="Metinha" />
        <Picker.Item label="Meta" value="Meta" />
        <Picker.Item label="Metona" value="Metona" />
        
      </PickerBlinders>
    </ListGoals>

      
         <SaveAddButton><Text style={{textAlign: "center", color: "white", fontSize: 20, top: 10, letterSpacing: 1.2}}>SALVAR E ADICIONAR OUTRA</Text></SaveAddButton>
         <FinishButton onPress={navigateToHome}><Text style={{textAlign: "center", color: "white", fontSize: 20, top: 10, letterSpacing: 1.2}}>FINALIZAR</Text></FinishButton>
      
     </Container>
  );
}
