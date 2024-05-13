import './App.css';
import CategorySelector from "./components/categorySelector/CategorySelector";
import AddTodoForm from "./components/addTodoForm/AddTodoForm";
import TodoList from "./components/todoList/TodoList";
import {useEffect, useState} from "react";
import TodoItem from "./components/todoItem/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const [taskValue, setTaskValue] = useState([]);
  const [inputCategoryValue, setInputCategoryValue] = useState([]);
  const [currentCategoryInput, setCurrentCategoryInput] = useState('');
  const [currentTodo, setCurrentTodo] = useState([])
  const [addTodoButtonClick, setAddTodoButtonClick] = useState(false);
  const [id, setId] = useState(0);
  const handleTaskInput = (inputValue, callback) => {
      setTaskValue([...taskValue, inputValue]);
      callback('');
  };
  const handleCategoryInput = (value) => {
      setInputCategoryValue([...inputCategoryValue, value]);
  };
  const getCurrentCategoryInput = event => {
      setCurrentCategoryInput(event.target.value);
  };
  const getCurrentTodo = (input) => {
      setCurrentTodo(input);
      setAddTodoButtonClick(true);
  };
  useEffect(() => {
      if (addTodoButtonClick) {
          setAddTodoButtonClick(false);
          setId(id + 1);
          setTodos([...todos, {
              id: id,
              title: currentTodo,
              category: currentCategoryInput,
              completed: false
          }]);
      }
  }, [addTodoButtonClick]);
  return (
    <>
      <div className="app__container">
        <AddTodoForm
          handleTaskInput={handleTaskInput}
          getCurrentTodo={getCurrentTodo}
        />
        <CategorySelector
          handleCategoryInput={handleCategoryInput}
          inputCategoryValue={inputCategoryValue}
          getCurrentCategoryInput={getCurrentCategoryInput}
        />
          {todos &&
              <TodoList
                  todos={todos}
              />
          }
      </div>
    </>
  );
}

export default App;
