import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function UpModal({ modalVisible, closeModal, modalContent }) {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.closeButton}>
              <Ionicons name="close-outline" size={30} onPress={closeModal} />
            </View>
            <View>{modalContent}</View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#B7D1D3",
    padding: 35,
    width: "100%",
    height: "80%",
  },
  closeButton: { width: "100%", alignItems: "flex-end" },
});
