import React, { useState } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import UpModal from "./UpModal";
import ActionButton from "../../components/buttons/ActionButton";
import EditButton from "../../components/buttons/EditButton";
import CreateTodoModal from "./CreateTodoModal";

export default function TodoDetailModal({
  todoObj,
  modalVisible,
  setModalVisible,
  todoList,
  setTodoList,
  deleteItem,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const ModalContent = (
    <View style={styles.modalContainer}>
      <View>
        <ImageBackground
          onError={() => {
            setImage(
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAACVBMVEW20dS10tO30NUXZbJaAAAA8UlEQVR4nO3UwQkDQAwDwUv6LzotZF9GMFOBWbDe5733fcChz/UBS8QCltisQCxgic0KxAKW2KxALGCJzQrEApbYrECsQCw45w0DsQKx4Jw3DMQKxIJz3jAQKxALWGKzArGAJTYrEAtYYrMCsYAlNisQC1hiswKxgCU2KxALWGKzArGAJTYrECsQC855w0CsQCw45w0DsQKx4Jw3DMQKxAKW2KxALGCJzQrEApbYrEAsYInNCsQCltisQCxgic0KxAKW2KxALGCJzQrECsSCc94wECsQC855w0CsQCw45w0DsQKxgCU2KxALWGKzArH+9wN0bABSvHbNzwAAAABJRU5ErkJggg=="
            );
          }}
          style={styles.imageBackground}
          imageStyle={styles.imageStyle}
          source={{
            uri: todoObj.image,
          }}
        />
        <Text style={styles.title}>{todoObj.title}</Text>
        <Text style={styles.description}>{todoObj.description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <EditButton
          title="Edit"
          action={() => {
            setIsEditing(true);
            setModalVisible(false);
          }}
        />
        <ActionButton title="Delete" action={deleteItem} />
      </View>
    </View>
  );
  return (
    <>
      <CreateTodoModal
        modalVisible={isEditing}
        setModalVisible={setIsEditing}
        todoList={todoList}
        setTodoList={setTodoList}
        listKey={todoObj.key}
        todoObj={todoObj}
      />
      <UpModal
        modalVisible={modalVisible}
        closeModal={() => setModalVisible(false)}
        modalContent={ModalContent}
      />
    </>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: "space-between",
    height: "90%",
  },
  title: {
    fontSize: 25,
    marginVertical: 10,
    fontFamily: "HelveticaNeue-Thin",
  },
  description: {
    fontSize: 18,
    marginVertical: 10,
    fontFamily: "HelveticaNeue-Thin",
  },
  createButton: {
    marginVertical: 30,
    alignItems: "center",
    fontFamily: "HelveticaNeue-Thin",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 50,
    justifyContent: "center",
    marginVertical: 20,
  },
  imageBackground: {
    height: 220,
    width: "100%",
    justifyContent: "flex-end",
    marginVertical: 10,
  },
  imageStyle: { borderRadius: 10 },
});
