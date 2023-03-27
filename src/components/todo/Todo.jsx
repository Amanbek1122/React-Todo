import { useState } from "react";
import css from "./Todo.module.css";

const Todo = (props) => {
  const [isEdit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState(props.title)
  // console.log(props);

  const handleEdit = () => {
    setEdit(!isEdit)
  };

  const handleInput = (e) => {
    setInputValue(e.target.value)
  }

  const submit = (e) => {
    e.preventDefault();
    props.onEditTodo(props.id, inputValue)
    setEdit(false)
  }

  return (
    <div className={css.wrapper}>
      {isEdit ? (
        <form onSubmit={submit}>
          <input value={inputValue} onChange={handleInput} type="text" />
          <button>Save</button>
        </form>
      ) : (
        <label>
          <input
            checked={props.status}
            onChange={() => props.onStatusChange(props.id)}
            type="checkbox"
          />
          <p className={props.status ? css.compleat : ""}>{props.title}</p>
        </label>
      )}
      <div>
        <button onClick={handleEdit} className="mainBtn">
          Edit
        </button>
        <button onClick={() => props.deleteTodo(props.id)} className="mainBtn">
          Del
        </button>
      </div>
    </div>
  );
};

export default Todo;
