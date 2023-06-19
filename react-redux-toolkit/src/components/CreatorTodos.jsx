import React, {useState} from 'react';
import { useDispatch } from 'react-redux'
import {addTodo} from "../store/todoSlice";

const CreatorTodos = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const todoInput = (event) => {
    setText(event.target.value)
  }

  const createTodo = () => {
    if(text.trim().length) {
      dispatch(addTodo(text));
      setText('');
    }
  }

  return (
    <div className="create-todos">
      <input
        placeholder="What should be done?"
        onChange={event => todoInput(event)}
        value={text}
      />
      <button
        className="btn"
        onClick={createTodo}
      >
        Save
      </button>
    </div>
  );
};

export default CreatorTodos;