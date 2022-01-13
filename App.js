/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NativeBaseProvider, extendTheme, View, Image } from "native-base";
import AppBar from './components/AppBar';
import History from './pages/History';
import { NavigationContainer } from '@react-navigation/native';
import Login from './pages/Login';

const App = () => {
  const theme = extendTheme({
    fontConfig: {
      Montserrat: {
        200: {
          normal: 'Montserrat-ExtraLight',
          italic: 'Montserrat-ExtraLightItalic',
        },
        300: {
          normal: 'Montserrat-Light',
          italic: 'Montserrat-LightItalic',
        },
        400: {
          normal: 'Montserrat-Regular',
          italic: 'Montserrat-RegularItalic',
        },
        500: {
          normal: 'Montserrat-Medium',
          italic: 'Montserrat-MediumItalic',
        },
        600: {
          normal: 'Montserrat-SemiBold',
          italic: 'Montserrat-SemiBoldItalic',
        },
        700: {
          normal: 'Montserrat-Bold',
          italic: 'Montserrat-BoldItalic'
        },
        800: {
          normal: 'Montserrat-ExtraBold',
          italic: 'Montserrat-ExtraBoldItalic',
        },
        900: {
          normal: 'Montserrat-Black',
          italic: 'Montserrat-BlackItalic',
        },
      },
    },
  
    // Make sure values below matches any of the keys in `fontConfig`
    fonts: {
      heading: 'Montserrat',
      body: 'Montserrat',
      mono: 'Montserrat',
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Login/>
        {/* <AppBar/>
        <History /> */}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;