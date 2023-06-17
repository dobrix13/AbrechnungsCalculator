import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";


export default function ListView({gotoEditView}) {
  
  return (
	<View>
		<Text>
			List goes here!!
		</Text>
    <View>
      <Pressable onPress={()=>{gotoEditView()}}>
        <Text>Back to edit</Text>
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
