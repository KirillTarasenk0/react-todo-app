import './CategorySelectorForm.css';
import {useState} from "react";

export default function CategorySelectorForm() {
  const [clickSendButton, setClickSendButton] = useState(false);
  const [inputCategoryValue, setInputCategoryValue] = useState('');
  const handleCategoryInput = (event) => {
      setInputCategoryValue(event.target.value);
  };
  return (
    <>
        <div>
            <input type="text" placeholder="Введите новую категорию" onInput={handleCategoryInput}/>
            <button onClick={() => setClickSendButton(!clickSendButton)}>
                Отправить
            </button>
        </div>
    </>
  );
}