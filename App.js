import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";

export default function App() {
  const [textInput, changeTextInput] = useState("");
  const [setedTextInput, changeSetedTextInput] = useState([]);
  function catchText(texto) {
    return changeTextInput(texto);
  }
  function addGolHanddler() {
    changeSetedTextInput((currentGols) => [...currentGols, textInput]);
    clean();
  }
  function clean() {
    return changeTextInput("");
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.imputContainer}>
        <TextInput
          placeholder="digite sua tarefa aqui"
          style={styles.inputStyle}
          onChangeText={catchText}
          value={textInput}
        />
        <Button title="Adicione" onPress={addGolHanddler}></Button>
      </View>
      <View style={styles.golsContainer}>
        <ScrollView>
          <View style={styles.golItem}>
            {setedTextInput.map((goal, index) => (
              <Text style={[styles.golItem, styles.textGol]} key={index}>{`${
                index + 1
              }- ${goal}`}</Text>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 20,
    flex: 1,
  },
  imputContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 90,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.2)",

    paddingBottom: 80,
  },
  text: {
    opacity: 0.5,
    marginTop: 8,
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  inputStyle: {
    borderWidth: 2,
    borderColor: "gray",
    opacity: 0.5,
    width: 220,
    marginRight: 15,
  },
  golsContainer: {
    flex: 5,
  },
  golItem: {
    padding: 8,
    borderRadius: 6,
    color: "#fff",
  },
  textGol: {
    margin: 9,
    color: "#fff",
    backgroundColor: "#5e0acc",
    fontSize: 19,
  },
});
