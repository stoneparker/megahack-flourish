import React, { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';

import ModalDelete from '../../Components/ModalDelete';

import api from '../../services/api';

import { 
  Container, 
  Content, 
  InfoSector, 
  Value, 
  Options, 
  BtnOption, 
  TextBtnOption, 
  SubTitle,
  Spending, 
  Card,
  InfosExpense,
  TitleExpense,
  DateExpense,
  ValueExpense,
  IconsCard,
  FirstLine 
} from './styles';

import { Title } from '../Goal/styles';

export default function Sector() {
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [costs, setCosts] = useState([]);

  const route = useRoute();

  const { sector } = route.params;

  function openModalDelete() {
    setModalDeleteVisible(!modalDeleteVisible);
  }

  const data = {
    teste : [1, 2, 3, 4, 5, 6, 7, 8]
  }

  function editSpending() {
    
  }

  async function loadCosts() {
    const response = await api.get(`/cost_type/${sector.id_cost_type}/cost`);
    setCosts(response.data);
    console.log(costs[0]);
  }

  useEffect(() => {
    loadCosts();
  }, []);

  return (
    <Container>
      <Content>
        <Title>{sector.name}</Title>
        
        <InfoSector>
          <Value>R$ {sector.value}/mês</Value>
        </InfoSector>

        <Options>
          <BtnOption>
            <TextBtnOption>EXCLUIR</TextBtnOption>
          </BtnOption>
          <BtnOption>
            <TextBtnOption>EDITAR</TextBtnOption>
          </BtnOption>
        </Options>

        <SubTitle>Seus gastos</SubTitle>
        <Progress.Bar width={300} height={10} borderWidth={0} indeterminate={false} progress={0.7} color="#79C255" unfilledColor="#C4C4C4" />

        <Spending>
          {costs.map(cost => 
            <Card key={cost.id_cost}>
              <InfosExpense>
                <FirstLine>
                  <TitleExpense editable={false} autoFocus>{cost.name}</TitleExpense>
                  <DateExpense>(20/12/2019)</DateExpense>
                </FirstLine>
                <ValueExpense>R$ {cost.value}</ValueExpense>
              </InfosExpense>
              <IconsCard>
                <Feather name="trash-2" color="#fff" size={22} onPress={openModalDelete} />
                <Feather name="edit" color="#fff" size={22} onPress={editSpending} />
              </IconsCard>
            </Card>
          )}
        </Spending>
      </Content>

        <ModalDelete setModalDeleteVisible={setModalDeleteVisible} isVisible={modalDeleteVisible} />
    </Container>
  );
}
