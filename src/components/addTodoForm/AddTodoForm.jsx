import './AddTodoForm.css';
import {useState} from "react";

export default function AddTodoForm({handleTaskInput}) {
    const [inputValue, setInputValue] = useState('');
    const handleTaskInputChange = (event) => {
        setInputValue(event.target.value);
    };
    return (
      <>
        <div>
            <input type="text" placeholder="Введите новую задачу" onChange={handleTaskInputChange}/>
            <button type="submit" onClick={() => handleTaskInput(inputValue, setInputValue)}>
                Отправить
            </button>
        </div>
      </>
    );
}