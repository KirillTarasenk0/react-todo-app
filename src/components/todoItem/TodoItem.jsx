import './TodoItem.css';
import TaskStatusForm from "./taskStatusForm/TaskStatusForm";
import {useState} from "react";

export default function TodoItem({id, title, category, completed, changingNewTaskStatus, getCurrentItemId}) {
    //- Отображает отдельную задачу с кнопками для изменения статуса выполнения и удаления задачи.
    //- Использует useState для управления состоянием задачи (выполнено/не выполнено).
    const [clickStatusButton, setClickStatusButton] = useState(false);
    return (
      <>
        <div>
            <p>{id}</p>
            <h2>{title}</h2>
            <p>{category}</p>
            <p>{completed}</p>
            <div>
                <div>
                    <button onClick={() =>  setClickStatusButton(!clickStatusButton)}>
                        Изменить статус
                    </button>
                    {clickStatusButton &&
                        <TaskStatusForm
                            id={id}
                            changingNewTaskStatus={changingNewTaskStatus}
                            getCurrentItemId={getCurrentItemId}
                        />
                    }
                </div>
                <div>
                    <button>Удалить задачу</button>
                </div>
            </div>
        </div>
      </>
    );
}