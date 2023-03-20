import css from "./CreateTodo.module.css";

const CreateTodo = () => {
  return (
    <div className={css.wrapper}>
      <input className="mainInput" placeholder="Add some todo" type="text" />
      <button className="mainBtn">+Add</button>
    </div>
  );
};

export default CreateTodo;
