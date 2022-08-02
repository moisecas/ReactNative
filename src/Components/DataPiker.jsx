import react from "react";
import {Modal, StyleSheet, Text, View, TouchableHighlight, Platform} from "react-native";
// import  DateTimePicker from "@react-native-community/datetimepicker";

import moment from 'moment'; 

const CustomDatePicker = (props) => {

    const {textStyle} = props; 

    return (
        
        <TouchableHighlight
            activeOpacity={0}
            onPress={() => console.log('Pressed')}>
            <Text style={textStyle}> {moment().format('YYYY-MM-DD')} </Text> {/* para fecha moment().format('YYYY-MM-DD') */}

        </TouchableHighlight>
    )
}

CustomDatePicker.defaultProps = { 
    textStyle: {},  
}

export default CustomDatePicker; 
