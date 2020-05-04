import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { View } from 'react-native';

import { DatePickerStyled } from '../ModalNewSpent/styles';

import { 
     Content, 
     Filter, 
     Title, 
     Input, 
     Label, 
     Field, 
     Options, 
     BtnCancel, 
     TextBtnNext, 
     TextBtnCancel, 
     BtnNext
} from './styles';

export default function ModalNewDebt({ setModalNewDebtVisible, isVisible, onHandledSubmit }) {
     const [name, setName] = useState('');
     const [value, setValue] = useState('');
     const [interest, setInterest] = useState('');
     const [date, setDate] = useState('');

     function closeModalNew() {
          setModalNewDebtVisible(false);
     }

     function nextStep() {
          onHandledSubmit(name, value, interest, date);
          closeModalNew();
          setName('');
          setValue('');
          setDate('');
          setInterest('');
     }

     return (
          <Modal isVisible={isVisible}>
               <Filter onPress={() => closeModalNew}>
                    <Content>
                         <Title>Nova dívida</Title>
                         
                         <Field>
                              <View style={{ width: '100%' }}>
                                   <Label>Nome da dívida:</Label>
                              </View>
                              <Input value={name} onChangeText={text => setName(text)} />
                         </Field>
                         <Field>
                              <View style={{ width: '100%' }}>
                                   <Label>Valor:</Label>
                              </View>
                              <Input value={value} onChangeText={text => setValue(text)} />
                         </Field>
                         <Field>
                              <View style={{ width: '100%' }}>
                                   <Label>Juros:</Label>
                              </View>                             
                              <Input value={interest} onChangeText={text => setInterest(text)} />
                         </Field>
                         <Field>
                              <View style={{ width: '100%' }}>
                                   <Label>Data:</Label>
                              </View> 
                              <DatePickerStyled
                                   value={date}
                                   placeholder={date}
                                   onDateChange={date => setDate(date)}
                              />                
                         </Field>
                         <Options>
                              <BtnCancel onPress={closeModalNew}>
                                   <TextBtnCancel>CANCELAR</TextBtnCancel>
                              </BtnCancel>
                              <BtnNext>
                                   <TextBtnNext onPress={nextStep}>VAMOS LÁ!</TextBtnNext>
                              </BtnNext>
                         </Options>
                    </Content>
               </Filter>
          </Modal>
     );
}
