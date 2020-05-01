import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';
// import { ART } from 'react-native';
// import {Surface, Shape} from '@react-native-community/art';

import ModalMenu from '../../Components/ModalMenu';

import { 
  Container, 
  PlusButton, 
  Text, 
  Leftlover, 
  TextLeftlover, 
  MoneyLeftlover,
  Scroll,
  Title,
  CardsContainer,
  Card,
  ContainerLeftlover,
  ContainerScrolls,
  CardTitle,
  Chart
} from './styles';

export default function Home() {
  // const [modal, setModal] = useState(<View></View>);

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

  function openModalMenu() {
    setModal(<ModalMenu state={'open'}/>);
  }

  const data = {
    teste : [1, 2, 3, 4, 5, 6, 7, 8]
  }

  return (
    <Container>
        <ContainerLeftlover>
          <Leftlover>
            <TextLeftlover>Seu saldo:</TextLeftlover>
            <MoneyLeftlover>R$ 2345,95</MoneyLeftlover>
          </Leftlover>
        </ContainerLeftlover>

        <ContainerScrolls>
          <Scroll>
            <Title>Despesas</Title>
            <CardsContainer>
              {data.teste.map(teste => 
                <Card onPress={navigateToSector}>
                  <CardTitle>Alimentação</CardTitle>
                  <Chart>
                    <Progress.Pie size={88} color="rgba(240, 120, 90, 1)" unfilledColor="rgba(240, 196, 25, 0.9)" borderWidth={0} indeterminate={false} progress={0.7} />
                  </Chart>
                </Card>
              )}
            </CardsContainer>
          </Scroll>

          <Scroll>
            <Title>Metas</Title>
            <CardsContainer>
              {data.teste.map(teste => 
                <Card onPress={navigateToGoal}>
                  <CardTitle>Alimentação</CardTitle>
                  <Chart>
                    <Progress.Pie size={88} color="#482483" unfilledColor="#19F062" borderWidth={0} indeterminate={false} progress={0.9} />
                  </Chart>
                </Card>
              )}
            </CardsContainer>
          </Scroll>
        </ContainerScrolls>

        <PlusButton onPress={openModalMenu}>
          <Feather color="#fff" size={40} name="plus" />
        </PlusButton>
    </Container>
  );
}

