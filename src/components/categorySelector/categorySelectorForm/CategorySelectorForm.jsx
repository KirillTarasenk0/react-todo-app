import './CategorySelectorForm.css';
import {useState} from "react";

export default function CategorySelectorForm({handleCategoryInput}) {
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
      setInputValue(event.target.value);
  };
  const handleButtonClick = () => {
    handleCategoryInput(inputValue);
    setInputValue('');
  };
  return (
    <>
        <div>
            <input type="text" placeholder="Введите новую категорию" onChange={handleInputChange}/>
            <button onClick={handleButtonClick}>
                Отправить
            </button>
        </div>
    </>
  );
}