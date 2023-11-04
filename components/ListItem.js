import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function ListItem({ listObj, navigation }) {
  const { title, key, colour, todos } = listObj;

  const numUncheckedItems = () => {
    return todos ? todos.filter((todo) => !todo.checked).length : 0;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("Todo", { title, listKey: key, todos })
      }
    >
      <View style={styles.leftItem}>
        {colour === "Important" ? (
          <Ionicons style={styles.star} name="star" />
        ) : (
          <View style={circleStyle(colour).circle}></View>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.rightItem}>{numUncheckedItems()}</Text>
    </TouchableOpacity>
  );
}

const circleStyle = (colour) =>
  StyleSheet.create({
    circle: {
      width: 15,
      height: 15,
      borderRadius: 9999,
      backgroundColor: colour,
      alignItems: "center",
      justifyContent: "center",
    },
  });

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: "#B7D1D3",
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 12,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontFamily: "HelveticaNeue-Thin",
  },
  leftItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },
  rightItem: {
    fontFamily: "HelveticaNeue-Thin",
  },
  star: {
    color: "#B7D1D3",
  },
});
