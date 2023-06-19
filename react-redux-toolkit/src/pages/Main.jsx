import React from 'react';
import Todos from "../components/Todos";
import CreatorTodos from "../components/CreatorTodos";

function Main({title}) {

  return (
    <>
      <h1 className="title">{title}</h1>
      <CreatorTodos/>
      <Todos/>
    </>
  );
}

export default Main;