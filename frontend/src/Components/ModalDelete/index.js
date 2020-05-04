import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

import { BtnDelete, BtnCancel, TextBtnCancel, TextBtnDelete, Options, Menu, Filter, Text } from './styles';

import api from '../../services/api';

export default function ModalDelete({ setModalDeleteVisible, isVisible, setDeleteThis, deleteThis , routeToDelete, setRouteToDelete }) {
     const navigation = useNavigation();

     function closeModalMenu() {
          setModalDeleteVisible(false);
     }
     async function deleteAny() {
          try {
               await api.delete(`${routeToDelete}/${deleteThis}`);
               closeModalMenu();
               setDeleteThis('');
               setRouteToDelete('');
               navigation.navigate('Home');
          } catch(e) {
               console.log(e);
          }
          
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
