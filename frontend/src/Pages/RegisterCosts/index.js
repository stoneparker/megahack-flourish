import React, {useState, useEffect} from 'react';
import { ScrollView, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import LabelAdd from '../../Components/LabelAdd';
import List from '../../Components/List';
import { Container } from '../../Utils/Styles/GlobalStyles';
import Header from '../../Components/Header';
import Button from '../../Components/Button';
import ModalNewSpent from '../../Components/ModalNewSpent';
import ModalNewDebt from '../../Components/ModalNewDebt';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function RegisterCosts() {
  const navigation = useNavigation();
  const [rent, setRent] = useState('');
  const [modalNewDebtVisible, setModalNewDebtVisible] = useState(false);
  const [modalNewSpentVisible, setModalNewSpentVisible] = useState(false);

  const [costsData, setCostsData] = useState([]);
  const [debtsData, setDebtsData] = useState([]);


  useEffect(()=>{
    async function getRent() {
      const rentBase = await AsyncStorage.getItem('UserRent');
      setRent(parseFloat(rentBase));
      
    setCostsData([
      {
        itemName: 'Aluguel',
        itemValue: (rent/2.5).toFixed(2),
        key: 'item-1'
      },
      {
        itemName: 'Alimentação',
        itemValue: (rent/5).toFixed(2),
        key: 'item-2'
      },
      {
        itemName: 'Transporte',
        itemValue: (rent/12).toFixed(2),
        key: 'item-3'
      },
      {
        itemName: 'Educação',
        itemValue: (rent/9).toFixed(2),
        key: 'item-4'
      },
      {
        itemName: 'Manutenção',
        itemValue: (rent/16).toFixed(2),
        key: 'item-5'
      },
      {
        itemName: 'Roupas',
        itemValue: (rent/7).toFixed(2),
        key: 'item-6'
      },
    ]);
    }
    getRent();

  }, [])



  async function registerCosts() {
    await AsyncStorage.setItem('UserCosts', JSON.stringify(costsData));
    await AsyncStorage.setItem('UserDebts', JSON.stringify(debtsData));
    navigation.navigate('RegisterGoals');
  }

  return (
    <ScrollView>
      <Container>
        <Header title="Altere sua base de gastos..." />

        <List title="Gastos" data={costsData} />
        <TouchableOpacity style={{display: 'none'}} onPress={()=> setModalNewDebtVisible(true)}>
          <LabelAdd />
        </TouchableOpacity>

        <List title="Dívidas" data={debtsData} />
        <TouchableOpacity style={{display: 'none'}} onPress={()=> setModalNewSpentVisible(true)}>
          <LabelAdd />
        </TouchableOpacity>

        <Button onPress={registerCosts} text="PRÓXIMO"/>

        <ModalNewSpent setModalNewSpentVisible={setModalNewSpentVisible} isVisible={modalNewSpentVisible}></ModalNewSpent>
        <ModalNewDebt setModalNewDebtVisible={setModalNewDebtVisible} isVisible={modalNewDebtVisible}></ModalNewDebt>
      </Container>
    </ScrollView>
  );
}
