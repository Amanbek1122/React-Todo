import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, onEditTodo, onStatusChange } from "../../redux/todoSlice";
import css from "./Todo.module.css";

const Todo = (props) => {
  const [isEdit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState(props.title);

  const dispatch = useDispatch();
  const handleEdit = () => {
    setEdit(!isEdit);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(props.id));
  };

  const handleStatus = () => {
    dispatch(onStatusChange(props.id));
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(onEditTodo({ id: props.id, inputValue }));
    setEdit(false);
  };

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
            onChange={handleStatus}
            type="checkbox"
          />
          <p className={props.status ? css.compleat : ""}>{props.title}</p>
        </label>
      )}
      <div>
        <button onClick={handleEdit} className="mainBtn">
          Edit
        </button>
        <button onClick={handleDelete} className="mainBtn">
          Del
        </button>
      </div>
    </div>
  );
};

export default Todo;
