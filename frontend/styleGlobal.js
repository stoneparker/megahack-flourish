import {
     setCustomView,
     setCustomTextInput,
     setCustomText,
     setCustomImage,
     setCustomTouchableOpacity
} from 'react-native-global-props';
import { useFonts } from '@use-expo/font';

() => {let [fontsLoaded] = useFonts({ 'FredokaOne': 'https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap' });}

const customTextProps = {
     style: {
          fontFamily: 'FredokaOne',
     }
}

setCustomText(customTextProps);