import React, { useState } from "react";
import { MdOutlineDeleteForever, MdDoneOutline, MdEdit } from 'react-icons/md';

const Todo = ({
  text,
  date,
  status,
  todo,
  todos,
  setTodos,
  setOpenModal,
  inputText,
  inputTextHandler,
  submitTodoHandler,
  setEditFormData,
}) => {
  // const [editContactId, setEditContactId] = useState(null);

  // const editHandler = (setOpenModal) => {
  //   setTodos(
  //     todos.map((item) => {
  //       if (item.id === todo.id) {
  //         return {
  //           ...item,
  //           editing: !item.editing,
  //         };
  //       }
  //       return item;
  //     })
  //     );
  //   };
  //   if(editContactId===todo.id) {
  //     setOpenModal(false)
  // };

  // const handleEditClick = (event, todo) => {
  //   event.preventDefault();
  //   setEditContactId(todo.id);

  //   setEditFormData([
  //     ...todos,
  //     {
  //       text: inputText.title,
  //       completed: false,
  //       id: Math.random() * 1000,
  //       date: inputText.date,
  //       status: inputText.status,
  //     },
  //   ]);
  // }

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <div className="todo">
        <li
          className={`todo-item ${todo.completed ? "completed" : ""} ${
            todo.editing ? "editing-todo" : ""
          }`}
        >
          {todo.text} - {todo.date} - {todo.status}
        </li>
        <div className="item-btns">
          <button className="button done-btn" onClick={completeHandler}>
            <MdDoneOutline/>
          </button>
          <button className="button edit-btn"><MdEdit/></button>
          <button className="button delete-btn" onClick={deleteHandler}>
            <MdOutlineDeleteForever/>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Todo;
