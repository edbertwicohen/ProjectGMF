import React from "react";
import { Button, View, Text } from "native-base";
import { Image } from "react-native";

const Home = ( { navigation } ) => {
    return(
        <View style={{alignItems: 'center'}}>
            <Button marginTop={10} h='130' w='300' onPress={() => navigation.navigate('Search')} >
                <View style={{ width: 300, height: 130, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../assets/search.png')} style={{ width: 300, height: 130, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
                    <View style={{ position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.55)', top: 0, left: 0, right: 0, bottom: 0 }}/>
                    <Text style={{ color: 'white' }} fontSize={18} fontWeight='extrabold'>Search Task</Text>
                </View>
            </Button>
            <Button marginTop={10} h='130' w='300' onPress={() => navigation.navigate('News')}>
                <View style={{ width: 300, height: 130, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../assets/news.png')} style={{ width: 300, height: 130, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
                    <View style={{ position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.55)', top: 0, left: 0, right: 0, bottom: 0 }}/>
                    <Text style={{ color: 'white' }} fontSize={18} fontWeight='extrabold'>News</Text>
                </View>
            </Button>
            <Button marginTop={10} h='130' w='300'>
                <View style={{ width: 300, height: 130, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../assets/event.png')} style={{ width: 300, height: 130, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
                    <View style={{ position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.55)', top: 0, left: 0, right: 0, bottom: 0 }}/>
                    <Text style={{ color: 'white' }} fontSize={18} fontWeight='extrabold'>Event</Text>
                </View>
            </Button>
        </View>
    )
}

export default Home;