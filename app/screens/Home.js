import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import { Button } from "react-native";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

function Home(props) {
  const [todos, setTodos] = useState([]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, width: "100%" }}>
        <Text style={{ fontSize: 35, fontFamily: "serif", fontWeight: "bold", color: "white", marginTop: 15, paddingHorizontal: 15 }}>📝 TODO LIST</Text>
        <AddTodo todos={todos} setTodos={setTodos} />
        <ScrollView style={{ backgroundColor: "#002d61", width: "100%" }}>
          <TouchableWithoutFeedback>
            <View style={{ fontFamily: "monospace", paddingVertical: 10 }}>
              <TodoList todos={todos} setTodos={setTodos} />
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({});

export default Home;
