import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import AddButton from "../components/buttons/AddButton";
import Header from "../components/Header";
import TodoItem from "../components/TodoItem";
import CreateTodoModal from "./modals/CreateTodoModal";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LISTS_STORE_KEY = "@lists";

export default function Todo({ route, navigation }) {
  const { title, listKey, todos } = route.params ?? {};
  const [modalVisible, setModalVisible] = useState(false);

  /* 
  todoListObj: {
    key: number,
    checked: boolean,
    title: string,
    image: string,
    starred: boolean,
    listKey: number}
  */
  const [todoList, setTodoList] = useState([]);

  useEffect(() => setTodoList(todos), []);

  useEffect(() => {
    const updateStorage = async () => {
      const res = await AsyncStorage.getItem(LISTS_STORE_KEY);
      const lists = JSON.parse(res);
      const i = lists.findIndex((list) => Number(list.key) === Number(listKey));
      lists[i].todos = todoList;
      await AsyncStorage.setItem(LISTS_STORE_KEY, JSON.stringify(lists));
    };
    updateStorage();
  }, [todoList]);

  return (
    <View style={styles.container}>
      <View>
        <Header
          title={title}
          backScreen={"Your Lists"}
          navigation={navigation}
        />
        <View style={styles.todoContainer}>
          {todoList.map((todo, i) => {
            return (
              <TodoItem
                key={i}
                todoObj={todo}
                todoList={todoList}
                setTodoList={setTodoList}
              />
            );
          })}
        </View>
        <CreateTodoModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          todoList={todoList}
          setTodoList={setTodoList}
          listKey={listKey}
        />
      </View>
      <AddButton action={() => setModalVisible(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    height: "100%",
    justifyContent: "space-between",
  },
  todoContainer: { gap: 14, marginHorizontal: 10 },
});
