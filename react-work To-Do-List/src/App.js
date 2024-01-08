import ToDoForm from './components/TodoForm/TodoForm'
import TodoList from './components/TodoList/TodoList';
import TodoFooter from './components/TodoFooter/TodoFooter';

import "./App.css";

function App() {
  
  return (
    <div className="App">
      <h1>MY ToDo List</h1>
      <div className="todo-box">
        <ToDoForm/>
        <TodoList/>
        <TodoFooter/>
      </div>
    </div>
  );
}

export default App;
