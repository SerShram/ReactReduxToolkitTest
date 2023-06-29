import React from 'react';
import Todos from "../components/todos/Todos";
import CreatorTodos from "../components/todos/CreatorTodos";

function Main({title}) {

  return (
    <>
      <div className="wrapper">
        <h1 className="title">{title}</h1>
        <CreatorTodos/>
        <Todos/>
      </div>
    </>
  );
}

export default Main;