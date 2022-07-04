import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Button } from "react-native";

const AddTodo = (props) => {
  const [text, setText] = React.useState(null);

  const { todos, setTodos } = props;

  const addTodo = () => {
    const todoId = Math.floor(Math.random() * 100000);
    let newTodo = { id: todoId, text: text };
    setTodos(todos.concat(newTodo));
    // console.log(newTodo);
    setText(null);
    // Keyboard.dismiss
  };

  return (
    <View style={{ flex: 0, paddingHorizontal: 15, flexDirection: "row", width: "100%", justifyContent: "space-between", marginVertical: 20 }}>
      <TextInput
        style={{
          borderColor: "lightblue",
          borderStyle: "solid",
          borderWidth: 2,
          borderRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 8,
          width: "80%",
          fontFamily: "monospace",
          color: "#9e9d9d",
          fontSize: 17,
        }}
        onChangeText={setText}
        value={text}
        placeholder="Today I will do.."
        placeholderTextColor="#9e9d9d"
      />
      <TouchableOpacity
        disabled={text === null ? true : false}
        style={{
          borderRadius: 10,
          backgroundColor: "white",
          width: "18%",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={addTodo}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "monospace",
          }}
        >
          Add
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;
