import './AddTodoForm.css';
import {useState} from "react";

export default function AddTodoForm({handleTaskInput, getCurrentTodo}) {
    const [inputValue, setInputValue] = useState('');
    const handleTaskInputChange = (event) => {
        setInputValue(event.target.value);
    };
    return (
      <>
        <div>
            <input type="text" placeholder="Введите новую задачу" onChange={handleTaskInputChange}/>
            <button type="submit" onClick={() => {
                handleTaskInput(inputValue, setInputValue);
                getCurrentTodo(inputValue);
            }}>
                Отправить
            </button>
        </div>
      </>
    );
}