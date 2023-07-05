import React, {useEffect, useState} from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import {getTime} from "../helpers";
import {useDispatch} from "react-redux";
import {editTodo} from "../store/todoSlice";
import Popup from "../components/popup/Popup";

const EditTodo = ({title}) => {
  const navigate = useNavigate();
  const {state} = useLocation();
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [popupOpened, setPopupOpened] = useState(false);

  useEffect(() => {
    setText(state.todo.textInput);
  }, [state]);

  const goBack = () => navigate(-1);

  const onInput = (e) => {
    setText(e.target.value)
  }

  const saveChanges = (todoId, todoText) => {
    const text = todoText.trim();
    const id = parseInt(todoId);
    if (text.length) {
      setText(text);
      dispatch(editTodo({id, text}))
      setPopupOpened(true);
    }
  }

  return (
    <>
      <div className="wrapper">
        <div className="edit-todo">
          <button className="btn" onClick={goBack}>Back</button>
          <h1 className="title">{title}</h1>
          <div className="edit-todo__row">
            <div className="edit-todo__item">
              <div>Time of creation:</div>
              <span>{getTime(state.todo.id)}</span>
            </div>
            <div className="edit-todo__item">
              <div>Task:</div>
              <textarea
                className="edit-todo__textarea"
                value={text}
                onChange={event => onInput(event)}
              />
              <button
                className="btn"
                onClick={() => saveChanges(state.todo.id, text)}
              >
                Save
              </button>
            </div>
            <div className="edit-todo__item">
              <div>Status:</div>
              <span className={`status-${state.todo.completed ? 'closed' : 'opened'}`}>
            {state.todo.completed ? 'Closed' : 'Opened'}
          </span>
            </div>
          </div>
        </div>
        <Popup
          title="Data saved!"
          text="Do you want to go to the list or stay on the current page?"
          popupOpened={popupOpened}
          setPopupOpened={setPopupOpened}
        />
      </div>
    </>
  );
};

export default EditTodo;