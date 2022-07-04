import React from "react";
import { View, Text, ScrollView, FlatList, TouchableWithoutFeedback } from "react-native";
import Todo from "./Todo";

const TodoList = (props) => {
  const { todos, setTodos } = props;

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(filteredTodos);
  };

  return (
    <>
      <TouchableWithoutFeedback>
        <ScrollView>
          <View style={{ flex: 1, paddingHorizontal: 15, width: "100%" }}>
            {todos.length === 0 ? <Text style={{ fontFamily: "monospace", fontSize: 18, color: "white", opacity: 0.6 }}> List is empty!</Text> : <Text></Text>}
            {todos.map((todo) => {
              return <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />;
            })}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>

      {/* <FlatList data={todos} renderItem={Todo} keyExtractor={(item) => item.id} /> */}
    </>
  );
};

export default TodoList;
