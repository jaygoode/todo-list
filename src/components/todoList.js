import React, {Fragment} from "react";
import Todo from "./Todo";
import EditableTodo from "./EditableTodo";

const TodoList = ({ todos, setTodos, setOpenModal}) => {
if (todos.length !== 0)
 { return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Fragment>
             <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
            date={todo.date}
            status={todo.status}
            setOpenModal={setOpenModal}
          />
          </Fragment>
         
        ))}
      </ul>
    </div>
  );}
};

export default TodoList;
