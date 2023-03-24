import { useState } from "react";
import css from "./CreateTodo.module.css";

const CreateTodo = () => {

  const [inputValue, setInputValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    alert(inputValue);
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <form onSubmit={submit} className={css.wrapper}>
      <input value={inputValue} onChange={handleChange} className="mainInput" placeholder="Add some todo" type="text" />
      <button className="mainBtn">+Add</button>
    </form>
  );
};

export default CreateTodo;
