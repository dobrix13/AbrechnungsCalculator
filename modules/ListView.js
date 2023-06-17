import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";


export default function ListView({gotoEditView, list}) {
  console.log(list)
  return (
	<View>
		<Text>
			wait
		</Text>
    <View Style={Styles.button}>
      <Pressable onPress={()=>{gotoEditView()}}>
        <Text>+</Text>
      </Pressable>
    </View>
	</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333'
  },
  text: {
    color: "#fff",
  },
});
