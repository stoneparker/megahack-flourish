import React from 'react';
import Modal from 'react-native-modal';
import { Container, Option, Menu, Filter, TextOption } from './styles';

export default function ModalMenu({ setModalVisible, isVisible }) {

     function closeModalMenu() {
          setModalVisible(false);
     }

     function handleModalGoal() {
          alert('oi');
     }

     return (
          <Modal isVisible={isVisible}>
               <Filter onPress={closeModalMenu}>
                    <Menu>
                         <Option>
                              <TextOption onPress={handleModalGoal}>Novo gasto</TextOption>
                         </Option>
                         <Option>
                              <TextOption onPress={handleModalGoal}>Nova meta</TextOption>
                         </Option>
                         <Option position="last">
                              <TextOption onPress={handleModalGoal}>Nova dívida</TextOption>
                         </Option>
                    </Menu>
               </Filter>
          </Modal>     
     );
}
