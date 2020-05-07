import React from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  return (
    <Modal animationType="slide" visible={props.visible}>
      <View style={styles.inputContainer}>
        <TextInput
          value={props.goal}
          onChangeText={props.onTextChange}
          placeholder="Course Goals..."
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}><Button onPress={props.onAdd} title="ADD" /></View>
          <View style={styles.button}><Button color="red" title="CANCEL" onPress={props.closeModal} /></View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 10,
    width: "50%",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '40%'
  },
  button: {
    width: '60%'
  }
});

export default GoalInput;
