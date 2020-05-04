import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';

import ModalNewGoal from '../ModalNewGoal';
import ModalNewDebt from '../ModalNewDebt';
import ModalNewSpent from '../ModalNewSpent';

import { Container, Option, Menu, Filter, TextOption } from './styles';

export default function ModalMenu({ setModalMenuVisible, isVisible }) {
     const [modalNewGoalVisible, setModalNewGoalVisible] = useState(false);
     const [modalNewDebtVisible, setModalNewDebtVisible] = useState(false);
     const [modalNewSpentVisible, setModalNewSpentVisible] = useState(false);

     const navigation = useNavigation();
     function closeModalMenu() {
          setModalMenuVisible(false);
     }

     function openModalNewGoal() {
          setModalNewGoalVisible(!modalNewGoalVisible);

     }

     function openModalNewDebt() {
          setModalNewDebtVisible(!modalNewDebtVisible);
     }

     function openModalNewSpent() {
          setModalNewSpentVisible(!modalNewSpentVisible);
     }

     return (
          <>
               <Modal isVisible={isVisible}>
                    <Filter onPress={closeModalMenu}>
                         <Menu>
                              <Option>
                                   <TextOption onPress={openModalNewSpent}>Novo gasto</TextOption>
                              </Option>
                              <Option>
                                   <TextOption onPress={openModalNewGoal}>Nova meta</TextOption>
                              </Option>
                              <Option position="last">
                                   <TextOption onPress={openModalNewDebt}>Nova dívida</TextOption>
                              </Option>
                         </Menu>
                    </Filter>
                    

               <ModalNewGoal setModalNewGoalVisible={setModalNewGoalVisible} isVisible={modalNewGoalVisible} />     
               <ModalNewDebt setModalNewDebtVisible={setModalNewDebtVisible} isVisible={modalNewDebtVisible} />   
               <ModalNewSpent setModalNewSpentVisible={setModalNewSpentVisible} isVisible={modalNewSpentVisible} />   
               </Modal>
          </>
     );
}
