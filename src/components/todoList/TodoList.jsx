import './TodoList.css';
import TodoItem from "../todoItem/TodoItem";
import {useState, useEffect} from "react";

export default function TodoList({todos, setTodos}) {
    //- Отображает задачи, отфильтрованные по выбранной категории.
    //- Использует useMemo для оптимизации процесса фильтрации задач по категории.
    const [taskStatus, setTaskStatus] = useState('');
    const [currentItemId, setCurrentItemId] = useState(0);
    const [deleteItemId, setDeleteItemId] = useState(0);
    const changingNewTaskStatus = newTaskStatusValue => {
        setTaskStatus(newTaskStatusValue);
    };
    const getCurrentItemId = (id) => {
        setCurrentItemId(id);
    };
    const getDeleteItemId = (id) => {
        setDeleteItemId(id);
    };
    const removeElement = (elementToRemove) => {
        let newTodos = todos.filter(item => item.id !== elementToRemove);
        newTodos = newTodos.map((item, index) => {
            return {...item, id: index + 1}
        });
        setTodos(newTodos);
    };
    useEffect(() => {
        removeElement(deleteItemId);
    }, [deleteItemId]);
    return (
      <>
        <div>
            <div>
                <button>Отфильтровать задачи</button>
            </div>
        </div>
        <div>
            {todos && todos.map(item => {
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
                    getDeleteItemId={getDeleteItemId}
                />
            })}
        </div>
      </>
    );
}