import React from "react";
import CreateTodoModalContent from "./CreateTodoModalContent";
import UpModal from "./UpModal";

export default function CreateTodoModal({
  modalVisible,
  setModalVisible,
  todoList,
  setTodoList,
  listKey,
  todoObj,
}) {
  const sortList = () => {
    const starred = [
      ...todoList.filter((item) => item.starred && !item.checked),
    ];
    const none = [...todoList.filter((item) => !item.starred && !item.checked)];
    const checked = [...todoList.filter((item) => item.checked)];
    setTodoList(starred.concat(none).concat(checked));
  };

  const getKey = () => {
    let highestNum = 0;
    for (const todo of todoList) {
      if (todo.key >= highestNum) highestNum = todo.key + 1;
    }
    return highestNum;
  };

  const createTodo = (title, description, image) => {
    todoList.push({
      key: getKey(),
      title: title ? title : "Todo",
      description: description,
      image: image,
      starred: false,
      listKey,
    });
    sortList();
    closeModal();
  };

  const findIndex = () => {
    const i = todoList.findIndex((todo) => {
      return todo.key === todoObj.key;
    });
    return i;
  };

  const updateTodo = (title, description, image) => {
    const i = findIndex();
    const copy = [...todoList];
    copy[i].title = title;
    copy[i].description = description;
    copy[i].image = image;
    setTodoList(copy);
    setModalVisible(false);
  };

  const closeModal = () => setModalVisible(false);

  return (
    <UpModal
      modalVisible={modalVisible}
      closeModal={closeModal}
      modalContent={
        <CreateTodoModalContent
          createTodo={createTodo}
          todoObj={todoObj}
          updateTodo={updateTodo}
        />
      }
    />
  );
}
