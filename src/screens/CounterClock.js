import React ,{ useState } from "react";
import { Text, View, Button } from "react-native";

const CounterClock = () => {
const [counter,setCounter]=useState(0);

    return (
        <View>
            <Button
                title="Increment"
                onPress={()=>{
                    setCounter(counter+1)

                }}
            />
                  <Button
                title="Decrement"
                onPress={()=>{
                    setCounter(counter-1)

                }}
            />
            <Text>counter {counter}</Text>
        </View>
    )
}

export default CounterClock;

