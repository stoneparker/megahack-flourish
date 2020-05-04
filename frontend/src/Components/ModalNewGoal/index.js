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

export default function ModalNewGoal({ setModalNewGoalVisible, isVisible }) {
     const [modalNewGoal2Visible, setModalNewGoal2Visible] = useState(false);
     const [proportion, setProportion] = useState('');
     const [name, setName] = useState('');
     const [value, setValue] = useState('');

     function closeModalNew() {
          setModalNewGoalVisible(false);
          setProportion('');
          setName('');
          setValue('');
     }

     function nextStep() {
          closeModalNew();
          setModalNewGoal2Visible(!modalNewGoal2Visible);
     }

     return (
          <>
               <Modal isVisible={isVisible}>
                    <Filter onPress={() => closeModalNew}>
                         <Content>
                              <Title>Nova meta</Title>
                              
                              <Field>
                                   <View style={{ width: '100%' }}>
                                        <Label>Nome da meta:</Label>
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
                                        <Label>Proporção:</Label>
                                   </View>                             
                                   <ListPicker>
                                        <Picker
                                             selectedValue={proportion}
                                             onValueChange={(itemValue, itemIndex) => setProportion(itemValue)}>
                                             <Picker.Item label="Metinha" value="metinha" />
                                             <Picker.Item label="Meta" value="meta" />
                                             <Picker.Item label="Metona" value="metona" />
                                        </Picker>
                                   </ListPicker>
                              </Field>
                              <Options>
                                   <BtnCancel onPress={closeModalNew}>
                                        <TextBtnCancel>CANCELAR</TextBtnCancel>
                                   </BtnCancel>
                                   <BtnNext>
                                        <TextBtnNext onPress={nextStep}>PRÓXIMO</TextBtnNext>
                                   </BtnNext>
                              </Options>
                         </Content>
                    </Filter>
               <ModalNewGoal2 isVisible={modalNewGoal2Visible} setModalNewGoal2Visible={setModalNewGoal2Visible} />    
               </Modal>
 
          </>
     );
}
