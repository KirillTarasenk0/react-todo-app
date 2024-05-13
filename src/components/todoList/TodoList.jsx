import './TodoList.css';
import TodoItem from "../todoItem/TodoItem";

export default function TodoList({todos}) {
    return (
      <>
        <div>
            {todos && todos.map(item => {
                return <TodoItem
                    id={item.id}
                    title={item.title}
                    category={!item.category ? 'категория не выбрана' : item.category}
                    completed={(item.completed === false) ? 'не выполнено' : item.completed}
                />
            })}
        </div>
      </>
    );
}