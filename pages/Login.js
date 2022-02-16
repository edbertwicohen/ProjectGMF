import React from "react";
import { Image, View, Text, Input, Button, IconButton } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import auth from '@react-native-firebase/auth'

const Login = () => {
    const [isShow, setShow] = React.useState(false)
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')

    const handleClick = () => setShow(!isShow)

    const handleLogin = () => {
        setError('')
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {    
                if (error.code === 'auth/invalid-email') {
                    setError('That email address is invalid!');
                } else if (error.code === 'auth/network-request-failed') {
                    setError('Please check your connection!')
                }
                else {
                    setError('Unexpected Error!')
                }    
                console.error(error.message);
            });
    }

    return(
    <View style={{alignItems: 'center'}}>
        <View>
            <Image source={require('../assets/logogmf.png')} size={250} resizeMode="contain" alt="logoGMF"/>
            <Input onChangeText={t => setEmail(t)} marginBottom={2} InputLeftElement={<Icon name="person" size={18} color='#C7C7C7'/>} placeholder='Email' borderColor='#C7C7C7' h='36' w='246'/>
            {/* <Input marginBottom={2} InputLeftElement={<Icon name="ios-lock-closed" size={18} color='#C7C7C7'/>} placeholder='Password' borderColor='#C7C7C7' h='36' w='246'/> */}
            <Input
                onChangeText={t => setPassword(t)}
                marginBottom={2} InputLeftElement={<Icon name="ios-lock-closed" size={18} color='#C7C7C7'/>}
                borderColor='#C7C7C7'
                type={isShow ? "text" : "password"}
                w={{
                    base: "60%",
                    md: "25%",
                }}
                h={36}
                InputRightElement={
                    <IconButton icon={<Icon name={isShow ? 'ios-eye-off' : 'ios-eye'} size={18} color='#AEAEAE'/>} onPress={handleClick}>
                        {isShow ? "Hide" : "Show"}
                    </IconButton>
                }
                placeholder="Password"
            />
            <Text style={{alignSelf: 'flex-end'}} fontSize={10}>Forgot Password?</Text>
            {!!error && <Text marginTop={10} textAlign='center' color='red.500' fontSize={12} >{error}</Text>}
            <Button marginTop={10} backgroundColor='#01579B' h='36' w='246' onPress={() => handleLogin(email, password)} disabled={!email || !password}>LOGIN</Button>
        </View>
    </View>
    )
}

export default Login;