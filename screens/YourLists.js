import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AddButton from "../components/buttons/AddButton";
import ListItem from "../components/ListItem";
import CreateListModal from "./modals/CreateListModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import ActionButton from "../components/buttons/ActionButton";

const LISTS_STORE_KEY = "@lists";

export default function YourLists({ navigation }) {
  // list object: { key: number, title: string, colour: string, todos:[] }
  const [lists, setLists] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const isFocused = useIsFocused();

  const getStarredTodos = (listsRes) => {
    if (!listsRes) return [];
    const starred = [];
    for (const aList of listsRes) {
      if (aList.title === "Important") continue;
      for (const todo of aList.todos) {
        if (todo.starred) starred.push(todo);
      }
    }
    return starred;
  };

  useEffect(() => {
    const getLists = async () => {
      const res = await AsyncStorage.getItem(LISTS_STORE_KEY);

      if (res) {
        const listsRes = await JSON.parse(res);
        const starredTodos = getStarredTodos(listsRes);
        if (listsRes.length === 0) {
          setLists([
            {
              key: 0,
              title: "Important",
              colour: "Important",
              todos: starredTodos,
            },
            ...listsRes,
          ]);
        } else {
          listsRes[0].todos = starredTodos;
          setLists(listsRes);
        }
      } else {
        setLists([
          { key: 0, title: "Important", colour: "Important", todos: [] },
        ]);
      }
    };
    if (isFocused) getLists();
  }, [isFocused]);

  useEffect(() => {
    const saveLists = async () => {
      await AsyncStorage.setItem(LISTS_STORE_KEY, JSON.stringify(lists));
    };
    saveLists();
  }, [lists]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Your Lists</Text>
        <CreateListModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          lists={lists}
          setLists={setLists}
        />
        <View style={styles.listItemContainer}>
          {lists.map((list, i) => {
            return <ListItem key={i} listObj={list} navigation={navigation} />;
          })}
        </View>
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
  title: {
    fontSize: 35,
    padding: 40,
    alignSelf: "center",
    fontFamily: "HelveticaNeue-Thin",
  },
  listItemContainer: { alignItems: "center" },
});
