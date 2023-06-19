import React from "react";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Button,
} from "react-native";

const EditView = ({ colectData, fieldTitle, returnBack }) => {
  const [value, setValue] = React.useState(null);
  const [isFocus, setIsFocus] = React.useState(false);
  const [bargeld, onChangeBargeld] = React.useState("");
  const [voucher, onChangeVoucher] = React.useState("");
  const [cards, onChangeCards] = React.useState("");
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
        searchField
        style={styles.dropdown}
        data={waiters}
        placeholder={!isFocus ? "Kelner auswälen" : "..."}
        searchPlaceholder="Search..."
        valueField="value"
        labelField="label"
        value={value}
        onChange={(item) => setValue(item.value)}
      />
      <Text style={styles.text}>{fieldTitle}</Text>
      <TextInput
        style={styles.input}
        maxLength={8}
        defaultValue="0"
        onChangeText={onChangeBargeld}
        value={bargeld}
        placeholder="Bar_gegeben"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        maxLength={8}
        defaultValue="0"
        onChangeText={onChangeVoucher}
        value={voucher}
        placeholder="Gutscheine"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        maxLength={8}
        defaultValue="0"
        onChangeText={onChangeCards}
        value={cards}
        placeholder="Karten"
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            value
              ? bargeld
                ? voucher 
                  ? cards ?  colectData(
                      waiters[value - 1].label,
                      bargeld,
                      voucher,
                      cards
                    )
                    : onChangeCards('0')
                  : onChangeVoucher("0")
                : onChangeBargeld("0")
              : alert("Bitte Kelner aus die liste auswälen");
          }}
          title="Umrechnen"
          color="#841584"
          accessibilityLabel="calculate values"
        />

        <Button
          onPress={() => returnBack()}
          title="Cancel"
          color="red"
          accessibilityLabel="return to list view"
        />
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
  buttonContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  text: { color: "white", fontSize: 25 },
  input: {
    height: 45,
    width: "80%",
    color: "white",
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: "orangered",
    marginVertical: 8,
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

  placeholderStyle: {
    fontSize: 16,
    color: "white",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "white",
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
    padding: 25,
    width: "80%",
    alignItems: "center",
  },
});

export default EditView;
