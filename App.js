/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';
import { VStack, HStack, Button, IconButton, Icon, Text, Center, StatusBar, NativeBaseProvider, Box, extendTheme } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
  Dimensions,
  TouchableOpacity,
  Animated,
  Pressable,
} from 'react-native';
import Constants from 'expo-constants';

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


function AppBar(){
  return (
    <>
        <StatusBar backgroundColor="#0288D1" barStyle="light-content" />

        <Box safeAreaTop backgroundColor="#0288D1" />

        <HStack bg='#0288D1' px="146" py="3" justifyContent='space-between' alignItems='center'>
          <HStack space="4" alignItems='center'>
            <IconButton icon={<Icon size="sm" as={<MaterialIcons name='menu' />} color="white" />} />
            <Text fontFamily="heading" color="white" fontSize="18" fontWeight='semibold' fontStyle="normal">History</Text>
          </HStack>
          <HStack space="2">
            <IconButton icon={<Icon as={<MaterialIcons name='favorite' />} size='sm' color="white" />} />
            <IconButton icon={<Icon as={<MaterialIcons name='search' />}
            color="white" size='sm'  />} />
            <IconButton icon={<Icon as={<MaterialIcons name='more-vert' />} size='sm' color="white" />} />
          </HStack>
        </HStack>

    </>
  )
}

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <AppBar/>
    </NativeBaseProvider>
  );
};

export default App;

// const FirstRoute = () => <Center flex={1}>This is Tab 1</Center>;

// const SecondRoute = () => <Center flex={1}>This is Tab 2</Center>;

// const ThirdRoute = () => <Center flex={1}>This is Tab 3</Center>;

// const FourthRoute = () => <Center flex={1}>This is Tab 4 </Center>;

// const initialLayout = { width: Dimensions.get('window').width };

// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
//   third: ThirdRoute,
//   fourth: FourthRoute,
// });

// export default function TabViewExample() {
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: 'first', title: 'Tab 1' },
//     { key: 'second', title: 'Tab 2' },
//     { key: 'third', title: 'Tab 3' },
//     { key: 'fourth', title: 'Tab 4' },
//   ]);

//   const renderTabBar = (props) => {
//     const inputRange = props.navigationState.routes.map((x, i) => i);
//     return (
//       <Box flexDirection="row">
//         {props.navigationState.routes.map((route, i) => {
//           const opacity = props.position.interpolate({
//             inputRange,
//             outputRange: inputRange.map((inputIndex) =>
//               inputIndex === i ? 1 : 0.5
//             ),
//           });
//           const color = index === i ? '#1f2937' : '#a1a1aa';
//           const borderColor = index === i ? 'cyan.500' : 'coolGray.200';

//           return (
//             <Box
//               borderBottomWidth="3"
//               borderColor={borderColor}
//               flex={1}
//               alignItems="center"
//               p="3"
//               cursor="pointer">
//               <Pressable
//                 onPress={() => {
//                   console.log(i);
//                   setIndex(i);
//                 }}>
//                 <Animated.Text style={{ color }}>{route.title}</Animated.Text>
//               </Pressable>
//             </Box>
//           );
//         })}
//       </Box>
//     );
//   };

//   return (
//     <NativeBaseProvider>
//       <TabView
//         navigationState={{ index, routes }}
//         renderScene={renderScene}
//         renderTabBar={renderTabBar}
//         onIndexChange={setIndex}
//         initialLayout={initialLayout}
//         style={{ marginTop: StatusBar.currentHeight }}
//       />
//     </NativeBaseProvider>
//   );
// }
