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
    FlatList,
    Alert
} from 'react-native';
import Box from "./components/denemeBox"
import Cards from "./components/denemeCards"

const DenemeApp = () => {
    const [list, setList] = useState([]);



    function addTodo(text) {
        const element = {
            id: list.length,
            todo: text,
            isDone: false
        }

        const newList = [...list, element]
        setList(newList)
    }

    function doneTodo(todoId){
        const newArray =[...list];
        const index = newArray.findIndex(item=>item.id==todoId)
        newArray[index].isDone = !newArray[index].isDone 

        setList(newArray)


    }

    function removeTodo(todoId){
        const newArray = [...list];
        const index =newArray.findIndex(a=>a.id==todoId)
        newArray.splice(index,1)
        setList(newArray)
    }
   
    const renderTodo = ({ item }) => {
        return (

            <Cards
                onDone={(id) => doneTodo(id)}
                onRemove={(i)=>removeTodo(i)}
                value={item} />
        )
    }




    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.name}>
                <Text style={styles.todo}>TODO</Text>
                <Text style={styles.counter}>{list.filter(a=>a.isDone==false).length}</Text>

            </View>

            <FlatList
                keyExtractor={(_, index) => index.toString()}
                data={list}
                renderItem={renderTodo}
                ListEmptyComponent={() => <Text style={styles.nothing}>Nothing To do...</Text>}

            // <Text>{data.item.todo}</Text>
            />


            <Box
                onTodoEnter={value => addTodo(value)}
            />




        </SafeAreaView>
    )
}




const styles = StyleSheet.create({
    container: {
        backgroundColor: "#00695c",
        flex: 1
    },
    name: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 6
    },
    todo: {
        color: "#e64a19",
        fontSize: 45,
        fontWeight: "bold",

    },
    bottom: {
        alignSelf: "center",
        backgroundColor: "#80cbc4",
        padding: 10,
        margin: 5,
        paddingHorizontal: 30,
        borderRadius: 10
    },
    counter: {
        color: "#e64a19",
        fontSize: 45,
        fontWeight: "bold"
    },
    nothing: {
        alignSelf: "center",
        color: "white"
    }
})











export default DenemeApp