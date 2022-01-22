// import 'react-native-gesture-handler';
import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import Search from './Search';
import News from './News';
import Home from './Home';
import NewsDetail from "./NewsDetail";

const Stack = createStackNavigator()

const HomeNavigator = () => (
    <Stack.Navigator screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#0288D1' },
        headerTitleAlign: 'center'
    }}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Search' component={Search}/>
        <Stack.Screen name='News' component={News}/>
        <Stack.Screen name='NewsDetail' component={NewsDetail}/>
    </Stack.Navigator>
)

export default HomeNavigator