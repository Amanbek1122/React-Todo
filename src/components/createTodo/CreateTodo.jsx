import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
import css from "./CreateTodo.module.css";

const CreateTodo = () => {
  const [inputValue, setInputValue] = useState("");
   
  const dispatch = useDispatch()
  const submit = (e) => {
    e.preventDefault();
    if(inputValue) {
      // props.addTodo(inputValue)
      dispatch( addTodo(inputValue) )
      setInputValue('')
    }
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
