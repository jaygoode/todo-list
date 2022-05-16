import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Form from "./components/Form";
import TodoList from "./components/todoList";
import "./App.css"

function App() {
  const [inputText, setInputText] = useState({title:"", date:"", status:""});
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1 className="header">To-do List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
