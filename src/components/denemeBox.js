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

const Box = (props) => {
    const [input, setInput] = useState("");

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Add ToDo..."
                onChangeText={(text) => setInput(text)}
            />

            <TouchableOpacity style={styles.bottom}
                onPress={() => { props.onTodoEnter(input) }}
            >
                <Text style={styles.text}>Add...</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Box;


const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        borderRadius: 15,
        backgroundColor: "#e8eaf6"
    },
    input: {
        backgroundColor: "white",
        borderRadius: 10
    },
    bottom: {
        alignSelf: "center",
        backgroundColor: "#00695c",
        padding: 10,
        margin: 5,
        paddingHorizontal: 30,
        borderRadius: 10
    },
    text: {
        color: "white"
    }
})