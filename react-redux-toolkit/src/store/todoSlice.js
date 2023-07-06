import {createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [
      {
        id: 1,
        text: 'Example 1',
        completed: false,
      },
      {
        id: 2,
        text: 'Example 2',
        completed: true,
      },
      {
        id: 3,
        text: 'Example 3',
        completed: false,
      }
    ],
    archiveTodos: [],
    currentPage: 1,
    todosPerPage: 5
  },
  reducers: {
    addTodo(state, action) {
      state.todos.unshift(
        {
          id: Date.now(),
          text: action.payload,
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
      editedTodo.text = action.payload.text;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setTodosPerPage(state, action) {
      state.todosPerPage = action.payload;
    },
    relocateToArchive(state, action) {
      state.todos = state.todos.filter(todo => {
        if(todo.id !== action.payload) {
          return true
        } else {
          state.archiveTodos.push(todo);
          return false
        }
      })
    },
    relocateToList(state, action) {
      state.archiveTodos = state.archiveTodos.filter(todo => {
        if(todo.id !== action.payload) {
          return true
        } else {
          state.todos.unshift(todo);
          return false
        }
      })
    },
    removeArchiveTodo(state, action) {
      state.archiveTodos = state.archiveTodos.filter(todo => todo.id !== action.payload)
    },
  }
})

export const {
  addTodo,
  toggleTodo,
  removeTodo,
  editTodo,
  setCurrentPage,
  setTodosPerPage,
  relocateToArchive,
  relocateToList,
  removeArchiveTodo
} = todoSlice.actions;

export default todoSlice.reducer;