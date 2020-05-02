import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

import { Container, Option } from './styles';

export default function ModalMenu({ visible }) {
     const [modalVisible, setModalVisible] = useState(visible);

     function closeModalMenu() {
          setModalVisible(false);
     }

     useEffect(() => {
          setModalVisible(true);
     }, [])

     return (
          <View>
               <Modal isVisible={modalVisible}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={closeModalMenu}>
                         <Text>I am the modal content!</Text>
                    </TouchableOpacity>
               </Modal>

               {/* <ModalV state={modalVisible}>
            <Menu>
              <Option>i</Option>
              <Option>oi</Option>
              <Option>oi</Option>
            </Menu>
          </ModalV> */}
          </View>
          
);
}
