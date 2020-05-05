import React, {useState, useEffect} from 'react';
import { View, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import LabelAdd from '../../Components/LabelAdd';
import List from '../../Components/List';
import { Container } from '../../Utils/Styles/GlobalStyles';
import Header from '../../Components/Header';
import Button from '../../Components/Button';
import ModalNewCostType from '../../Components/ModalNewCostType';
import ModalNewDebt from '../../Components/ModalNewDebtType';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function RegisterCosts() {
  const navigation = useNavigation();
  const [modalNewDebtVisible, setModalNewDebtVisible] = useState(false);
  const [modalNewCostTypeVisible, setModalNewCostTypeVisible] = useState(false);

  const [costsData, setCostsData] = useState([]);
  const [debtsData, setDebtsData] = useState([]);
  const [editCostData, setEditCostData] = useState({});
  const [editDebtData, setEditDebtData] = useState({});
  const [editingCost, setEditingCost] = useState('');
  const [editingDebt, setEditingDebt] = useState('');

  useEffect(()=>{
    async function getRent() {
      const rentBase = await AsyncStorage.getItem('UserRent');
      
      setCostsData([
        {
          itemName: 'Aluguel',
          itemValue: (parseFloat(rentBase)/2.5).toFixed(2),
          key: 'item-1'
        },
        {
          itemName: 'Alimentação',
          itemValue: (parseFloat(rentBase)/5).toFixed(2),
          key: 'item-2'
        },
        {
          itemName: 'Transporte',
          itemValue: (parseFloat(rentBase)/12).toFixed(2),
          key: 'item-3'
        },
        {
          itemName: 'Educação',
          itemValue: (parseFloat(rentBase)/9).toFixed(2),
          key: 'item-4'
        },
        {
          itemName: 'Manutenção',
          itemValue: (parseFloat(rentBase)/16).toFixed(2),
          key: 'item-5'
        },
        {
          itemName: 'Roupas',
          itemValue: (parseFloat(rentBase)/7).toFixed(2),
          key: 'item-6'
        },
      ]);
    }
    getRent();

  }, [])

  function editCost(item) {
    const editItem = costsData.find(cost => cost.key === item);
    setEditCostData({name: editItem.itemName, value: editItem.itemValue});
    setEditingCost(item);
    setModalNewCostTypeVisible(true);
  }

  function editDebt(item) {
    const editItem = debtsData.find(debt => debt.key === item);
    setEditDebtData({name: editItem.itemName, value: editItem.itemValue, interest: editItem.itemInterest, date: editItem.itemDate});
    setEditingDebt(item);
    setModalNewDebtVisible(true);
  }

  async function registerCosts() {
    await AsyncStorage.setItem('UserCosts', JSON.stringify(costsData));
    await AsyncStorage.setItem('UserDebts', JSON.stringify(debtsData));
    navigation.navigate('RegisterGoals');
  }

  function newCostType(name, value) {
    if(editingCost !== '') {
      const index = editingCost.substring(5, 6);
      const newCosts = costsData;
      newCosts.splice(index-1, 1);
      newCosts.splice(index-1, 0, {itemName: name, itemValue: value, key: "item-"+index});
      setCostsData(newCosts);
      setEditingCost('');
    }
    else {
      setCostsData(costs =>  [...costs, {itemName: name, itemValue: value, key: "item-"+(costs.length+1)}])
    }
  }

  function newDebt(name, value, interest, date) {
    if(editingDebt !== '') {
      const index = editingDebt.substring(5, 6);
      const newDebt = debtsData;
      newDebt.splice(index-1, 1);
      newDebt.splice(index-1, 0, {itemName: name, itemValue: value, itemInterest: interest, itemDate: date,  key: "item-"+index});
      setDebtsData(newDebt);
      setEditingCost('');
    }
    else {
      setDebtsData(debts =>  [...debts, {itemName: name, itemValue: value, itemInterest: interest, itemDate: date, key: "item-"+(debts.length+1)}])
    }
  }
  function openNewCost() {
    setEditCostData({}); 
    setModalNewCostTypeVisible(true);
  }
  function openNewDebt() {
    setEditDebtData({}); 
    setModalNewDebtVisible(true);
  }
  return (
      <Container>
        <Header title="Altere sua base de gastos..." />

        <List title="Gastos" data={costsData} onEdit={editCost} />
        <View style={{width: '85%', margin: 0, padding: 0}}>
          <TouchableOpacity style={{width: '120%', margin: 0, padding: 0, border: 0}} onPress={openNewCost}>
            <LabelAdd />
          </TouchableOpacity>
        </View>
        
        <List title="Dívidas" data={debtsData} onEdit={editDebt} />
        <View style={{width: '85%', margin: 0, padding: 0}}>
          <TouchableOpacity style={{width: '120%', margin: 0, padding: 0, border: 0}} onPress={openNewDebt}>
            <LabelAdd />
          </TouchableOpacity>
        </View>
        <Button onPress={registerCosts} text="PRÓXIMO"/>

        <ModalNewCostType setModalNewCostTypeVisible={setModalNewCostTypeVisible} isVisible={modalNewCostTypeVisible} onHandledSubmit={newCostType} data={editCostData}></ModalNewCostType>
        <ModalNewDebt setModalNewDebtVisible={setModalNewDebtVisible} isVisible={modalNewDebtVisible} onHandledSubmit={newDebt} data={editDebtData}></ModalNewDebt>
      </Container>
  );
}
