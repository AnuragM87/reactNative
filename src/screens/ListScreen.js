import React from 'react'
import {View ,Text,StyleSheet,FlatList} from 'react-native'

//props are config option we specify for jsx

cosnt ListScreen=()=>{
    const Frnds=[
        {name: "f1"},
        {name: "f11"},
        {name: "f111"},
        {name: "f1111"},
        {name: "f112"},
        {name: "f1323"},
        {name: "f123"},
        {name: "f1233"}
    ]
    return(

  <FlatList 
  data={Frnds} 
  renderItem={({item})=>{
    return<Text >{item.name}</Text>
  }}/>

    )
const style =StyleSheet.create({})


export default ListScreen;