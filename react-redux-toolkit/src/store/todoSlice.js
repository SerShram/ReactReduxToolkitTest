import {createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [
      {
        id: 1,
        textInput: 'Example 1',
        completed: false,
      },
      {
        id: 2,
        textInput: 'Example 2',
        completed: true,
      },
      {
        id: 3,
        textInput: 'Example 3',
        completed: false,
      }
    ],
    currentPage: 1,
    todosPerPage: 5
  },
  reducers: {
    addTodo(state, action) {
      state.todos.unshift(
        {
          id: Date.now(),
          textInput: action.payload,
          completed: false,
        }
      )
    },
    toggleTodo(state, action) {
      const toggledTodo = state.todos.find(todo => todo.id === action.payload);
      toggledTodo.completed = !toggledTodo.completed;
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    },
    editTodo(state, action) {
      const editedTodo = state.todos.find(todo => todo.id === action.payload.id)
      editedTodo.textInput = action.payload.text;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setTodosPerPage(state, action) {
      state.todosPerPage = action.payload;
    }
  }
})

export const {
  addTodo,
  toggleTodo,
  removeTodo,
  editTodo,
  setCurrentPage,
  setTodosPerPage,
} = todoSlice.actions;

export default todoSlice.reducer;