import React from 'react';
import {useSelector} from 'react-redux';
import Todo from "./Todo";

const Todos = () => {
  const todoList = useSelector(state => state.todos.todos)

  return (
    <ul className="todos">
      {
        todoList.map(todo => (
          <Todo key={todo.id} todo={todo}/>
        ))
      }
    </ul>
  );
};

export default Todos;