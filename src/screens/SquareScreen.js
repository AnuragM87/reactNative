import React, {useState} from 'react'
import {Text,View} from 'react-native'
import ColorCounter from '../components/ColorCounter'

const SquareScreen=()=>{
    const [red,setRed]=useState(0)
    const [blue,setBlue]=useState(0)
    const [green,setGreen]=useState(0)
    console.log(red);
    return (
    <View>
    
     <ColorCounter onIncrement={()=>setRed(red+10)} color="Red"/>
     <ColorCounter onIncrement={()=>setGreen(green+10)} color="Blue"/>
     <ColorCounter onIncrement={()=>setBlue(blue+10)} color="Green"/>

     </View>
    )
    
}


export default SquareScreen