import './TaskStatusForm.css';
import {useState} from "react";

export default function TaskStatusForm({id, changingNewTaskStatus, getCurrentItemId}) {
    const [newTaskStatus, setNewTaskStatus] = useState('');
    const handleNewTaskStatusInput = (event) => {
        setNewTaskStatus(event.target.value);
    };
    return (
      <>
          <input type="text" placeholder="Введите статус задачи" onInput={handleNewTaskStatusInput}/>
          <button onClick={() => {
              changingNewTaskStatus(newTaskStatus);
              getCurrentItemId(id);
          }}>Изменить</button>
      </>
    );
}