import './TodoList.css';
import TodoItem from "../todoItem/TodoItem";
import CategoryOptionMenu from "../commonComponents/categoryOptionMenu/CategoryOptionMenu";
import {useState, useEffect} from "react";

export default function TodoList({todos, setTodos, inputCategoryValue, getCurrentCategoryInput, currentCategoryInput}) {
    //- Отображает задачи, отфильтрованные по выбранной категории.
    //- Использует useMemo для оптимизации процесса фильтрации задач по категории.
    const [taskStatus, setTaskStatus] = useState('');
    const [currentItemId, setCurrentItemId] = useState(0);
    const [deleteItemId, setDeleteItemId] = useState(0);
    const [openFilterButton, setOpenFilterButton] = useState(false);
    const [filterButton, setFilterButton] = useState(false);
    const [filteredTodos, setFilteredTodos] = useState([]);
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
    const filterTodosByCategory = () => {
        let filteredTodosItems = todos.filter(item => item.category === currentCategoryInput);
        setFilteredTodos(filteredTodosItems);
    };
    console.log(todos);
    console.log(currentCategoryInput);
    console.log(filteredTodos);
    useEffect(() => {
        removeElement(deleteItemId);
    }, [deleteItemId]);
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
                        changingNewTaskStatus={changingNewTaskStatus}
                        getCurrentItemId={getCurrentItemId}
                        getDeleteItemId={getDeleteItemId}
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
                    />
                ))
            }
        </div>
      </>
    );
}