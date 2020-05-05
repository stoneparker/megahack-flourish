import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { View, TouchableOpacity, Text } from 'react-native';
import { SelectInput } from '../SelectInput';

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

     const data = [
          {
            label: 'Aluguel',
            value: 'Aluguel',
            key: 'item-1',
          },
          {
            label: 'Alimentação',
            value: 'Alimentação',
            key: 'item-2',
          },
          {
            label: 'Roupas',
            value: 'Roupas',
            key: 'item-3',
          },
          {
            label: 'Educação',
            value: 'Educação',
            key: 'item-4',
          },
        ]
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
                                        <SelectInput
                                             selectedValue={spentType}
                                             onValueChange={(itemValue, itemIndex) => setSpentType(itemValue)}
                                             data={data}
                                        />
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
