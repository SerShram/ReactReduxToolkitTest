import React, {useState} from 'react';

function Main() {
  const [textInput, setTextInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  const todoInput = (event) => {
    setTextInput(event.target.value)
  }

  const addTodo = () => {
    if(textInput.trim().length) {
      setTodoList([
        ...todoList,
        {
          id: new Date().toISOString(),
          textInput,
          completed: false,
        }
      ])
      setTextInput('');
    }
  }


  return (
    <main>
      <div className="wrapper">
        <h1 className="title">Todo list</h1>
        <div className="input-field">
          <input
            placeholder="What should be done?"
            onChange={event => todoInput(event)}
            value={textInput}
          />
          <button
            className="btn"
            onClick={addTodo}
          >
            Save
          </button>
        </div>
        <ul className="todos">
          {
            todoList.map(todoItem => (
              <li key={todoItem.id} className="todo-item">
                <input type="checkbox"/>
                <div className="todo-item__text">{todoItem.textInput}</div>
                <div className="todo-item__delete">&times;</div>
              </li>
            ))
          }
        </ul>
      </div>
    </main>
  );
}

export default Main;