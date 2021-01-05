/**
 * Wrapper Class
 */

import React from 'react';
import Store from './app/redux';
import {Provider} from 'react-redux';
import Wrapper from './Wrapper';
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';
import {View} from 'react-native-animatable';

const store = Store;

const App = () => {
  let [fontsLoaded] = useFonts({
    RobotThin: Roboto_100Thin,
    RobotoThinItalic: Roboto_100Thin_Italic,
    RobotoLight: Roboto_300Light,
    RobotoLightItalic: Roboto_300Light_Italic,
    RobotoRegular: Roboto_400Regular,
    RobotoRegularItalic: Roboto_400Regular_Italic,
    RobotoMedium: Roboto_500Medium,
    RobotoMediumItalic: Roboto_500Medium_Italic,
    RobotoBold: Roboto_700Bold,
    RobotoBoldItalic: Roboto_700Bold_Italic,
    RobotoBlack: Roboto_900Black,
    RobotoBlackItalic: Roboto_900Black_Italic,
  });

  return (
    <Provider store={store}>
      <Wrapper />
    </Provider>
  );
};

export default App;
