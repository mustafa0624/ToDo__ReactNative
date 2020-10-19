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
    FlatList,
    Alert
} from 'react-native';

const Cards=(props)=>{
   
   

    

    return(
        <TouchableOpacity 
        onPress={()=>props.onDone(props.value.id)}
        onLongPress={()=>props.onRemove(props.value.id)}
        style={[styles.container,{backgroundColor:props.value.isDone ? "#90a4ae": "#e8eaf6"}]}>
            <Text style={{textDecorationLine:props.value.isDone ? "line-through" : "none"}}>{props.value.todo}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({ 
    container: {
        backgroundColor: "#e8eaf6",
        margin:3,
        padding:4,
        borderRadius:10,
        
        
        // flex: 1
    },
    name: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 6
    }
   
})




export default Cards;