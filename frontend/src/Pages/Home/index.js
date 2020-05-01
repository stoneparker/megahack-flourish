import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { FlatList, View } from 'react-native';
import * as Progress from 'react-native-progress';
// import { ART } from 'react-native';
// import {Surface, Shape} from '@react-native-community/art';

import ModalMenu from '../../Components/ModalMenu';

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
  ContainerScrolls,
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
            <TitleLeftlover>
              <TextLeftlover>Seu saldo:</TextLeftlover>
              <FontAwesome5 size={20} name="user-alt" color="#000" style="solid" onPress={navigateToProfile} />
            </TitleLeftlover>
            <MoneyLeftlover>R$ 2345,95</MoneyLeftlover>
          </Leftlover>
        </ContainerLeftlover>

        <ContainerScrolls>
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
                    <Chart>
                      <Progress.Pie size={88} color="rgba(240, 120, 90, 1)" unfilledColor="rgba(240, 196, 25, 0.9)" borderWidth={0} indeterminate={false} progress={0.7} />
                    </Chart>
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
                    <Chart>
                      <Progress.Pie size={88} color="#482483" unfilledColor="#19F062" borderWidth={0} indeterminate={false} progress={0.9} />
                    </Chart>
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
                        <Progress.Bar width={150} height={10} borderWidth={0} indeterminate={false} progress={0.7} color="#F0C419" unfilledColor="#C4C4C4" />
                      </ContainerProgressBar>
                    </View>
                    <IconsCard>
                      <Feather name="edit" color="#fff" size={30} />
                      <Feather name="trash-2" color="#fff" size={30} />
                    </IconsCard>
                  </Card>
                )}
              />
            </CardsContainer>
          </Scroll>

        </ContainerScrolls>

        

        <PlusButton onPress={openModalMenu}>
          <Feather color="#fff" size={40} name="plus" />
        </PlusButton>
    </Container>
  );
}

