import React from "react";

const Form = ({ setInputText, todos, setTodos, inputText, inputDate }) => {
  const inputTextHandler = (e) => {
    setInputText({ ...inputText, [e.target.name]: e.target.value });
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText.title,
        completed: false,
        id: Math.random() * 1000,
        date: inputText.date,
        status: inputText.status,
      },
    ]);
    setInputText({ title: "", date: inputText.date, status: inputText.status });
  };

  return (
    <div className="form-container">
      <form className="modal">
        <input
          name="title"
          value={inputText.title}
          onChange={inputTextHandler}
          type="text"
          placeholder="title"
          className="text-input"
          autofocus
        />
        <input
          onChange={inputTextHandler}
          type="date"
          name="date"
          className="date-input"
        />
        <select
          name="status"
          onChange={inputTextHandler}
          type="text"
          className="status-input"
        >
          <option value="status">Status</option>
          <option value="Not started">Not started</option>
          <option value="In progress">In progress</option>
          <option value="Done">Done</option>
        </select>
        <button
          onClick={submitTodoHandler}
          type="submit"
          className="button add-btn"
        >
          Add
        </button>
        <button type="submit" className="button cancel-btn">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Form;
