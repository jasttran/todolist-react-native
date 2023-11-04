import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ChangePhotoButton({ title, action }) {
  return (
    <TouchableOpacity
      onPress={action}
      style={styles.button}
      activeOpacity={0.9}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: "auto",
    width: "40%",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#B7D1D3",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    alignSelf: "flex-end",
    margin: 10,
  },
  text: { color: "#B7D1D3", fontSize: 18 },
});
