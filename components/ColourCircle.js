import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import TickIcon from "../assets/tick.png";

export default function ColourCircle({ colour, ticked, setColourSelected }) {
  return (
    <TouchableOpacity
      key={colour}
      style={circleStyle(colour).circle}
      onPress={() => setColourSelected(colour)}
    >
      {ticked && <Image style={styles.tick} source={TickIcon} />}
    </TouchableOpacity>
  );
}

const circleStyle = (colour) =>
  StyleSheet.create({
    circle: {
      width: 50,
      height: 50,
      borderRadius: 9999,
      backgroundColor: colour,
      alignItems: "center",
      justifyContent: "center",
    },
  });

const styles = StyleSheet.create({
  tick: { width: 35, height: 35 },
});
