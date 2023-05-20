import React, {useState} from 'react'
import {Text ,StyleSheet,Button,View,FlatList} from 'react-native'


const ColorScreen=()=>{

const [color,setColor]=useState([]);

console.log(color)

    return (

        <View>
            <Button title='Add Color'
            onPress={()=>{
                setColor([...color,randomRGB()])
            }}
            />
            <FlatList
            keyExtractor={item=>item}
            data={color}
            renderItem={({item})=>{
                return   <View style={{height:100, width:100 ,backgroundColor: item }}/>

            }}            
            />
        </View>
    )
}

const randomRGB=()=>{

    const red =Math.floor(Math.random()*256)
    const green =Math.floor(Math.random()*256)
    const blue =Math.floor(Math.random()*256)


    return `rgb(${red},${blue},${blue})`
}

export default ColorScreen;