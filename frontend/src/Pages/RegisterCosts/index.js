import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

export default function RegisterCosts() {
  const navigation = useNavigation();

  function navigateToRegisterGoals() {
    navigation.navigate('RegisterGoals');
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
         <Text onPress={navigateToRegisterGoals}>RegisterCosts</Text>
    </View>
  );
}
