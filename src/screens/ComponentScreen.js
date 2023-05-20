import React from 'react'
import {Text , View ,StyleSheet} from 'react-native'


const ComponentScreen=()=>{
return <Text style={styles.maya}>Hi this is components</Text>
}

const styles=StyleSheet.create({
    maya:{
        fontSize:30
    }
});

export default ComponentScreen;