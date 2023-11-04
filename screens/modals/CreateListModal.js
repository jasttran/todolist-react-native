import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import ActionButton from "../../components/buttons/ActionButton";
import UpModal from "./UpModal";
import ColourRow from "../../components/ColourRow";

export default function CreateListModal({
  modalVisible,
  setModalVisible,
  lists,
  setLists,
}) {
  const coloursRowOne = ["#FFA9A9", "#FFD2A9", "#FFF1A9", "#C9F1C6"];
  const coloursRowTwo = ["#A6CFFF", "#E5D2FD", "#FFD8F4", "#D9D9D9"];

  const [title, onChangeTitle] = useState("");
  const [colourSelected, setColourSelected] = useState("#D9D9D9");

  const closeModal = () => {
    onChangeTitle("");
    setColourSelected("#D9D9D9");
    setModalVisible(false);
  };

  const createList = () => {
    setLists([
      ...lists,
      {
        key: lists.length,
        title: title ? title : "List",
        colour: colourSelected,
        todos: [],
      },
    ]);
    onChangeTitle("");
    setModalVisible(false);
    setColourSelected("#D9D9D9");
  };

  const ModalContent = (
    <>
      <TextInput
        style={styles.listNameInput}
        onChangeText={onChangeTitle}
        value={title ? title : ""}
        placeholder="Name of Your List"
      />
      <Text style={styles.chooseColourTitle}>Choose a Colour</Text>
      <View style={styles.coloursContainer}>
        <ColourRow
          colours={coloursRowOne}
          colourSelected={colourSelected}
          setColourSelected={setColourSelected}
        />
        <ColourRow
          colours={coloursRowTwo}
          colourSelected={colourSelected}
          setColourSelected={setColourSelected}
        />
      </View>
      <View style={styles.createButton}>
        <ActionButton title="Create" action={createList} />
      </View>
    </>
  );

  return (
    <UpModal
      modalVisible={modalVisible}
      closeModal={closeModal}
      modalContent={ModalContent}
    />
  );
}

const styles = StyleSheet.create({
  listNameInput: {
    fontSize: 20,
    marginBottom: 50,
    fontFamily: "HelveticaNeue-Thin",
  },
  chooseColourTitle: {
    fontSize: 20,
    marginBottom: 15,
    fontFamily: "HelveticaNeue-Thin",
  },
  coloursContainer: { alignItems: "center" },
  createButton: { marginVertical: 30, alignItems: "center" },
});
