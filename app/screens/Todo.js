import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

// import { TouchableOpacity } from "react-native-web";

const Todo = (props) => {
  const { todo, deleteTodo } = props;

  const [todoChecked, setTodoChecked] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: todoChecked ? "#ababab" : "white",
        width: "100%",
        marginVertical: 8,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        shadowColor: "black",
      }}
    >
      <Text style={{ fontSize: 20, flexShrink: 1, fontFamily: "monospace", fontWeight: "bold", textDecorationLine: todoChecked ? "line-through" : "none", textDecorationStyle: "solid" }}>
        {todo.text}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => setTodoChecked(!todoChecked)}>
          <Image style={{ height: 27, marginHorizontal: 3 }} resizeMode="contain" source={require("../../assets/done.png")} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} underlayColor="#DDDDDD" onPress={() => deleteTodo(todo.id)}>
          <Image style={{ height: 27, marginHorizontal: 3 }} resizeMode="contain" source={require("../../assets/delete.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Todo;
