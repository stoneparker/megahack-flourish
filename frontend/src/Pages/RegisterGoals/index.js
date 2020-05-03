import React, { useState } from 'react';
import { View, Text, Image, Picker, Button, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, Viewer, FinishButton, SaveAddButton, ListGoals } from './styles';
import { Input } from './../../Components/Input';

export default function RegisterGoals() {

  const [selectedValue, setSelectedValue] = useState("Selecione...");
  const [iosPickerCollapsed, setIosPickerCollapsed] = useState("none")

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

    </Viewer> 
      <Title style={{width: 500}}>Proporção:</Title>
      {(()=> {if(Platform.OS === 'ios'){
        return  (
          <>
            <ListGoals>
              <Button title={selectedValue} color="white" onPress={() => setIosPickerCollapsed('flex')} />
            </ListGoals>

            <View style={{backgroundColor: 'white', width: '100%', position: 'absolute', bottom: 0, zIndex: 15, display: iosPickerCollapsed}}>
                  <View style={{padding: 10, justifyContent: 'right', backgroundColor: '#ccc'}}>
                    <Button style={{fontSize: 20 }} color='black' title="Fechar" onPress={()=>{setIosPickerCollapsed('none')}}/>
                  </View>
                  <View>
                  <Picker 
                    value={selectedValue} 
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                    selectedValue={selectedValue}
                    >
                    
                      <Picker.Item label="Selecione..." value='Selecione...' key="1" />
                      <Picker.Item label="Meta" value="Meta"  key="2" />
                      <Picker.Item label="Metinha" value="Metinha"  key="3" />
                      <Picker.Item label="Metona" value="Metona"  key="4" />
                    </Picker>
                  </View>
            </View>
          </>
        )
      }
      else {
        return (
          <>
            <ListGoals>
              <Picker 
                value={selectedValue} 
                onValueChange={(itemValue) => setSelectedValue(itemValue)}>
                  <Picker.Item label="Selecione..." value='null' key="1" />
                  <Picker.Item label="Meta" value="meta"  key="2" />
                  <Picker.Item label="Metinha" value="metinha"  key="3" />
                  <Picker.Item label="Metona" value="metona"  key="4" />
              </Picker>
            </ListGoals>
          </>
        )
      }
      })()}


    <SaveAddButton><Text style={{textAlign: "center", color: "white", fontSize: 18, top: 10, letterSpacing: 1.2}}>SALVAR E ADICIONAR OUTRA</Text></SaveAddButton>
    <FinishButton onPress={navigateToHome}><Text style={{textAlign: "center", color: "white", fontSize: 20, top: 10, letterSpacing: 1.2}}>FINALIZAR</Text></FinishButton>

     </Container>
  );
}
