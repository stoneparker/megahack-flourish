import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { View, TouchableOpacity, Text } from 'react-native';

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
     BtnNext, 
     ListPicker,
     Picker,
     DatePickerStyled,
} from './styles';

export default function ModalNewSpent({ setModalNewSpentVisible, isVisible }) {
     const [spentType, setSpentType] = useState('');
     const [name, setName] = useState('');
     const [value, setValue] = useState('');
     const [date, setDate] = useState('');
     const [showDate, setShowDate] = useState(false);

     function closeModalNew() {
          setModalNewSpentVisible(false);
     }

     function nextStep() {
          closeModalNew();
          setSpentType('');
          setName('');
          setValue('');
          setDate('');
     }

     function openDatePicker() {
          setShowDate(true);
     }

     return (
          <>
               <Modal isVisible={isVisible}>
                    <Filter onPress={() => closeModalNew}>
                         <Content>
                              <Title>Novo gasto</Title>
                              
                              <Field>
                                   <View style={{ width: '100%' }}>
                                        <Label>Nome do gasto:</Label>
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
                                        <Label>Data:</Label>
                                   </View>
                                   
                                   <DatePickerStyled
                                        value={date}
                                        placeholder={date}
                                        onDateChange={date => setDate(date)}
                                   />
                              </Field>
                              <Field>
                                   <View style={{ width: '100%' }}>
                                        <Label>Tipo de despesa:</Label>
                                   </View>                             
                                   <ListPicker>
                                        <Picker
                                             selectedValue={spentType}
                                             onValueChange={(itemValue, itemIndex) => setSpentType(itemValue)}
                                        >
                                             <Picker.Item label="Alimentação" value="alimentação" />
                                             <Picker.Item label="Transporte" value="transporte" />
                                             <Picker.Item label="Faculdade" value="faculdade" />
                                        </Picker>
                                   </ListPicker>
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
          </>
     );
}
