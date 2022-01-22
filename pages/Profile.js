import React from "react";
import { Button, HStack, Image, Text, View } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

const Profile = ({ route }) => {
    const onLogout = route.params.onLogout
    return(
    <View style={{alignItems: 'center'}}>
        <View style={{alignItems: 'center'}}>
            <Image marginTop={20} marginBottom={2} source={require('../assets/person.png')} size={150} resizeMode="contain" style={{ borderRadius: 200 }} alt="person image"/>
            <Text marginBottom={2} fontSize={18} fontWeight='semibold'>Bambang Salahudin</Text>
            <Text marginBottom={2} fontSize={10} fontWeight='light'>bambang.s@gmf-aeroasia.co.id</Text>
            <HStack alignItems='center'>
                <Icon name="create-outline" size={18} color='#373737'/>
                <Text marginTop={2} fontSize={10} fontWeight='normal'>Edit Profile</Text>
            </HStack>
            <Button marginTop={20} backgroundColor='#01579B' h='36' w='246' onPress={() => onLogout()}>LOGOUT</Button>
        </View>
    </View>
    )
}

export default Profile;