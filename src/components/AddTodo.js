import React, { useState } from 'react';
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

const AddTodo = ({submitHandler}) => {
    const [text,setText] = useState('');

    const changeHandler = (val) =>{
      // console.log(val)
       setText(val);
        

    }
    return (

        <View style={styles.box}>
            <TextInput 
            placeholder="new Todo"
            onChangeText={changeHandler}
            style={styles.input}
            autoFocus
            />

            <TouchableOpacity
                style={styles.button}
                onPress={()=>submitHandler(text)}
                
            >

                <Text style={{ color: "white", fontWeight: "bold" }}>ADD TODO</Text>
            </TouchableOpacity>


        </View>


    )
}



const styles = StyleSheet.create({
  
  
    box: {
      
      backgroundColor: "#b1bfca",
      alignItems: "center",
      padding: 15,
      margin: 10,
      marginBottom: 20,
      borderRadius: 18,
      
  
  
    },
    button: {
      backgroundColor: "#34515e",
      width: Dimensions.get("window").width * 0.4,
      marginTop: 10,
      // textAlign:"center",
      alignItems: "center",
      padding: 10,
      borderRadius: 5
  
  
    },
  
    input: {
      backgroundColor: "white",
      width: Dimensions.get("window").width * 0.85,
      borderRadius: 11
    }
  })
  




export default AddTodo;