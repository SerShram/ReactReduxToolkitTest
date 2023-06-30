import React from 'react';
import {getTime} from "../../helpers";
import {removeTodo, toggleTodo} from "../../store/todoSlice";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

const Todo = ({todo}) => {
  const dispatch = useDispatch();

  return (
    <li className="todo-item">
      <div className="todo-item__date">{getTime(todo.id)}</div>
      <div className="todo-item__row">
        <input
          type="checkbox"
          className="todo-item__checkbox"
          checked={todo.completed}
          onChange={() => dispatch(toggleTodo(todo.id))}
        />
        <span className="todo-item__text" title={todo.textInput}>{todo.textInput}</span>
        <Link
          className="todo-item__edit"
          to={`/${todo.id}`}
          state={{todo}}
        >
          <img src="/setting.png" alt=""/>
        </Link>
        <span
          className="todo-item__delete"
          onClick={() => dispatch(removeTodo(todo.id))}
          title="Remove"
        >
          <img src="/cross.png" alt=""/>
        </span>
      </div>
    </li>
  );
};

export default Todo;