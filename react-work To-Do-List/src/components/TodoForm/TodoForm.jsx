import { useRef } from "react";
import { VscSearch } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { actionAdd, actionToggleText, actionSearch } from "../../store/slices/todoSlice/action"; 
import { selectIsEditing, selectText } from "../../store/slices/todoSlice/select";
import "./TodoForm.css";

const TodoForm = () => {
  
  const formRef = useRef(null);
  const isEditing = useSelector(selectIsEditing);
  const text = useSelector(selectText);
  const dispatch = useDispatch(); 

  const AddTodoList = (e) => {
    e.preventDefault();
    formRef.current.focus();
    dispatch(actionAdd()); 
  };

  return ( 
    <div className="todo-form">
      <form onSubmit={AddTodoList}>
        <input
          placeholder="New To-Do..."
          type="text"
          ref={formRef}
          value={text}
          onChange={(e) => dispatch(actionToggleText(e.target.value))}
        />
        <button className="button-3">{isEditing ? "edit" : "add"}</button>
      </form>
      <div className="search-block">
        <input
          type="text"
          placeholder="search"
          onChange={(e) => dispatch(actionSearch(e.target.value))}
        />
        <VscSearch />
      </div>
    </div>
  );
};

export default TodoForm;
