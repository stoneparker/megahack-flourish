import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import ModalMenu from '../../Components/ModalMenu';

import { Container, PlusButton } from './styles';

export default function Home() {
  const [modal, setModal] = useState(<View></View>);

  const navigation = useNavigation();

  function navigateToSector() {
    navigation.navigate('Sector');
  }
  
  function navigateToGoal() {
    navigation.navigate('Goal');
  }

  function navigateToProfile() {
    navigation.navigate('Profile');
  }

  function openModalMenu() {
    setModal(<ModalMenu state={'open'}/>);
  }

  return (
    <Container>
        {modal}
        <PlusButton onPress={openModalMenu}>
          <Feather color="#fff" size={40} name="plus" />
        </PlusButton>
    </Container>
  );
}

