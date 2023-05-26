import React from 'react'
import {Text,Button,View,StyleSheet} from 'react-native'

const ColorCounter=({color})=>{



    return(
        <View>
        <Text>{color}</Text>
        <Button title={ `Increment ${color}`} />
        <Button title={ `Decrement ${color}`} />
        </View>
    )
}


export default ColorCounter