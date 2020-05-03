import React, { useState } from 'react';
// import * as Progress from 'react-native-progress';

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

  function openModalDelete() {
    setModalDeleteVisible(!modalDeleteVisible);
  }

  return (
    <Container>
         <Title>Viagem de Férias</Title>
         <Proportion>Metona</Proportion>

         <InfosGoal>
           <Value>Valor Total: R$ 7200,00</Value>
           <Text>Economizar <Span>R$ 300/mês</Span></Text>
         </InfosGoal>

        <TextGray>Você alcançará sua meta em:</TextGray>

        <WhenView>
          <Days>102 dias</Days>
        </WhenView>

        
        <Options>
          <BtnOption onPress={openModalDelete} >
            <TextBtnOption>EXCLUIR</TextBtnOption>
          </BtnOption>

          <BtnOption>
            <TextBtnOption>EDITAR</TextBtnOption>
          </BtnOption>
        </Options>

        <ModalDelete setModalDeleteVisible={setModalDeleteVisible} isVisible={modalDeleteVisible} />
    </Container>
  );
}
