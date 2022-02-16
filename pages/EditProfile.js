import { Button, Input, Stack, Text, View } from "native-base";
import React from "react";

const EditProfile = () => {
    return(
        <View style={{alignItems: 'center'}}>
            <Text textAlign='center' padding={12} fontSize={16} fontWeight='medium'>CHANGE PASSWORD</Text>
            <Stack w="80%" maxW="300px">
                <Text fontSize={14} fontWeight='medium'>Current Password</Text>
                <Input marginBottom={4} variant="underlined" placeholder="" />
                <Text fontSize={14} fontWeight='medium'>New Password</Text>
                <Input marginBottom={4} variant="underlined" placeholder="" />
            </Stack>
            <Button marginTop={20} backgroundColor='#01579B' h='36' w='246'>SAVE</Button>
        </View>
    )
}

export default EditProfile;