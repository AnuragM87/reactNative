import React from 'react'
import {View ,Text ,StyleSheet ,FlatList} from 'react-native'

const ListScreen=()=>{
    const friends=[
        {name:'friend1',key:'1'},
        {name:'friend2',key:'2'},
        {name:'friend3',key:'3'},
        {name:'friend',key:'4'}
    ]
    return (
    <FlatList 
    // horizontal
    // showsHorizontalScrollIndicator={false}
    keyExtractor={(friend)=>friend.name}
    data={friends} 
    renderItem={({item})=>{
        return <Text style={styles.maya}>{item.name}</Text>
    }}/>
    )
};
const styles=StyleSheet.create({
    maya:{
        fontSize:30
    }
});


export default ListScreen;