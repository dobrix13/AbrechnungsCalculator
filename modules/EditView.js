import React from "react";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";

const EditView = ({ colectData, fieldTitle }) => {
  const [value, setValue] = React.useState(null);
  const [isFocus, setIsFocus] = React.useState(false);
  const [bargeld, onChangeBargeld] = React.useState("");
  const [voucher, onChangeVoucher] = React.useState("");
  const [cards, onChangeCards] = React.useState("");
  const [selected, setSelected] = React.useState("");


  const waiters = [
    { value: "1", label: "Missim " },
    { value: "2", label: "Anca" },
    { value: "3", label: "Dilara" },
    { value: "4", label: "Soti" },
    { value: "5", label: "Many" },
    { value: "6", label: "Vasilli" },
    { value: "7", label: "Angy" },
    { value: "8", label: "Raxis" },
    { value: "9", label: "Elea" },
    { value: "10", label: "Kosta" },
  ];

  return (
    <View style={styles.container}>

      <Dropdown
        style={styles.dropdown}
        data={waiters}
        placeholder={!isFocus ? "Select item" : "..."}
        searchPlaceholder="Search..."
        valueField="value"
        labelField="label"
        searchField
        value={value}
        onChange={(item) => setValue(item.value)}
      />

      <Text style={styles.text}>{fieldTitle}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeBargeld}
        value={bargeld}
        placeholder="Bar_gegeben"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeVoucher}
        value={voucher}
        placeholder="Gutscheine"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeCards}
        value={cards}
        placeholder="Karten"
        keyboardType="numeric"
      />
      <View style={styles.button}>
        <Pressable
          onPress={() => {
            value? colectData(waiters[value -1].label, bargeld, voucher, cards):
            console.log('select some item');
          }}
        >
          <Text style={styles.text}>I'm pressable!</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
    width: "100%",
    alignItems: "center",
  },
  text: { color: "white" },
  input: {
    height: 35,
    width: "80%",
    color: "white",
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: "orangered",
  },
  dropdown: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 22,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  button: {
    borderWidth: 1,
    borderColor: "white",
    margin: 25,
    width: "80%",
    alignItems: "center",
  },
});

export default EditView;
