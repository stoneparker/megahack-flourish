import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { Container, Modal, Option } from './styles';

export default function ModalMenu({ state }) {
     const [stateModal, setStateModal] = useState(state);

     function closeModalMenu() {
          setStateModal('close');
     }

     // useEffect(() => {
     //      setStateModal('open')
     // }, [state])

     return (
     <Container state={stateModal} onPress={closeModalMenu}>
          <Modal>
               <Option>Novo gasto</Option>
               <Option>Nova meta</Option>
               <Option>Nova dívida</Option>
          </Modal>
     </Container>
);
}
