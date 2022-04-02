import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  Alert,
} from "react-native";

const TwoTextInput = () => {
  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState("");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Najmul Hossain"
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="CSE1802014027"
      />
      <Button
        title="Press me"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TwoTextInput;
