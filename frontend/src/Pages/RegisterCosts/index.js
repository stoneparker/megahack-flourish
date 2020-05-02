import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

export default function RegisterCosts() {
  const navigation = useNavigation();

  function navigateToRegisterGoals() {
    navigation.navigate('RegisterGoals');
  }

  return (
    <SafeAreaView>
         <Text onPress={navigateToRegisterGoals} style={{textAlign: 'right'}}>RegisterCosts</Text>
    </SafeAreaView>
  );
}
