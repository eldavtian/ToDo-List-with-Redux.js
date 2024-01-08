import { useRef } from "react";
import { MdDeleteForever } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { actionCheckid, actionDelete, actionEditItem } from "../../store/slices/todoSlice/action";

import "./TodoItem.css";

const TodoItem = ({ todo }) => {

  const checkedRef = useRef(null);
  const dispatch = useDispatch();

  const onChangeTodo = () => change({ ...todo, isCompleted: checkedRef.current.checked });

  const change = (newTodo) => dispatch(actionCheckid({ newTodo }));

  return (
    <div className="todo-item">
      <div className="item">
        <input
          type="checkbox"
          name="todo"
          ref={checkedRef}
          onChange={onChangeTodo}
        />
        <label htmlFor="todo" data-content={todo.tdText}> {todo.tdText} </label>
      </div>
      <div className="item-handler">
        <BiEditAlt onClick={() => dispatch(actionEditItem(todo))} />
        <MdDeleteForever onClick={() => dispatch(actionDelete({ id: todo.id }))} />
      </div>
    </div>
  );
};

export default TodoItem;
