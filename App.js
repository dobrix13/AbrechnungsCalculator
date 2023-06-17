import React from "react";
import { StyleSheet, Text, View } from "react-native";
import EditView from "./modules/EditView";
import ListView from "./modules/ListView";

export default function App() {
  const AppName = "Money Watcher";
  const [umsatz, setUmsatz] = React.useState(0);
  const [tip, setTip] = React.useState(0);
  const [bar, setBar] = React.useState(0);
  const [listMode, setListMode] = React.useState(true);

  const colectData = (id, bar, voucher, cards) => {
    var tUmstatz = parseFloat(bar) + parseFloat(voucher) + parseFloat(cards);
    var tTip = umsatz * (0.02).toFixed(2);
    var tBar = parseFloat(bar) + this.tTip + 100;
    setListMode(true);
    setBar(tBar);
    setTip(tTip);
    setUmsatz(tUmstatz);
    console.log(id, bar, voucher, cards);
  };
  const gotoEditView = ()=>{
    setListMode(false);
  }

  React.useEffect(()=>{
    if(!umsatz){
      console.log('forbidden')
    }
      else{
        console.log('gerechnet')
      }
    
  }, [umsatz])

  return (
    <View style={styles.container}>
      {listMode ? 
      <ListView gotoEditView={gotoEditView}/> : 
      <EditView fieldTitle="Input details:" colectData={colectData} />}
      
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
