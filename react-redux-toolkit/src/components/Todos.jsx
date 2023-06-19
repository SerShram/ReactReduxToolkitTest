import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {removeTodo, toggleTodo} from "../store/todoSlice";

const Todos = () => {
  const todoList = useSelector(state => state.todos.todos)
  const dispatch = useDispatch();

  const getTime = (timeStamp) => {
      const date= new Date(timeStamp);
      return date.toDateString() + ', ' + date.getHours() + ":" + date.getMinutes() + ':' + date.getSeconds();
    }

  return (
    <ul className="todos">
      {
        todoList.map(todo => (
          <li key={todo.id} className="todo-item">
            <input
              type="checkbox"
              className="todo-item__checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <div className="todo-item__text" title={todo.textInput}>{todo.textInput}</div>
            <div className="todo-item__date">{getTime(todo.id)}</div>
            <div
              className="todo-item__delete"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              &times;
            </div>
          </li>
        ))
      }
    </ul>
  );
};

export default Todos;