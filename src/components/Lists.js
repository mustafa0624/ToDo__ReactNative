import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';


const Lists = ({value, pressHandler}) =>{
    return(
        
            <Text style={styles.container}
            onPress={()=> pressHandler(value.key)}
            >{value.text} </Text>
        
    )
}








const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        padding:5,
        margin:2,
        borderRadius:10,
        backgroundColor:"#e5ffff",
        

    }
})








export default Lists;