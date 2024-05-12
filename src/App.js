import './App.css';
import {initialTodos} from "./helpers/initialTodos/initialTodos";
import CategorySelector from "./components/categorySelector/CategorySelector";
import AddTodoForm from "./components/addTodoForm/AddTodoForm";
import {useState} from "react";

function App() {
  const [taskValue, setTaskValue] = useState([]);
  const [inputCategoryValue, setInputCategoryValue] = useState([]);
  const handleTaskInput = (inputValue, callback) => {
      setTaskValue([...taskValue, inputValue]);
      callback('');
  };
  const handleCategoryInput = (value) => {
      setInputCategoryValue([...inputCategoryValue, value]);
  };
  console.log(inputCategoryValue);
  return (
    <>
      <div className="app__container">
        <AddTodoForm
          handleTaskInput={handleTaskInput}
        />
        <CategorySelector
          handleCategoryInput={handleCategoryInput}
          inputCategoryValue={inputCategoryValue}
        />
      </div>
    </>
  );
}

export default App;
