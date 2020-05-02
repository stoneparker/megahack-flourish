import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { View } from 'react-native';

import ModalNewGoal2 from '../ModalNewGoal2';

import { Content, Filter, Title, Input, Label, Field, Options, BtnCancel, TextBtnNext, TextBtnCancel, BtnNext } from './styles';

export default function ModalNew({ setModalNewVisible, isVisible, type }) {
     const [modalNewGoal2Visible, setModalNewGoal2Visible] = useState(false);

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
                    <Filter onPress={closeModalNew}>
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
                                        <Label>Proporção:</Label>
                                   </View>
                                   {type == 'gasto' | type == 'meta' ? 
                                        <Input /> :  <Label>Proporção:</Label>
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
