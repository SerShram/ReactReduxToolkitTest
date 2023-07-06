import React from 'react';
import {getTime} from "../helpers";
import {removeArchiveTodo, relocateToList} from "../store/todoSlice";
import arrow from "../assets/images/arrow_green.png";
import cross from "../assets/images/cross.png";
import {useDispatch, useSelector} from "react-redux";

const ArchiveTodos = ({title}) => {
  const dispatch = useDispatch();
  const archiveTodos = useSelector(state => state.todos.archiveTodos);

  return (
    <>
      <div className="wrapper">
        <h1 className='title'>{title}</h1>

        <div className="archive-count">
          Entries per page = <span>{archiveTodos.length || 'Archive is empty'}</span>
        </div>
        <ul className="archive-todos">
          {
            archiveTodos.map(todo => (
              <li className="todo-item" key={todo.id}>
                <div className="todo-item__date">{getTime(todo.id)}</div>
                <div className="todo-item__row">
                  <span className="todo-item__text" title={todo.text}>{todo.text}</span>
                  <span
                    className="todo-item__archive"
                    onClick={() => dispatch(relocateToList(todo.id))}
                    title="Move to list"
                  >
                    <img src={arrow} alt=""/>
                  </span>
                  <span
                    className="todo-item__delete"
                    onClick={() => dispatch(removeArchiveTodo(todo.id))}
                    title="Remove"
                  >
                    <img src={cross} alt=""/>
                  </span>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  );
};

export default ArchiveTodos;