import React from 'react';
import { Text ,StyleSheet} from 'react-native';

// 1st import all libs comp
//2nd only Text and Style


const ComponentsScreen =()=>{

    return <Text style={styles.textStyle}> use to display text</Text>

}



const styles=StyleSheet.create({
    textStyle:{
   fontSize:30

    }

    //style obj
})


export default ComponentsScreen;