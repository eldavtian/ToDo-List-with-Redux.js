import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";
import { selectSearch, selectTodos } from "../../store/slices/todoSlice/select";

const TodoList = () => {
  const stateTodos = useSelector(selectTodos)
  const todoSearch = useSelector(selectSearch);

  const newFilteredTodo = stateTodos.filter((todo) =>
    todo.tdText.toLowerCase().includes(todoSearch.toLowerCase())
  );

  return (
    <div className="todo-list">
      {newFilteredTodo.map((todo) => {
        return (
          <div key={todo.id}>
            <TodoItem todo={todo} />
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
