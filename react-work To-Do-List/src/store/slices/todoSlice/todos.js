import { types } from "./types";

export const initialTodos = {
  todos: [],
  text: "",
  isEditing: null,
  search: "",
};

export const todoReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case types.toggleText:
      return {
        ...state,
        text: action.payload,
      };
    case types.add:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Math.random(), tdText: state.text, isCompleted: false },
        ],
        text: "",
      };
    case types.delete:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case types.checkid:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.newTodo.id ? action.payload.newTodo : todo
        ),
      };
    case types.onClear:
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.isCompleted),
      };
    case types.editItem:
      return {
        ...state,
        isEditing: action.payload,
        text: action.payload.tdText,
      };
    case types.editingTodoItem:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === state.isEditing.id
            ? { ...todo, tdText: state.text }
            : todo
        ),
        isEditing: null,
        text: "",
      };
    case types.search:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};
