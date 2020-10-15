/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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
} from 'react-native';
import Lists from "./components/Lists";
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/EvilIcons';
import AddTodo from './components/AddTodo';



const App = () => {
  let counter = 0

  const [todos, setTodos] = useState([
    { text: "buy coffe", key: "1" },
    { text: "create an app", key: "2" },
  ])

  const pressHandler = (val) => {
    console.log(val)
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != val);
    })
  }

  const submitHandler = (deger) => {
    setTodos((myValues) => {
      return [
        { text: deger, key: Math.random().toString() },
        ...myValues
      ]
    })
  }

  return (

    <SafeAreaView style={styles.safearea}>
      <View style={{ flex: 1 }}>
        <View style={styles.todoView}>
          <Text style={styles.todo}>TODO</Text>
          <Text style={styles.counter}>{counter}</Text>
        </View>


        <View style={{ flex: 6 }} >
          <FlatList

            data={todos}
            renderItem={({ item }) => <Lists value={item} pressHandler={pressHandler} />}
          />

        </View>




      </View>


      <AddTodo submitHandler={submitHandler} />







    </SafeAreaView>
  )

};




const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: "#34515e"
  },
  todoView: {
    zIndex: 1,
    flexDirection: "row",
    flex: 1,
    margin: 10

  },
  todo: {
    zIndex: 1,
    flex: 1,
    color: "#c77800",
    fontSize: 32,
    fontWeight: "bold"
  },
  counter: {
    color: "#c77800",
    fontSize: 32,
    fontWeight: "bold",

  },
  flatList: {
    borderWidth: 1,
    padding: 5,
    margin: 2,
    borderRadius: 10,
    backgroundColor: "#e5ffff",


  }


})

export default App;
