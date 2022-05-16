import React from "react";

const Todo = ({ text, date, status, todo, todos, setTodos }) => {
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
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {todo.text} {todo.date} {todo.status}
      </li>
      <button className="button done-btn" onClick={completeHandler}>Done</button>
      <button className="button edit-btn">Edit</button>
      <button className="button delete-btn" onClick={deleteHandler}>Delete</button>
    </div>
  );
};
export default Todo;
