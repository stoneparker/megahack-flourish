import React, { useState, useEffect } from 'react';
import Modal from 'react-native-modal';
import { View } from 'react-native';

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

export default function ModalNewCostType({ setModalNewCostTypeVisible, isVisible, onHandledSubmit, data }) {
     const [name, setName] = useState(data.name);
     const [value, setValue] = useState(data.value);
     const [title, setTitle] = useState('Novo Gasto');
     
     useEffect(()=>{
          if(data.name === undefined) {
               setName('');
               setValue('');
               setTitle('Novo Gasto');
          }
          else {
               setName(data.name);
               setValue(data.value);
               setTitle('Editar Gasto');
          }
     }, [data])

     function closeModalNew() {
          setModalNewCostTypeVisible(false);
     }

     function nextStep() {
          onHandledSubmit(name, value)
          closeModalNew();
          setName('');
          setValue('');
     }

     return (
          <Modal isVisible={isVisible}>
               <Filter onPress={() => closeModalNew}>
                    <Content>
                         <Title>{title}</Title>
                         
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
                              <Input keyboardType="numeric" value={value} onChangeText={text => setValue(text)} />
                         </Field>
                         <Options>
                              <BtnCancel onPress={closeModalNew}>
                                   <TextBtnCancel>CANCELAR</TextBtnCancel>
                              </BtnCancel>
                              <BtnNext>
                                   <TextBtnNext onPress={nextStep}>SALVAR</TextBtnNext>
                              </BtnNext>
                         </Options>
                    </Content>
               </Filter>
          </Modal>
     );
}
