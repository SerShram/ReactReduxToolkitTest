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
          id: Date.now(),
          textInput,
          completed: false,
        }
      ])
      setTextInput('');
    }
  }

  const toggleTodo = (todoId) => {
    setTodoList(
      todoList.map(todo => {
        if(todo.id !== todoId) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        }
      }
    ))
  }

  const removeTodo = (todoId) => {
    setTodoList(
      todoList.filter(todo => todo.id !== todoId)
    )
  }

  const getTime = (timeStamp) => {
    const date= new Date(timeStamp);
    return date.toDateString() + ', ' + date.getHours() + ":" + date.getMinutes() + ':' + date.getSeconds();
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
                <input
                  type="checkbox"
                  className="todo-item__checkbox"
                  checked={todoItem.completed}
                  onChange={() => toggleTodo(todoItem.id)}
                />
                <div className="todo-item__text" title={todoItem.textInput}>{todoItem.textInput}</div>
                <div className="todo-item__date">{getTime(todoItem.id)}</div>
                <div
                  className="todo-item__delete"
                  onClick={() => removeTodo(todoItem.id)}
                >
                  &times;
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </main>
  );
}

export default Main;