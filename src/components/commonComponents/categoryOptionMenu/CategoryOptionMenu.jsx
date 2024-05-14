import './CategoryOptionMenu.css';

export default function CategoryOptionMenu({inputCategoryValue, getCurrentCategoryInput}) {
    return (
        <>
            <select name="" id="" onChange={getCurrentCategoryInput}>
                {inputCategoryValue && inputCategoryValue.map((item, index) => {
                    return <option key={index}>{item}</option>
                })}
            </select>
        </>
    );
}