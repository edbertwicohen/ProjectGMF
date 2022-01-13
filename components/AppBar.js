import React from 'react';
import { Box, HStack, IconButton, StatusBar, Text } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";

const AppBar = () => {
  return (
    <>
      <StatusBar backgroundColor="#0288D1" barStyle="light-content" />

      <Box safeAreaTop backgroundColor="#0288D1" />

      <HStack bg='#0288D1' justifyContent='space-between' alignItems={'center'} padding={4}>
        <IconButton icon={<Icon name='alert-circle-outline' size={24} color={'white'}/>} />
        <Text fontFamily="heading" color="white" fontSize="18" fontWeight='semibold' fontStyle="normal">History</Text>
        <IconButton icon={<Icon name='search-outline' size={24} color={'white'}/>} />
      </HStack>
    </>
  )
}

export default AppBar;