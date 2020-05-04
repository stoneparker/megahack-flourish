import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import * as Progress from 'react-native-progress';

import ModalDelete from '../../Components/ModalDelete';

import { 
  Container, 
  Title, 
  Proportion, 
  InfosGoal, 
  Value, 
  Text, 
  Span, 
  TextGray, 
  WhenView, 
  Days,
  Options,
  BtnOption,
  TextBtnOption
} from './styles';

export default function Goal() {
  const [modalDeleteVisible, setModalDeleteVisible] = useState(false);
  const [deleteThis, setDeleteThis] = useState('');
  const [routeToDelete, setRouteToDelete] = useState('');

  const route = useRoute();

  const { goal } = route.params;

  function openModalDelete(id, route) {
    setModalDeleteVisible(!modalDeleteVisible);
    alert(route);
    setDeleteThis(id);
    setRouteToDelete(route);
  }

  const day = new Date().getDate();
  const month = new Date().getMonth()+1;
  const year = new Date().getFullYear();

  return (
    <Container>
         <Title>{goal.name}</Title>
         <Proportion>{goal.proportion}</Proportion>

         <InfosGoal>
           <Value>Valor Total: R$ {goal.value}</Value>
           <Text>Economizar <Span>R$ 300/mês</Span></Text>
         </InfosGoal>

        <TextGray>Você alcançará sua meta em:</TextGray>

        <WhenView>
          <Days>102 dias</Days>
        </WhenView>

        <Progress.Bar width={300} height={10} borderWidth={0} indeterminate={false} progress={0.3} color="#F8D332" unfilledColor="#C4C4C4" />

        <Options>
          <BtnOption onPress={() => openModalDelete(goal.id_goal, 'goal')} >
            <TextBtnOption>EXCLUIR</TextBtnOption>
          </BtnOption>

          <BtnOption>
            <TextBtnOption>EDITAR</TextBtnOption>
          </BtnOption>
        </Options>

        <ModalDelete setModalDeleteVisible={setModalDeleteVisible} isVisible={modalDeleteVisible} setDeleteThis={setDeleteThis} deleteThis={deleteThis} routeToDelete={routeToDelete} setRouteToDelete={setRouteToDelete} />
    </Container>
  );
}
