import css from "./Todo.module.css";

const Todo = (props) => {
  console.log(props);
  return (
    <div className={css.wrapper}>
      <div>
        <input checked={props.status} type="checkbox" />
        <p className={props.status ? css.compleat : ""}>{props.title}</p>
      </div>
      <div>
        <button className="mainBtn">Edit</button>
        <button onClick={() => props.deleteTodo(props.id)} className="mainBtn">
          Del
        </button>
      </div>
    </div>
  );
};

export default Todo;
