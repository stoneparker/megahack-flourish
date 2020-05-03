import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';
import { Calendar } from 'react-native-calendars';

import { Text, Content, Filter, Title } from './styles';
import { BtnCancel, Options, TextBtnCancel, TextBtnNext, BtnNext } from '../ModalNewGoal/styles';


export default function ModalNewGoal2({ setModalNewGoal2Visible, isVisible }) {
     const [dateBR, setDateBR] = useState('');
     const [dateUSA, setDateUSA] = useState('');

     const navigation = useNavigation();

     function closeModalNewGoal2() {
          setModalNewGoal2Visible(false);
          setDateBR('');
          setDateUSA('');
     }

     function saveNewGoal() {
          closeModalNewGoal2();
          navigation.navigate('Goal');
     }

     function handleDate(day) {
          setDateBR(day.day +'/'+ day.month +'/'+ day.year);
          setDateUSA(day.dateString);
     }

     // function previousStep() {
     //      closeModalNewGoal2();
     //      setModalNewVisible(!modalNewVisible);
     // }

     return (
          <>
               <Modal isVisible={isVisible}>
                    <Filter onPress={closeModalNewGoal2}>
                         <Content onPress={() => {}}>
                              <Title>Nova meta</Title>
                              <Calendar
                                   onDayPress={day => handleDate(day)}
                                   markedDates={{
                                        [dateUSA]: {selected: true}
                                   }}
                              />
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
