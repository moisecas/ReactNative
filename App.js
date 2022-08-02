import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomDatePicker from './src/Components/DataPiker';

const App = () => {
  return (
    <View style={{ flex: 1, marginTop:50}}>
      
        <View  style={{ marginHorizontal:20}} >
        <Text>Date</Text> 
        <CustomDatePicker  
            textStyle={{
              paddingvertical:10,
              paddinghorizontal:10,
              borderColor:'#000',
              borderWidth:1, 
            }}
          />


        </View>

    </View>
  );
}

export default App; 


