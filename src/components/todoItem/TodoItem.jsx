import './TodoItem.css';

export default function TodoItem({id, title, category, completed}) {
    //- Отображает отдельную задачу с кнопками для изменения статуса выполнения и удаления задачи.
    //- Использует useState для управления состоянием задачи (выполнено/не выполнено).
    return (
      <>
        <div>
            <p>{id}</p>
            <h2>{title}</h2>
            <p>{category}</p>
            <p>{completed}</p>
        </div>
      </>
    );
}