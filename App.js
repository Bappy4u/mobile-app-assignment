import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TwoTextInput from "./input";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Assignment 3</Text>
      <StatusBar style="auto" />
      <TwoTextInput />
    </View>
  );
}
console.log(TwoTextInput);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
