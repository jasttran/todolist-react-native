import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackIcon from "../assets/back.png";

export default function Header({ title, backScreen, navigation }) {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.navigate(backScreen)}>
        <Image source={BackIcon} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  icon: {
    width: 15,
    height: 15,
  },
  title: {
    fontSize: 35,
    alignSelf: "center",
    fontFamily: "HelveticaNeue-Thin",
  },
});
