import React, {useState} from "react"; 
import {Text, StyleSheet, View, Button, Platform} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { StatusBar } from "expo-status-bar"; 

export default function App() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Empty");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    
    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + "/" + (tempDate.getMonth() + 1) + "/" + tempDate.getFullYear();
    let fTime = 'hours: ' + tempDate.getHours() + ' minutes: ' + tempDate.getMinutes();
    setText(fDate + " " + fTime);

    console.log(fDate + " " + fTime);

  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }

  return (
    <View style={styles.container}>
      <Text style={{fontWeight:'bold', fontSize:20}}></Text>

      <View style={{margin:20}} >
        <Button title="DatePicker" onPress={() => showMode("date")} />
      </View>

      <View style={{margin:20}} >
        <Button title="Timepicker" onPress={() => showMode("time")} />
      </View>

      {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
      />)} 

      <StatusBar/>
    </View>    
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center", // para que el texto se alinee en el centro de la pantalla y no se quede en el borde
  }
});
