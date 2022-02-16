import React, { useEffect, useState } from "react";
import { Button, HStack, Text, View } from "native-base";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const logout = () => {
    auth()
    .signOut()
}

const Profile = ({ navigation }) => {
    const [userInfo, setUserInfo] = useState()
    useEffect(() => {
        (async() => {
            const user = await firestore().collection('users').doc(auth().currentUser.uid).get();
            console.log(user.data())
            setUserInfo(user.data())
        })()
    }, [])
    return(
    <View style={{alignItems: 'center'}}>
        <View style={{alignItems: 'center'}}>
            <Image marginTop={20} marginBottom={8} source={{uri: userInfo?.image}} size={150} resizeMode="contain" style={{ borderRadius: 200 / 2, width: 200, height: 200 }} alt="person image"/>
            <Text marginBottom={2} fontSize={18} fontWeight='semibold'>{userInfo?.username}</Text>
            <Text marginBottom={2} fontSize={10} fontWeight='light'>{userInfo?.email}</Text>
            <HStack alignItems='center'>
                <Icon name="create-outline" size={18} color='#373737'/>
                <Text marginTop={2} fontSize={10} fontWeight='normal' onPress={() => navigation.navigate('Edit Profile')}>Edit Profile</Text>
            </HStack>
            <Button marginTop={20} backgroundColor='#01579B' h='36' w='246' onPress={() => logout()}>LOGOUT</Button>
        </View>
    </View>
    )
}

export default Profile;