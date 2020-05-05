import React, { useState } from 'react';
import { AsyncStorage } from 'react-native';
import { useNavigation, CommonActions  } from '@react-navigation/native';

import api from '../../services/api';
import Header from '../../Components/Header';
import Button from '../../Components/Button';
import { Container, Title } from '../../Utils/Styles/GlobalStyles';
import { Input } from '../../Components/Input';
import SelectInput from '../../Components/SelectInput';
import DateInputModal from '../../Components/DateInput';

export default function RegisterGoals() {

  const [selectedValue, setSelectedValue] = useState("Selecione...");
  const [goalName, setGoalName] = useState('');
  const [goalValue, setGoalValue] = useState('');
  const [goalDate, setGoalDate] = useState('');
  const [userGoals, setUserGoals] = useState([]);

  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate('Home');
  } 

  function RegisterGoals() {
    setUserGoals(goals =>  [...goals, {name: goalName, value: goalValue, proportion: selectedValue, term: goalDate}]);
    setSelectedValue("Selecione...");
    setGoalName('');
    setUserGoals('');

  }

  async function registerFullUser() {
    const userData = await AsyncStorage.getItem('UserData');
    const userRent = await AsyncStorage.getItem('UserRent');
    const userCosts = await AsyncStorage.getItem('UserCosts');
    const userDebts = await AsyncStorage.getItem('UserDebts');

    const responseUserData = await api.post('/user', {
      ...JSON.parse(userData),
      rent: userRent
    });

    JSON.parse(userCosts).map(async ({itemName, itemValue})=> {
      let name = itemName;
      let value = itemValue;
      await api.post(`/user/${responseUserData.data.id}/cost_type`, {
        name,
        value
      });
    });

    JSON.parse(userDebts).map(async ({itemName, itemValue})=> {
        let name = itemName;
        let value = itemValue;
        await api.post(`/user/${responseUserData.data.id}/debt`, {
          name,
          value
        });
    });
    

    if(goalName !== '' && goalValue !== '' && goalProportion !== 'Selecione...') {
      setUserGoals(goals =>  [...goals, {name: goalName, value: goalValue, proportion: selectedValue}]);

    }
    try {
    userGoals.map(async ({name, value, proportion})=> {
      await api.post(`/user/${responseUserData.data.id}/goal`, {
        name,
        value,
        proportion
      });
    });
    }
    catch {

    }
    await AsyncStorage.setItem('sessionUser', responseUserData.data.id.toString());
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: 'Home' }
        ],
    }));

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
      <Input value={goalName} onChangeText={setGoalName} />

      <Title>Valor:</Title>
      <Input value={goalValue} onChangeText={setGoalValue} />

      <Title>Proporção:</Title>
      <SelectInput selectedValue={selectedValue} setSelectedValue={setSelectedValue} data={data} />
      
      <Title>Data:</Title>
      {(()=>{
            return Platform.OS==='ios'?<DateInputModal style={{width: '90%'}} value={goalDate} onChangeText={setGoalDate} />:<DateInputModal style={{width: '90%'}} value={goalDate} onDateChange={date => setGoalDate(date)} />
      })()}
      

      <Button onPress={RegisterGoals} background="#FFC326" text="SALVAR E ADICIONAR OUTRO" />
      <Button onPress={registerFullUser} text="FINALIZAR" />
    </Container>
  );
}
