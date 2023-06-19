import React from 'react';
import Todos from "./Todos";
import CreatorTodos from "./CreatorTodos";

function Main() {

  return (
    <main>
      <div className="wrapper">
        <h1 className="title">Todo list</h1>
        <CreatorTodos />
        <Todos />
      </div>
    </main>
  );
}

export default Main;