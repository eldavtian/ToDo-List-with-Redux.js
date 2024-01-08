import { actionEdtiingTodoItem } from "../slices/todoSlice/action";
import { types } from "../slices/todoSlice/types";

export const ignorEmpatyTodo = (store) => (next) => (action) => {
  const {todos} = store.getState()

  if(action.type === types.add && !todos.text.trim()) return
  next(action);
}

export const isEditingTodo = (store) => (next) => (action) => {
  const {todos} = store.getState()
  
  if(todos.isEditing && action.type === types.add) {
    return store.dispatch(actionEdtiingTodoItem())
  }
  next(action)
}