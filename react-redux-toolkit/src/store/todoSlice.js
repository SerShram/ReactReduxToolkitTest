import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: []
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
  }
})

export const {
  addTodo,
  toggleTodo,
  removeTodo
} = todoSlice.actions;

export default todoSlice.reducer;