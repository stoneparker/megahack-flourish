import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

export default function RegisterRent() {
  const navigation = useNavigation();

  function navigateToRegisterCosts() {
    navigation.navigate('RegisterCosts');
  }

  return (
     <View>
          <Text onPress={navigateToRegisterCosts}>Vai</Text>
     </View>
  );
}
