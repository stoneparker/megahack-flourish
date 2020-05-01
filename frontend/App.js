import React from 'react';
import { AppLoading } from 'expo';

import Routes from './src/routes';

import { setCustomText } from 'react-native-global-props';
import { useFonts } from '@use-expo/font';

export default function App() {
  let [fontsLoaded] = useFonts({ 'Fredoka One': require('./assets/fonts/FredokaOne-Regular.ttf') })

  const customTextProps = {
    style: {
        fontFamily: 'Fredoka One',
        color: '#000'
    }
  }
  
  setCustomText(customTextProps);

  if (!fontsLoaded) {
    return <AppLoading />
  }else{
    return (
      <Routes />
    );
  }
}