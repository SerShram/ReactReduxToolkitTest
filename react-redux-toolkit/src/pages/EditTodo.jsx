import React, {useState} from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import {getTime} from "../helpers";

const EditTodo = ({title}) => {
  const navigate = useNavigate();
  const {state} = useLocation();
  const [text, setText] = useState(state.todo.textInput || '');

  const goBack = () => navigate(-1);

  const onInput = (e) => {
    setText(e.target.value)
  }

  return (
    <div className="edit-todo">
      <button className="btn" onClick={goBack}>Back</button>
      <h1 className="title">{title}</h1>
      <div className="edit-todo__row">
        <div className="edit-todo__item">
          <div>Time of creation:</div>
          <span>{getTime(state.todo.id)}</span>
        </div>
        <div className="edit-todo__item">
          <div>Todo:</div>
          <input
            className="app-input"
            value={text}
            onChange={event => onInput(event)}
          />
          <button className="btn">Save</button>
        </div>
        <div className="edit-todo__item">
          <div>Status:</div>
          <span className={`status-${state.todo.completed ? 'closed' : 'opened'}`}>
            {state.todo.completed ? 'Closed' : 'Opened'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;