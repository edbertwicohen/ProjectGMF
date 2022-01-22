import React from "react";
import { Image, View, Text, ScrollView } from "native-base";

const NewsDetail = ({ route }) => {
    const detail = route.params.detail
    return(
        <ScrollView>
            <View style={{alignItems: 'center'}}>
                <Image source={detail.image} size={300} resizeMode="contain" alt="newsImage"/>
                <Text style={{alignSelf: 'flex-start'}} paddingLeft={16} paddingRight={16} fontSize={16} fontWeight='bold'>{detail.title}</Text>
                {detail.description.split('\n').map(d => <Text style={{alignSelf: 'flex-start'}} marginTop={5} paddingLeft={16} paddingRight={16} fontSize={12} >{d.trim()}</Text>)}
            </View>
        </ScrollView>
    )
}

export default NewsDetail;