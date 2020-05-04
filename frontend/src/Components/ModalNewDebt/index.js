import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { View } from 'react-native';

import { DatePickerStyled } from '../ModalNewSpent/styles';

import api from '../../services/api';

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

export default function ModalNewDebt({ setModalNewDebtVisible, isVisible }) {
     const [name, setName] = useState('');
     const [value, setValue] = useState('');
     const [interest, setInterest] = useState('');
     const [date, setDate] = useState('');

     function closeModalNew() {
          setModalNewDebtVisible(false);
     }

     async function createDebt() {
          alert('aqui');
          const data = {
               name,
               value,
               interest,
               term: date
          }

          try {
               await api.post('/user/1/debt', data);
               closeModalNew();
               setName('');
               setValue('');
               setDate('');
               setInterest('');
               console.log('iha');

          } catch(e) {
               console.log(e);
          }
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
                                   <TextBtnNext onPress={createDebt}>VAMOS LÁ!</TextBtnNext>
                              </BtnNext>
                         </Options>
                    </Content>
               </Filter>
          </Modal>
     );
}
