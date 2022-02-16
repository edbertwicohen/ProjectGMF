// import 'react-native-gesture-handler';
import React from "react";
import { createStackNavigator } from '@react-navigation/stack'
import EditProfile from "./EditProfile";
import Profile from "./Profile";

const Stack = createStackNavigator()

const ProfileNavigator = ({ route }) => (
    <Stack.Navigator screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#0288D1' },
        headerTitleAlign: 'center'
    }}>
        <Stack.Screen name='Profile' component={Profile} initialParams = {route.params}/>
        <Stack.Screen name='Edit Profile' component={EditProfile}/>
    </Stack.Navigator>
)

export default ProfileNavigator