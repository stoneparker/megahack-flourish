import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

export default function Home() {
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

  return (
    <View>
         <Text onPress={navigateToSector}>Setor</Text>
         <Text onPress={navigateToGoal}>Meta</Text>
         <Text onPress={navigateToProfile}>Profile</Text>
    </View>
  );
}
