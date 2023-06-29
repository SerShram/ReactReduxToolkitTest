import React from 'react';
// import { useSelector } from "react-redux";

const archiveTodos = ({title}) => {
  // const deletedTodos = useSelector(state => state.todos.deletedTodos);

  return (
    <>
      <div className="wrapper">
        <h1 className='title'>{title}</h1>
        <p style={{textAlign: 'center', fontSize: '20px', color: 'red'}}>Page is being developed</p>
      </div>
    </>
  );
};

export default archiveTodos;