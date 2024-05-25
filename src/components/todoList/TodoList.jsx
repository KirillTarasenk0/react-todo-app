import './TodoList.css';
import TodoItem from "../todoItem/TodoItem";
import CategoryOptionMenu from "../commonComponents/categoryOptionMenu/CategoryOptionMenu";
import {useState, useEffect, useMemo} from "react";

export default function TodoList({todos, setTodos, inputCategoryValue, getCurrentCategoryInput, currentCategoryInput}) {
    const [taskStatus, setTaskStatus] = useState('');
    const [currentItemId, setCurrentItemId] = useState(0);
    const [deleteItemId, setDeleteItemId] = useState(0);
    const [openFilterButton, setOpenFilterButton] = useState(false);
    const [filterButton, setFilterButton] = useState(false);
    const [filteredTodos, setFilteredTodos] = useState([]);
    let filteredTodosItems = useMemo(() =>
            todos ? todos.filter(item => item.category === currentCategoryInput) : [],
        [todos, currentCategoryInput]
    );
    const changingNewTaskStatus = () => {
        if (!todos) return;
        setTodos(todos.map(item => {
            if (item.id === currentItemId) {
                return {...item, completed: taskStatus};
            }
            return item;
        }));
    };
    const changingNewTaskStatusInFiltered = () => {
        if (!filteredTodos) return;
        if (filteredTodos) {
            setFilteredTodos(todos.map(item => {
                if (item.id === currentItemId) {
                    return {...item, completed: taskStatus};
                }
                return item;
            }));
        }
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
    const removeFilteredElement = (elementToRemove) => {
        let newTodos = filteredTodos.filter(item => item.id !== elementToRemove);
        newTodos = newTodos.map((item, index) => {
            return {...item, id: index + 1}
        });
        setFilteredTodos(newTodos);
    };
    const filterTodosByCategory = () => {
        setFilteredTodos(filteredTodosItems);
    };
    useEffect(() => {
        removeElement(deleteItemId);
    }, [deleteItemId]);
    useEffect(() => {
        removeFilteredElement(deleteItemId)
    }, [deleteItemId, filterButton]);
    useEffect(() => {
        if (taskStatus !== '') {
            changingNewTaskStatus(todos);
        }
    }, [taskStatus]);
    useEffect(() => {
        if (taskStatus !== '') {
            changingNewTaskStatusInFiltered(filteredTodos);
        }
    }, [taskStatus]);
    return (
      <>
        <div>
            <div>
                <button onClick={() => setOpenFilterButton(!openFilterButton)}>
                    Отфильтровать задачи
                </button>
            </div>
            <div>
                {openFilterButton &&
                    <CategoryOptionMenu
                        inputCategoryValue={inputCategoryValue}
                        getCurrentCategoryInput={getCurrentCategoryInput}
                    />
                }
                {openFilterButton &&
                    <button onClick={() => {
                        filterTodosByCategory();
                        setFilterButton(true);
                    }}>
                        Фильтровать
                    </button>
                }
            </div>
        </div>
        <div>
            {filterButton ?
                filteredTodos.map(item => (
                    <TodoItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        category={!item.category ? 'категория не выбрана' : item.category}
                        completed={(item.completed === false) ? 'не выполнено' : item.completed}
                        changingNewTaskStatus={changingNewTaskStatusInFiltered}
                        getCurrentItemId={getCurrentItemId}
                        getDeleteItemId={getDeleteItemId}
                        setTaskStatus={setTaskStatus}
                    />
                ))
                :
                todos.map(item => (
                    <TodoItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        category={!item.category ? 'категория не выбрана' : item.category}
                        completed={(item.completed === false) ? 'не выполнено' : item.completed}
                        changingNewTaskStatus={changingNewTaskStatus}
                        getCurrentItemId={getCurrentItemId}
                        getDeleteItemId={getDeleteItemId}
                        setTaskStatus={setTaskStatus}
                    />
                ))
            }
        </div>
      </>
    );
}