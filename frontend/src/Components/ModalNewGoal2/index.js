import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

import { Text, Content, Filter, Title, Calendar } from './styles';
import { BtnCancel, Options, TextBtnCancel, TextBtnNext, BtnNext } from '../ModalNew/styles';

import ModalNew from '../ModalNew';

export default function ModalNewGoal2({ setModalNewGoal2Visible, isVisible }) {
     
     const navigation = useNavigation();

     function closeModalNewGoal2() {
          setModalNewGoal2Visible(false);
     }

     function saveNewGoal() {
          closeModalNewGoal2();
          navigation.navigate('Goal');
     }

     // function previousStep() {
     //      closeModalNewGoal2();
     //      setModalNewVisible(!modalNewVisible);
     // }

     return (
          <>
               <Modal isVisible={isVisible}>
                    <Filter onPress={closeModalNewGoal2}>
                         <Content>
                              <Title>Nova meta</Title>
                              <Calendar></Calendar>
                              <Text>Você deverá economizar R$200/mês para alcançar sua meta nesse prazo.</Text>

                              <Options>
                                   <BtnCancel onPress={closeModalNewGoal2}>
                                        <TextBtnCancel>VOLTAR</TextBtnCancel>
                                   </BtnCancel>
                                   <BtnNext onPress={saveNewGoal}>
                                        <TextBtnNext>VAMOS LÁ!</TextBtnNext>
                                   </BtnNext>
                              </Options>
                         </Content>
                    </Filter>
               </Modal>

               {/* <ModalNew type={'meta'} setModalNewVisible={setModalNewVisible} isVisible={modalNewVisible} />      */}
          </>
     );
}
