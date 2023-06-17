import React from "react";
import { StyleSheet, Text, View } from "react-native";
import EditView from "./modules/EditView";
import ListView from "./modules/ListView";

export default function App() {
  const AppName = "Money Watcher";
 
  class Abrechnung {
    constructor(name, bar, voucher, cards, tip, umsatz, abgabe) {
      this.name = name;
      this.bar = bar;
      this.voucher = voucher;
      this.cards = cards;
    }
  }
  const [umsatz, setUmsatz] = React.useState(0)
  const [listMode, setListMode] = React.useState(true);
  const [listArr, setListArr] = React.useState([]);

  const colectData = (id, bar, voucher, cards) => {
    setUmsatz(bar + cards + voucher)
    var abr = new Abrechnung(id, bar, voucher, cards);
    setListArr(listArr => [...listArr, abr]);
    setListMode(true);
  };
  const gotoEditView = ()=>{
    setListMode(false);
  }

  React.useEffect(()=>{
    if(!umsatz){
      console.log('forbidden')
    }
      else{
        var b = parseFloat(listArr[listArr.length-1].bar);
        var v = parseFloat(listArr[listArr.length-1].voucher);
        var c = parseFloat(listArr[listArr.length-1].cards);

        var u = c + v + b;
        var tt = u * 0.02;
        var t = tt.toFixed(2)
        
        var a = add(b , t)
        
        function add(b , t){
          return(parseFloat(t) + parseFloat(b))
        };
       alert(a)
      }
    
  }, [umsatz])

  return (
    <View style={styles.container}>
      {listMode ? 
      <ListView gotoEditView={gotoEditView} list={listArr}/> : 
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
