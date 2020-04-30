import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

export default function Register() {
  const navigation = useNavigation();

  function navigateToRegisterRent() {
    navigation.navigate('RegisterRent');
  }

  function navigateToLogin() {
    navigation.navigate('Login');
  }
  
  return (
    <View>
         <Text onPress={navigateToRegisterRent}>Register ihu</Text>
         <Text onPress={navigateToLogin}>Login</Text>
    </View>
  );
}
