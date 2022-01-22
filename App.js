/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NativeBaseProvider, extendTheme, View, Image } from "native-base";
import AppBar from './components/AppBar';
import History from './pages/History';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Login from './pages/Login';
import Profile from './pages/Profile';
import Home from './pages/Home';
import News from './pages/News';
import Search from './pages/Search';
import NewsDetail from './pages/NewsDetail';
import HomeNavigator from './pages/HomeNavigator';
import { StatusBar } from 'react-native';

const Tab = createBottomTabNavigator();

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

  const [isLoggedIn, setLoggedIn] = useState(false)

  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <StatusBar backgroundColor="#0288D1" barStyle="light-content" />
        {isLoggedIn ? <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'InitialHome') {
              iconName = focused ? 'ios-home' : 'ios-home-outline';
            } else if (route.name === 'History') {
              iconName = focused ? 'md-timer' : 'md-timer-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarShowLabel: false,
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#0288D1' },
          headerTitleAlign: 'center'
        })}> 
          <Tab.Screen name="InitialHome" component={HomeNavigator} options={{ header: () => null }}/>
          <Tab.Screen name="History" component={History} />
          <Tab.Screen name="Profile" component={Profile} initialParams={{ onLogout: () => setLoggedIn(false) }}/>
        </Tab.Navigator>
        : <Login onLogin={() => setLoggedIn(true)}/>}
        {/* <Home/> */}
        {/* <News/> */}
        {/* <Search/> */}
        {/* <NewsDetail/> */}
        {/* <Profile/> */}
        {/* <AppBar/> */}
        {/* <History /> */}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;