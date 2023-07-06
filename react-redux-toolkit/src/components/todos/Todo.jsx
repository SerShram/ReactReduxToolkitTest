import React from 'react';
import {getTime} from "../../helpers";
import {removeTodo, toggleTodo, relocateToArchive} from "../../store/todoSlice";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import settings from '../../assets/images/setting.png'
import cross from '../../assets/images/cross.png'
import arrow from '../../assets/images/arrow_red.png'

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
        <span className={`todo-item__text ${todo.completed && 'completed'}`} title={todo.text}>
          {todo.text}
        </span>
        <Link
          className="todo-item__edit"
          to={`/${todo.id}`}
          state={{todo}}
          title="Edit"
        >
          <img src={settings} alt=""/>
        </Link>
        <span
          className="todo-item__archive"
          onClick={() => dispatch(relocateToArchive(todo.id))}
          title="Move to archive"
        >
          <img src={arrow} alt=""/>
        </span>
        <span
          className="todo-item__delete"
          onClick={() => dispatch(removeTodo(todo.id))}
          title="Remove"
        >
          <img src={cross} alt=""/>
        </span>
      </div>
    </li>
  );
};

export default Todo;