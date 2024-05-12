import './AddTodoForm.css';
import {useState} from "react";

export default function AddTodoForm() {
    const [taskValue, setTaskValue] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const handleTaskInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleTaskInput = () => {
        setTaskValue([...taskValue, inputValue]);
        setInputValue('');
    };
    return (
      <>
        <div>
            <input type="text" placeholder="Введите новую задачу" onChange={handleTaskInputChange}/>
            <button type="submit" onClick={handleTaskInput}>Отправить</button>
        </div>
      </>
    );
}