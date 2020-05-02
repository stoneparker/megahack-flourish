import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

export default function Login() {
  const navigation = useNavigation();

  function navigateToRegister() {
    navigation.navigate('Register');
  }

  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <View>
         <Text onPress={navigateToRegister}>Register</Text>
         <Text onPress={navigateToHome}>Home</Text>
    </View>
  );
}
