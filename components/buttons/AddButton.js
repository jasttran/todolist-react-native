import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import PlusIcon from "../../assets/plus.png";

export default function AddButton({ action }) {
  return (
    <TouchableOpacity onPress={action} style={styles.button}>
      <Image source={PlusIcon} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    backgroundColor: "#B7D1D3",
    borderRadius: 9999,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  image: {
    width: 40,
    height: 40,
  },
});
