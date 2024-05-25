import './App.css';
import CategorySelector from "./components/categorySelector/CategorySelector";
import AddTodoForm from "./components/addTodoForm/AddTodoForm";
import TodoList from "./components/todoList/TodoList";
import {useEffect, useState} from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [taskValue, setTaskValue] = useState([]);
  const [inputCategoryValue, setInputCategoryValue] = useState([]);
  const [currentCategoryInput, setCurrentCategoryInput] = useState('');
  const [currentTodo, setCurrentTodo] = useState([])
  const [addTodoButtonClick, setAddTodoButtonClick] = useState(false);
  const [id, setId] = useState(1);
  const [appLoading, setAppLoading] = useState(false);
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
      setAppLoading(true);
      setTimeout(() => {
          setAppLoading(false);
      }, 1000);
  }, []);
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
  useEffect(() => {
     if (inputCategoryValue > 0) {
         setCurrentCategoryInput(inputCategoryValue[0]);
     }
  }, [inputCategoryValue]);
  return (
    <>
        {appLoading ? <h1>Loading...</h1> :
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
                        setTodos={setTodos}
                        id={id}
                        inputCategoryValue={inputCategoryValue}
                        getCurrentCategoryInput={getCurrentCategoryInput}
                        currentCategoryInput={currentCategoryInput}
                    />
                }
            </div>
        }
    </>
  );
}

export default App;
