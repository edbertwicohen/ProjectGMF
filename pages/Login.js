import React from "react";
import { Image, View, Text, Input, Button } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

const Login = () => {
    const [isShow, setShow] = React.useState(false)

    const handleClick = () => setShow(!isShow)

    return(
    <View style={{alignItems: 'center'}}>
        <View>
            <Image source={require('../assets/logogmf.png')} size={250} resizeMode="contain" alt="logoGMF"/>
            <Input marginBottom={2} InputLeftElement={<Icon name="person" size={18} color='#C7C7C7'/>} placeholder='Username' borderColor='#C7C7C7' h='36' w='246'/>
            {/* <Input marginBottom={2} InputLeftElement={<Icon name="ios-lock-closed" size={18} color='#C7C7C7'/>} placeholder='Password' borderColor='#C7C7C7' h='36' w='246'/> */}
            <Input
                marginBottom={2} InputLeftElement={<Icon name="ios-lock-closed" size={18} color='#C7C7C7'/>}
                type={isShow ? "text" : "password"}
                w={{
                    base: "60%",
                    md: "25%",
                }}
                InputRightElement={
                    <Button size="xs" rounded="none" w="1/6" h="full" onPress={handleClick}>
                        {isShow ? "Hide" : "Show"}
                    </Button>
                }
                placeholder="Password"
            />
            <Text style={{alignSelf: 'flex-end'}} fontSize={10}>Forgot Password?</Text>
            <Button marginTop={20} backgroundColor='#01579B' h='36' w='246'>LOGIN</Button>
        </View>
    </View>
    )
}

export default Login;