import React, { useEffect, useState } from 'react';
import { AppLoading } from 'expo';
import { setCustomText } from 'react-native-global-props';
import { useFonts } from '@use-expo/font';
import * as Font from 'expo-font';

import Routes from './src/routes';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(()=>{
    async function loadFont() {
      await Expo.Font.loadAsync({
        'Fredoka One': require('./assets/fonts/FredokaOne-Regular.ttf'),
      });
      const customTextProps = {
        style: {
            fontFamily: 'Fredoka One',
            color: '#000'
        }
      }
    
      setCustomText(customTextProps);
      setFontLoaded(true)
    }
    loadFont();
  });

  if (!fontLoaded) {
    return <AppLoading />
  } else {
    return (
      <Routes />
    );
  }
}