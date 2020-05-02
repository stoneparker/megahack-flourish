import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

export default function RegisterGoals() {
  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate('Home');
  }
  
  return (
     <View>
          <Text onPress={navigateToHome}>Vai</Text>
     </View>
  );
}
