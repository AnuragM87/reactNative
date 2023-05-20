import React from "react";
import { Text, StyleSheet,View , Button ,TouchableOpacity} from "react-native";

const HomeScreen = (props) => {
  return <View>
  <Text style={styles.text}>N-Link</Text>
  <Text style={{ marginLeft:140}}>Neeladri-Link</Text>

  <Button
  onPress={()=>props.navigation.navigate("List")}
  title="List"
  />
  <Button
  onPress={()=>props.navigation.navigate("Component")}
  title="component screen"
  />
   <Button
  onPress={()=>props.navigation.navigate("Counter")}
  title="counter"
  />
<Button
  onPress={()=>props.navigation.navigate("Images")}
  title="Images"
  />

<Button
  onPress={()=>props.navigation.navigate("RandomColor")}
  title="Random-Color"
  />
  <TouchableOpacity>
    <Text>Go to list </Text>
  </TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    marginLeft:120
  },
});

export default HomeScreen;
