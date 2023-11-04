import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function EditButton({ title, action }) {
  return (
    <TouchableOpacity onPress={action} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 40,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#B7D1D3",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { color: "#B7D1D3", fontSize: 18 },
});
