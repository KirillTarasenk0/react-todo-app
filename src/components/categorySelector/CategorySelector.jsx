import './CategorySelector.css';
import CategorySelectorForm from "./categorySelectorForm/CategorySelectorForm";
import {useState} from "react";

export default function CategorySelector() {
  const [clickCategoryButton, setClickCategoryButton] = useState(false);
  const [inputCategoryValue, setInputCategoryValue] = useState([]);
  const handleCategoryInput = (value) => {
      setInputCategoryValue([...inputCategoryValue, value]);
  };
  return (
    <>
      <div className="category__selector-container">
          <div>
              <select name="" id="">
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