import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';

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
  const [edit, setEdit] = useState(false);

  const data = {
    teste : [1, 2, 3, 4, 5, 6, 7, 8]
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
        <Progress.Bar width={300} height={10} borderWidth={0} indeterminate={false} progress={0.7} color="#79C255" unfilledColor="#C4C4C4" />

        <Spending>
          {data.teste.map(teste => 
            <Card>
              <InfosExpense>
                <FirstLine>
                  <TitleExpense edit={false}>Mercado</TitleExpense>
                  <DateExpense>(20/12/2019)</DateExpense>
                </FirstLine>
                <ValueExpense>R$ 420,00</ValueExpense>
              </InfosExpense>
              <IconsCard>
                <Feather name="trash-2" color="#fff" size={22} />
                <Feather name="edit" color="#fff" size={22} />
              </IconsCard>
            </Card>
          )}
        </Spending>

        </Content>
    </Container>
  );
}
