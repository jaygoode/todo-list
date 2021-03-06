import React from "react";
import {MdAdd, MdCancel} from 'react-icons/md';

const Form = ({ setInputText, todos, setTodos, inputText, inputDate, closeModal, setEditFormData }) => {
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


const cancelHandler = (event) => {
  event.preventDefault();
  closeModal(false)
}


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
          autoFocus
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
          <option value="Not started">Not started</option>
          <option value="In progress">In progress</option>
          <option value="Done">Done</option>
        </select>
        <div className="modal-btns">
          <button
            onClick={submitTodoHandler}
            type="submit"
            className="button add-btn center">
            <MdAdd/>
          </button>
          <button onClick={cancelHandler} type="submit" className="button cancel-btn center">
            <MdCancel/>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
