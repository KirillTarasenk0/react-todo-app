import './CategorySelector.css';
import CategorySelectorForm from "./categorySelectorForm/CategorySelectorForm";
import {useState} from "react";

export default function CategorySelector({handleCategoryInput, inputCategoryValue, getCurrentCategoryInput}) {
  const [clickCategoryButton, setClickCategoryButton] = useState(false);
  return (
    <>
      <div className="category__selector-container">
          <div>
              <select name="" id="" onChange={getCurrentCategoryInput}>
                  {inputCategoryValue && inputCategoryValue.map((item, index) => {
                      return <option key={index}>{item}</option>
                  })}
              </select>
          </div>
          <div>
              <button onClick={() => setClickCategoryButton(!clickCategoryButton)}>
                  Новая категория
              </button>
              {clickCategoryButton &&
                  <CategorySelectorForm
                      handleCategoryInput={handleCategoryInput}
                  />
              }
          </div>
      </div>
    </>
  );
}