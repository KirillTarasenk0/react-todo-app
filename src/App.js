import './App.css';
import {initialTodos} from "./helpers/initialTodos/initialTodos";
import CategorySelector from "./components/categorySelector/CategorySelector";
import AddTodoForm from "./components/addTodoForm/AddTodoForm";

function App() {
  return (
    <>
      <div className="app__container">
        <AddTodoForm/>
        <CategorySelector/>
      </div>
    </>
  );
}

export default App;
