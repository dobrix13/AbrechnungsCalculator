import React from "react";
import { StyleSheet, Text, View, Pressable, FlatList } from "react-native";

export default function ListView({ gotoEditView, list }) {
  console.log(list);

  const [total, setTotal] = React.useState('total:');

  const renderAbrechnung = ({ item }) => {
    return (
      <View>
        <View style={styles.card}>
          <Text style={styles.cardHeader}>{`${item.name} `}</Text>
          <Text>{`Umsatz: ${item.umsatz}, `}</Text>
          <Text>{`Team - Tip: ${item.tipAbgabe}, `}</Text>
          <Text>{`Zum abgeben: ${item.bargeldAbgabe}`}</Text>
        </View>

        <View></View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <FlatList data={list} renderItem={renderAbrechnung} />
        <Text >{total}</Text>
      </View>
      
      <View style={styles.addButton}>
        <Pressable
          onPress={() => {
            gotoEditView();
          }}
        >
          <Text style={styles.text}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
  },
  text: {
    fontSize: 25,
    color: "white",
  },

  addButton: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 25,
    right: 10,
    backgroundColor: "limegreen",
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  card: {
    width: "80%",
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 0.5,
    borderColor: "limegreen",
    borderRadius: 12,
    alignItems: "baseline",
    justifyContent: "center",
    padding: 8,
  },
  cardHeader: {
    color: "limegreen",
    fontSize: 25,
  },
});
