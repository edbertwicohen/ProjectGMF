import React from 'react';
import { Box, HStack, IconButton, StatusBar, Text } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

const AppBar = ({ title }) => {
  return (
    <>
      <StatusBar backgroundColor="#0288D1" barStyle="light-content" />

      <Box safeAreaTop backgroundColor="#0288D1" />

      <HStack bg='#0288D1' justifyContent='center' alignItems={'center'} padding={4}>
        {/* <IconButton icon={<Icon name='alert-circle-outline' size={24} color={'white'}/>} /> */}
        <Text fontFamily="heading" color="white" fontSize="18" fontWeight='semibold' fontStyle="normal">{title}</Text>
        {/* <IconButton icon={<Icon name='search-outline' size={24} color={'white'}/>} /> */}
      </HStack>
    </>
  )
}

export default AppBar;