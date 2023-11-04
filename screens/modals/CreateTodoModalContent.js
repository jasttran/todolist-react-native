import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ActionButton from "../../components/buttons/ActionButton";
import OutlineButton from "../../components/buttons/ChangePhotoButton";
const DefaultImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAACVBMVEW20dS10tO30NUXZbJaAAAA8UlEQVR4nO3UwQkDQAwDwUv6LzotZF9GMFOBWbDe5733fcChz/UBS8QCltisQCxgic0KxAKW2KxALGCJzQrEApbYrECsQCw45w0DsQKx4Jw3DMQKxIJz3jAQKxALWGKzArGAJTYrEAtYYrMCsYAlNisQC1hiswKxgCU2KxALWGKzArGAJTYrECsQC855w0CsQCw45w0DsQKx4Jw3DMQKxAKW2KxALGCJzQrEApbYrEAsYInNCsQCltisQCxgic0KxAKW2KxALGCJzQrECsSCc94wECsQC855w0CsQCw45w0DsQKxgCU2KxALWGKzArH+9wN0bABSvHbNzwAAAABJRU5ErkJggg==";

export default function CreateTodoModalContent({
  createTodo,
  todoObj,
  updateTodo,
}) {
  const [title, onChangeTitle] = useState(todoObj?.title ?? "");
  const [description, onChangeDescription] = useState(
    todoObj?.description ?? ""
  );
  const [image, setImage] = useState(todoObj?.image ?? DefaultImage);

  const [imageInput, setImageInput] = useState("");
  const [isChangePhoto, setIsChangePhoto] = useState(false);

  const changeImage = () => {
    setIsChangePhoto(false);
    setImage(imageInput);
    setImageInput("");
  };

  return (
    <>
      <ImageBackground
        onError={() => {
          setImage(
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAACVBMVEW20dS10tO30NUXZbJaAAAA8UlEQVR4nO3UwQkDQAwDwUv6LzotZF9GMFOBWbDe5733fcChz/UBS8QCltisQCxgic0KxAKW2KxALGCJzQrEApbYrECsQCw45w0DsQKx4Jw3DMQKxIJz3jAQKxALWGKzArGAJTYrEAtYYrMCsYAlNisQC1hiswKxgCU2KxALWGKzArGAJTYrECsQC855w0CsQCw45w0DsQKx4Jw3DMQKxAKW2KxALGCJzQrEApbYrEAsYInNCsQCltisQCxgic0KxAKW2KxALGCJzQrECsSCc94wECsQC855w0CsQCw45w0DsQKxgCU2KxALWGKzArH+9wN0bABSvHbNzwAAAABJRU5ErkJggg=="
          );
        }}
        style={styles.imageContainer}
        imageStyle={styles.imageStyle}
        source={{
          uri: image,
        }}
      >
        {isChangePhoto ? (
          <View style={styles.containerEdit}>
            <TextInput
              clearButtonMode="always"
              style={styles.inputImage}
              onChangeText={setImageInput}
              value={imageInput}
              placeholder="Input Image URL"
            />
            <TouchableOpacity style={styles.saveButton} onPress={changeImage}>
              <Text style={styles.saveText}>Save</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <OutlineButton
            title="Change Photo"
            action={() => setIsChangePhoto(true)}
          />
        )}
      </ImageBackground>
      <TextInput
        style={styles.title}
        onChangeText={onChangeTitle}
        value={title ? title : ""}
        placeholder="Name of your task"
        clearButtonMode="always"
      />
      <TextInput
        style={styles.description}
        onChangeText={onChangeDescription}
        value={description ? description : ""}
        placeholder="Description"
        clearButtonMode="always"
      />
      <View style={styles.createButton}>
        {todoObj ? (
          <ActionButton
            title="Save"
            action={() => updateTodo(title, description, image)}
          />
        ) : (
          <ActionButton
            title="Add"
            action={() => createTodo(title, description, image)}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    marginVertical: 10,
    fontFamily: "HelveticaNeue-Thin",
  },
  createButton: { marginVertical: 30, alignItems: "center" },
  title: {
    fontSize: 25,
    marginVertical: 10,
    fontFamily: "HelveticaNeue-Thin",
  },
  imageContainer: {
    height: 220,
    width: "100%",
    justifyContent: "flex-end",
    marginVertical: 10,
  },
  imageStyle: { borderRadius: 10 },
  containerEdit: {
    margin: 20,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  inputImage: {
    backgroundColor: "white",
    width: "80%",
    borderRadius: 10,
    padding: 10,
    fontFamily: "HelveticaNeue-Thin",
  },
  saveButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 10,
  },
  saveText: { color: "#B7D1D3" },
});
