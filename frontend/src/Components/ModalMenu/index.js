import React, { useState } from 'react';
import Modal from 'react-native-modal';

import ModalNew from '../ModalNew';

import { Container, Option, Menu, Filter, TextOption } from './styles';

export default function ModalMenu({ setModalMenuVisible, isVisible }) {
     const [modalNewVisible, setModalNewVisible] = useState(false);
     const [type, setType] = useState('');

     function closeModalMenu() {
          setModalMenuVisible(false);
     }

     function handleModalNew(tipo) {
          closeModalMenu();
          setType(tipo);
          setModalNewVisible(!modalNewVisible);
     }

     return (
          <>
               <Modal isVisible={isVisible}>
                    <Filter onPress={closeModalMenu}>
                         <Menu>
                              <Option>
                                   <TextOption onPress={() => handleModalNew('gasto')}>Novo gasto</TextOption>
                              </Option>
                              <Option>
                                   <TextOption onPress={() => handleModalNew('meta')}>Nova meta</TextOption>
                              </Option>
                              <Option position="last">
                                   <TextOption onPress={() => handleModalNew('dívida')}>Nova dívida</TextOption>
                              </Option>
                         </Menu>
                    </Filter>
               </Modal>

               <ModalNew type={type} setModalNewVisible={setModalNewVisible} isVisible={modalNewVisible} />     
          </>
     );
}
