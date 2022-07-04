// import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableWithoutFeedback, Text, View, Image, Button, Alert, SafeAreaView, Platform, StatusBar } from "react-native";
import { useState } from "react";
import Home from "./app/screens/Home";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Home />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#00244d",
    fontFamily: "sans",
    flex: 1,
  },
});
