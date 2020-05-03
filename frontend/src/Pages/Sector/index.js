import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
// import * as Progress from 'react-native-progress';

import ModalDelete from '../../Components/ModalDelete';

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

  function openModalDelete() {
    setModalDeleteVisible(!modalDeleteVisible);
  }

  const data = {
    teste : [1, 2, 3, 4, 5, 6, 7, 8]
  }

  function editSpending() {
    
  }

  return (
    <Container>
      <Content>
         <Title>Alimentação</Title>
         
         <InfoSector>
           <Value>R$ 900,00/mês</Value>
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
        
        <Spending>
          {data.teste.map(teste => 
            <Card key={teste}>
              <InfosExpense>
                <FirstLine>
                  <TitleExpense editable={false} autoFocus>Mercado</TitleExpense>
                  <DateExpense>(20/12/2019)</DateExpense>
                </FirstLine>
                <ValueExpense>R$ 420,00</ValueExpense>
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
