import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { FlatList, View, Text, TouchableOpacity, ScrollView } from 'react-native';

import { PieChart } from 'react-native-svg-charts';
import * as Progress from 'react-native-progress';
// import { ART } from 'react-native';
// import {Surface, Shape} from '@react-native-community/art';
import ModalMenu from '../../Components/ModalMenu';
import ModalDelete from '../../Components/ModalDelete';
import api from '../../services/api';

import { 
  Container, 
  PlusButton, 
  ContainerTitle, 
  Leftlover, 
  TextLeftlover, 
  MoneyLeftlover,
  Scroll,
  Title,
  CardsContainer,
  Card,
  ContainerLeftlover,
  CardTitle,
  TitleLeftlover,
  ValueCard,
  DeadlineCard,
  ContainerProgressBar,
  IconsCard
} from './styles';

export default function Home() {
  const [modalMenuVisible, setModalMenuVisible] = useState(false);
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [user, setUser] = useState([]);
  const [goals, setGoals] = useState([]);
  const [debts, setDebts] = useState([]);
  const [sectors, setSectors] = useState([]);

  const navigation = useNavigation();

  function navigateToSector(sector) {
    navigation.navigate('Sector', { sector });
  }
  
  function navigateToGoal(goal) {
    navigation.navigate('Goal', { goal });
  }

  function navigateToProfile() {
    navigation.navigate('Profile');
  }

  function handleModalMenu() {
    setModalMenuVisible(!modalMenuVisible);
  }

  function openModalDelete() {
    setModalDeleteVisible(!modalDeleteVisible);
  }

  const data = {
    teste : [1, 2, 3, 4, 5, 6, 7, 8]
  }

  async function loadUserInfos() {
    const responseGoals = await api.get('/user/1/goal/1');
    const responseSectors = await api.get('/user/1/cost_type');
    const responseDebts = await api.get('/user/1/debt');

    setGoals(responseGoals.data);
    setSectors(responseSectors.data);
    setDebts(responseDebts.data);
    console.log(debts);
  }

  useEffect(() => {
    loadUserInfos();
    console.ignoredYellowBox = ['Warning: VirtualizedLists', 'VirtualizedLists'];
  }, []);

  return (
    <Container>
        <ContainerLeftlover>
          <Leftlover>
            <TitleLeftlover>
              <TextLeftlover>Seu saldo:</TextLeftlover>
              <FontAwesome5 size={20} name="user-alt" color="#000" style="solid" onPress={navigateToProfile} />
            </TitleLeftlover>
            <MoneyLeftlover>R$ 2345,95</MoneyLeftlover>
          </Leftlover>
        </ContainerLeftlover>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Scroll>
            <Title>Despesas</Title>
            <CardsContainer>
              <FlatList 
                data={sectors}
                keyExtractor={item => String(item)}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({ item: sector }) => (
                  <Card onPress={() => navigateToSector(sector)}>
                    <ContainerTitle><CardTitle>{sector.name}</CardTitle></ContainerTitle>
                    <PieChart style={{ height: 120 }} data={[{value: 75, svg: {fill: 'rgb(255, 69, 61)'}, key: 'pie-1'}, {value: 15, svg: {fill: 'rgb(200, 200, 200)'}, key: 'pie-2'}]} />
                  </Card>
                )}
              />
            </CardsContainer>
          </Scroll>
          <Scroll>
            <Title>Metas</Title>
            <CardsContainer>
              <FlatList 
                data={goals}
                keyExtractor={item => String(item)}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({ item: goal }) => (
                  <Card onPress={() => navigateToGoal(goal)}>
                    <ContainerTitle><CardTitle>{goal.name}</CardTitle></ContainerTitle>
                    <PieChart style={{ height: 120 }} data={[{value: 75, svg: {fill: 'rgb(255, 69, 61)'}, key: 'pie-1'}, {value: 15, svg: {fill: 'rgb(200, 200, 200)'}, key: 'pie-2'}]} />
                  </Card>
                )}
              />
            </CardsContainer>
          </Scroll>

          <Scroll>
            <Title>Dívidas</Title>
            <CardsContainer>
              <FlatList 
                data={debts}
                keyExtractor={item => String(item)}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({ item: debt }) => (
                  <Card>
                    <View>
                    <ContainerTitle><CardTitle>{debt.name}</CardTitle></ContainerTitle>
                      <ValueCard>R$ {debt.value}</ValueCard>
                      <DeadlineCard>Prazo: {debt.term}</DeadlineCard>
                      
                      <ContainerProgressBar>
                        <Progress.Bar width={150} height={10} borderWidth={0} indeterminate={false} progress={0.7} color="#F0C419" unfilledColor="#C4C4C4" />
                      </ContainerProgressBar>
                    </View>
                    <IconsCard>
                      <Feather name="edit" color="#fff" size={30} />
                      <Feather name="trash-2" color="#fff" size={30} onPress={openModalDelete} />
                    </IconsCard>
                  </Card>
                )}
              />
            </CardsContainer>
          </Scroll>

        </ScrollView>

      <PlusButton onPress={handleModalMenu}>
        <Feather color="#fff" size={40} name="plus" />
      </PlusButton>

      <ModalMenu setModalMenuVisible={setModalMenuVisible} isVisible={modalMenuVisible} />
      <ModalDelete setModalDeleteVisible={setModalDeleteVisible} isVisible={modalDeleteVisible} />
    </Container>
  );
}

