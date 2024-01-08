import { applyMiddleware, combineReducers, createStore } from "redux";
import {initialTodos, todoReducer } from "./slices/todoSlice/todos";
import { ignorEmpatyTodo, isEditingTodo } from "./Middleware/MiddlewareTodo";

const store = createStore(combineReducers({
  todos: todoReducer,
}), {
  todos: initialTodos,
},applyMiddleware(ignorEmpatyTodo, isEditingTodo))

export default store;
