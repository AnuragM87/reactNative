import React from "react"
import {Text,Image,View} from 'react-native'

const ImageDetails=(props)=>{


    return (
       <View>
        <Image source={props.imageSource}/>
        <Text>{props.title}</Text>
        </View>
    )
}

export default ImageDetails;