import './CategorySelector.css';
import CategorySelectorForm from "./categorySelectorForm/CategorySelectorForm";
import {useState} from "react";

export default function CategorySelector() {
  //Позволяет выбирать категорию из списка существующих категорий или добавлять новую. Использует useState для управления формой ввода новой категории.
  const [clickCategoryButton, setClickCategoryButton] = useState(false);
  return (
    <>
      <div className="category__selector-container">
          <div>
              <select name="" id=""></select>
          </div>
          <div>
              <button onClick={() => setClickCategoryButton(!clickCategoryButton)}>
                  Новая категория
              </button>
              {clickCategoryButton && <CategorySelectorForm/>}
          </div>
      </div>
    </>
  );
}