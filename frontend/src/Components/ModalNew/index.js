import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { View } from 'react-native';

import ModalNewGoal2 from '../ModalNewGoal2';

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
     Picker  
} from './styles';

export default function ModalNew({ setModalNewVisible, isVisible, type }) {
     const [modalNewGoal2Visible, setModalNewGoal2Visible] = useState(false);
     const [selectedValuePicker, setSelectedValuePicker] = useState('');

     function closeModalNew() {
          setModalNewVisible(false);
     }

     function nextStep() {
          closeModalNew();

          if (type == 'meta') setModalNewGoal2Visible(!modalNewGoal2Visible);
     }

     return (
          <>
               <Modal isVisible={isVisible}>
                    <Filter onPress={() => closeModalNew}>
                         <Content>
                              <Title>Nov{type == 'dívida' | type == 'meta' ? 'a' : 'o'} {type}</Title>
                              
                              <Field>
                                   <View style={{ width: '100%' }}>
                                        <Label>Nome {type == 'dívida' | type == 'meta' ? 'da '+type : 'do '+type }:</Label>
                                   </View>
                                   <Input />
                              </Field>

                              <Field>
                                   <View style={{ width: '100%' }}>
                                        <Label>Valor:</Label>
                                   </View>
                                   <Input />
                              </Field>
                              
                              
                              <Field>
                                   <View style={{ width: '100%' }}>
                                        <Label>{type == 'gasto' ? 'Tipo de despesa': type == 'meta' ? 'Proporção' : 'Juros'}:</Label>
                                   </View>
                                   {type == 'dívida' ? 
                                        <Input /> 
                                        :  type == 'meta' ? 
                                        <ListPicker>
                                             <Picker
                                                  selectedValue={selectedValuePicker}
                                                  onValueChange={(itemValue, itemIndex) => setSelectedValuePicker(itemValue)}
                                             >
                                                  <Picker.Item label="Meta" value="meta" />
                                                  <Picker.Item label="Metinha" value="metinha" />
                                                  <Picker.Item label="Metona" value="metona" />
                                             </Picker>
                                        </ListPicker>
                                        : 
                                        <ListPicker>
                                             <Picker
                                                  selectedValue={selectedValuePicker}
                                                  onValueChange={(itemValue, itemIndex) => setSelectedValuePicker(itemValue)}
                                             >
                                                  <Picker.Item label="Alimentação" value="alimentação" />
                                                  <Picker.Item label="Transporte" value="transporte" />
                                                  <Picker.Item label="Faculdade" value="faculdade" />
                                             </Picker>
                                        </ListPicker>

                                   }
                              </Field>

                              {type == 'gasto' | type == 'dívida' ? 
                                   <Field>
                                        <View style={{ width: '100%' }}>
                                             <Label>{type == 'gasto' ? 'Data' : 'Prazo' }:</Label>
                                        </View>
                                        <Input />
                                   </Field>
                              : <View />}
                              

                              <Options>
                                   <BtnCancel onPress={closeModalNew}>
                                        <TextBtnCancel>CANCELAR</TextBtnCancel>
                                   </BtnCancel>
                                   <BtnNext>
                                        <TextBtnNext onPress={nextStep}>
                                             {type == 'gasto' | type == 'dívida' ? 'VAMOS LÁ!': 'PRÓXIMO'}
                                        </TextBtnNext>
                                   </BtnNext>
                              </Options>
                         </Content>
                    </Filter>
               </Modal>

               <ModalNewGoal2 isVisible={modalNewGoal2Visible} setModalNewGoal2Visible={setModalNewGoal2Visible} />     
          </>
     );
}
