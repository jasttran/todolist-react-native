import React from "react";
import { StyleSheet, View } from "react-native";
import ColourCircle from "./ColourCircle";

export default function ColourRow({
  colours,
  colourSelected,
  setColourSelected,
}) {
  return (
    <View style={styles.container}>
      {colours.map((colour, i) => {
        return (
          <ColourCircle
            key={i}
            colour={colour}
            ticked={colourSelected === colour}
            setColourSelected={setColourSelected}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", gap: 10, marginVertical: 5 },
});
