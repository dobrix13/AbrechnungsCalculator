import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import EditView from "./modules/EditView";
import ListView from "./modules/ListView";

export default function App() {
  const AppName = "Money Watcher";

  class Abrechnung {
    constructor(name, bar, voucher, cards, u, t, result) {
      this.name = name;
      this.bar = bar;
      this.voucher = voucher;
      this.cards = cards;
      this.umsatz = u;
      this.tipAbgabe = t;
      this.bargeldAbgabe = result;
    }
  }
  const [umsatz, setUmsatz] = React.useState(0);
  const [tipAbgabe, setTipAbgabe] = React.useState(0);
  const [bargeldAbgabe, setBargeldAbgabe] = React.useState(0);
  const [listMode, setListMode] = React.useState(true);
  const [listArr, setListArr] = React.useState([]);

  const showAlert = () =>
    Alert.alert(
      tipAbgabe,
      bargeldAbgabe,
      [
        {
          text: "ok",
          onPress: () => Alert.alert("Nix Ok"),
          style: "cancel",
        },
      ],
      {
        cancelable: true,
        onDismiss: () => Alert.alert("Ruhe jetzt."),
      }
    );

  const colectData = (id, bar, voucher, cards) => {
    var b = parseFloat(bar);
    var v = parseFloat(voucher);
    var c = parseFloat(cards);
    var u = c + v + b;
    setUmsatz(u);

    var tt = u * 0.02;
    var t = tt.toFixed(2);
    setTipAbgabe(t);
    var a = add(b, t);
    var result = add(a, 100).toFixed(2);
    setBargeldAbgabe(result);
    function add(b, t) {
      return parseFloat(t) + parseFloat(b);
    }
    var abr = new Abrechnung(id, bar, voucher, cards, u, t, result);
    setListArr([...listArr, abr]);
    setListMode(true);
  };

  const gotoEditView = () => {
    setListMode(false);
  };

  const returnBack = () => {
    setListMode(true);
    console.log("abrechnung canceled");
  };

  React.useEffect(() => {
    if (!umsatz) {
      console.log("forbidden");
    } else {
      showAlert();
    }
  }, [listArr]);

  return (
    <View style={styles.container}>
      {listMode ? (
        <ListView
          gotoEditView={gotoEditView}
          list={listArr}
        />
      ) : (
        <EditView fieldTitle="Input details:" colectData={colectData} returnBack={returnBack} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#333",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "yellow",
    borderRadius: 8,
    paddingTop: 45,
  },
  text: {
    color: "#fff",
  },
});
