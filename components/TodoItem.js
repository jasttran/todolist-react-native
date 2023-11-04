import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TodoDetailModal from "../screens/modals/TodoDetailModal";
import ItemIcon from "./ItemIcon";

export default function TodoItem({ todoObj, todoList, setTodoList }) {
  const [modalVisible, setModalVisible] = useState(false);

  const findIndex = () => {
    const i = todoList.findIndex((todo) => {
      return todo.key === todoObj.key;
    });
    return i;
  };

  const deleteItem = () => {
    setTodoList(todoList.filter((todo) => todo.key != todoObj.key));
    setModalVisible(false);
  };

  const sortList = () => {
    const starred = [
      ...todoList.filter((item) => item.starred && !item.checked),
    ];
    const none = [...todoList.filter((item) => !item.starred && !item.checked)];
    const checked = [...todoList.filter((item) => item.checked)];
    setTodoList(starred.concat(none).concat(checked));
  };

  const checkItem = () => {
    const i = findIndex();
    setTodoList((todoList[i].checked = !todoObj.checked));
    sortList();
  };

  const starItem = () => {
    const i = findIndex();
    setTodoList((todoList[i].starred = !todoObj.starred));
    sortList();
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setModalVisible(true)}
      >
        <View style={styles.subContainer}>
          {todoObj.checked ? (
            <ItemIcon name="checkmark-circle" onPress={checkItem} />
          ) : (
            <ItemIcon name="radio-button-off" onPress={checkItem} />
          )}
          <Text style={styles.title}>{todoObj.title}</Text>
        </View>

        {todoObj.starred ? (
          <ItemIcon name="star" onPress={starItem} />
        ) : (
          <ItemIcon name="star-outline" onPress={starItem} />
        )}
      </TouchableOpacity>
      <TodoDetailModal
        todoObj={todoObj}
        todoList={todoList}
        setTodoList={setTodoList}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        deleteItem={deleteItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  notChecked: {
    height: 25,
    width: 25,
    borderRadius: 999,
    borderColor: "grey",
    borderWidth: 1,
  },
  checked: {
    height: 25,
    width: 25,
    borderRadius: 999,
    backgroundColor: "grey",
  },
  title: {
    fontSize: 20,
    fontFamily: "HelveticaNeue-Thin",
  },

  container: {
    borderWidth: 0.5,
    borderColor: "#B7D1D3",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subContainer: {
    flexDirection: "row",
    gap: 15,
  },
  star: {
    height: 20,
    width: 20,
  },
});
