import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { FlatList, View, Text, TouchableOpacity, ScrollView } from 'react-native';

import { PieChart } from 'react-native-svg-charts'
// import * as Progress from 'react-native-progress';
// import { ART } from 'react-native';
// import {Surface, Shape} from '@react-native-community/art';
import ModalMenu from '../../Components/ModalMenu';
import ModalDelete from '../../Components/ModalDelete';

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
  Chart,
  TitleLeftlover,
  DebtTitleCard,
  ValueCard,
  DeadlineCard,
  ContainerProgressBar,
  IconsCard
} from './styles';

export default function Home() {
  const [modalMenuVisible, setModalMenuVisible] = useState(false);
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);

  const navigation = useNavigation();

  function navigateToSector() {
    navigation.navigate('Sector');
  }
  
  function navigateToGoal() {
    navigation.navigate('Goal');
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
                data={data.teste}
                keyExtractor={item => String(item)}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={(item) => (
                  <Card onPress={navigateToSector}>
                    <ContainerTitle><CardTitle>Alimentação</CardTitle></ContainerTitle>
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
                data={data.teste}
                keyExtractor={item => String(item)}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={(item) => (
                  <Card onPress={navigateToGoal}>
                    <ContainerTitle><CardTitle>Alimentação</CardTitle></ContainerTitle>
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
                data={data.teste}
                keyExtractor={item => String(item)}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={(item) => (
                  <Card>
                    <View>
                    <ContainerTitle><CardTitle>Alimentação</CardTitle></ContainerTitle>
                      <ValueCard>R$ 30.020,00</ValueCard>
                      <DeadlineCard>Prazo: 20/12/2020</DeadlineCard>
                      
                      <ContainerProgressBar>
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

