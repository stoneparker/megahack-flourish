import React, { useEffect } from 'react';
import { AppLoading } from 'expo';
import { setCustomText } from 'react-native-global-props';
import { useFonts } from '@use-expo/font';
import * as Font from 'expo-font';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({ 'Fredoka One': require('./assets/fonts/FredokaOne-Regular.ttf') })

  // definindo propriedades globais de estilização

  const customTextProps = {
    style: {
        fontFamily: 'Fredoka One',
        color: '#000'
    }
  }
  
  setCustomText(customTextProps);

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <Routes />
    );
  }
}