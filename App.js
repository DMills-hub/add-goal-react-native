import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button
} from "react-native";
import GoalItem from "./components/GoalItem/GoalItem";
import GoalInput from "./components/GoalInput/GoalInput";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [listOfGoals, setListOfGoals] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const onTextChangeHandler = (text) => {
    setEnteredGoal(text);
  };

  const addGoalHandler = () => {
    setListOfGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: enteredGoal },
    ]);
    setEnteredGoal("");
    setAddMode(false);
  };

  const onDeleteHandler = (id) => {
    setListOfGoals(currentGoals => currentGoals.filter(item => item.id !== id));
  }

  const openModal = () => {
    setAddMode(true);
  }

  const closeModal = () => {
    setAddMode(false);
    setEnteredGoal("");
  }

  return (
    <View style={styles.screen}>
      <Button onPress={openModal} title="Add New goal" />
      <GoalInput
        onTextChange={onTextChangeHandler}
        goal={enteredGoal}
        onAdd={addGoalHandler}
        visible={addMode}
        closeModal={closeModal}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={listOfGoals}
        renderItem={(itemData) => <GoalItem onDelete={onDeleteHandler} id={itemData.item.id} title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
