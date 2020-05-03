import React, { useState } from 'react';
import Modal from 'react-native-modal';

import { BtnDelete, BtnCancel, TextBtnCancel, TextBtnDelete, Options, Menu, Filter, Text } from './styles';

export default function ModalDelete({ setModalDeleteVisible, isVisible }) {
     function closeModalMenu() {
          setModalDeleteVisible(false);
     }

     function deleteAny() {
          closeModalMenu();
     }

     return (
          <Modal isVisible={isVisible}>
               <Filter onPress={closeModalMenu}>
                    <Menu>
                         <Text>Você deseja mesmo excluir isso?</Text>
                         <Options>
                              <BtnCancel onPress={closeModalMenu}>
                                   <TextBtnCancel>CANCELAR</TextBtnCancel>
                              </BtnCancel>
                              <BtnDelete onPress={deleteAny}>
                                   <TextBtnDelete>EXCLUIR</TextBtnDelete>
                              </BtnDelete>
                         </Options>
                    </Menu>
               </Filter>
          </Modal>
     );
}
