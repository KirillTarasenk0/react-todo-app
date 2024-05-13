import './TodoList.css';
import TodoItem from "../todoItem/TodoItem";
import {useState} from "react";

export default function TodoList({todos}) {
    //- Отображает задачи, отфильтрованные по выбранной категории.
    //- Использует useMemo для оптимизации процесса фильтрации задач по категории.
    const [taskStatus, setTaskStatus] = useState('');
    const [currentItemId, setCurrentItemId] = useState(0);
    const changingNewTaskStatus = newTaskStatusValue => {
        setTaskStatus(newTaskStatusValue);
    };
    const getCurrentItemId = (id) => {
        setCurrentItemId(id);
    };
    return (
      <>
        <div>
            {todos && todos.map((item, index) => {
                if (item.id === currentItemId) {
                    item.completed = taskStatus;
                }
                return <TodoItem
                    id={item.id}
                    title={item.title}
                    category={!item.category ? 'категория не выбрана' : item.category}
                    completed={(item.completed === false) ? 'не выполнено' : item.completed}
                    changingNewTaskStatus={changingNewTaskStatus}
                    getCurrentItemId={getCurrentItemId}
                />
            })}
        </div>
      </>
    );
}