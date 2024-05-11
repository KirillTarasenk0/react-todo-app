import './App.css';
import {initialTodos} from "./helpers/initialTodos/initialTodos";
import CategorySelector from "./components/categorySelector/CategorySelector";

function App() {
  return (
    <>
      <div className="app__container">
        <CategorySelector/>
      </div>
    </>
  );
}

export default App;
