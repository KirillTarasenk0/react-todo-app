import './CategorySelector.css';
import CategorySelectorForm from "./categorySelectorForm/CategorySelectorForm";
import CategoryOptionMenu from "../commonComponents/categoryOptionMenu/CategoryOptionMenu";
import {useState} from "react";

export default function CategorySelector({handleCategoryInput, inputCategoryValue, getCurrentCategoryInput}) {
  const [clickCategoryButton, setClickCategoryButton] = useState(false);

  return (
    <>
      <div className="category__selector-container">
          <div>
              <CategoryOptionMenu
                  inputCategoryValue={inputCategoryValue}
                  getCurrentCategoryInput={getCurrentCategoryInput}
              />
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