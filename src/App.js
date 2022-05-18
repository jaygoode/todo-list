import React, { useState } from "react";

import Form from "./components/Form";
import TodoList from "./components/todoList";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState({
    title: "",
    date: "",
    status: "Not started",
  });
  const [todos, setTodos] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editFormData, setEditFormData] = useState({
    title: "",
    date: "",
    status: "Not started",
  });

  const openModalHandler = () => {
    setOpenModal(true);
  };

  return (
    <div className="App">
      <header>
        <h1 className="header">To-do List</h1>
      </header>
      {!openModal && (
        <button className="modal-btn" onClick={openModalHandler}>
          Create item
        </button>
      )}
      {openModal && (
        <Form
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
          setInputText={setInputText}
          closeModal={setOpenModal}
          setOpenModal={setOpenModal}
          setEditFormData={setEditFormData}
        />
      )}
      <TodoList
        setTodos={setTodos}
        todos={todos}
        setOpenModal={setOpenModal}
        inputText={inputText}
        setInputText={setInputText}
      />
    </div>
  );
}

export default App;
