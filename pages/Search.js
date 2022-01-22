import React from "react";
import { Button, HStack, IconButton, Input, Text, View } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

const Search = () => {
    return(
    <View style={{alignItems: 'center', height: '100%'}}>
        <HStack>
            <Input marginTop={10} marginBottom={2} InputLeftElement={<Icon name="search-outline" size={18} color='#C7C7C7'/>} placeholder='Input Order Number' borderColor='#C7C7C7' h='36' w='246'/>
            <IconButton marginTop={8} icon={<Icon name='ios-scan-circle' size={36} color='#0277BD'/>} />
        </HStack>
        <Text marginLeft={16} marginTop={16} style={{alignSelf: 'flex-start'}} fontSize={10}>Recent Search</Text>
        <Button style={{ position: 'absolute', bottom: 16 }} backgroundColor='#01579B' h='36' w='246'>SEARCH</Button>
    </View>
    )
}

export default Search;