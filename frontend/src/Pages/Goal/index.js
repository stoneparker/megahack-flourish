import React from 'react';
import * as Progress from 'react-native-progress';

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

        <Progress.Bar width={300} height={10} indeterminate={false} progress={0.3} color="#F8D332" unfilledColor="#C4C4C4" />

        <Options>
          <BtnOption>
            <TextBtnOption>EXCLUIR</TextBtnOption>
          </BtnOption>

          <BtnOption>
            <TextBtnOption>EDITAR</TextBtnOption>
          </BtnOption>
        </Options>

    </Container>
  );
}
