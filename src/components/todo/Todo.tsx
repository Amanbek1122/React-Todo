import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, onEditTodo, onStatusChange } from "../../redux/todoSlice";
import { TodoType } from "../../types";
import css from "./Todo.module.css";

type sumT = (a: number, b: number, c?: number) => number;

const sum: sumT = (a, b) => {
  return a + b;
};

const result = sum(5, 9, 3);
const result2 = sum(5, 9);

console.log(result);
















interface OBJ {
  a: number;
  b: number;
  c?: number;
}



type Sum2T = (obj: OBJ) => number
const sum2: Sum2T = (obj) => {
  return obj.a + obj.b + obj.c;
};

sum2({ a: 5, b: 3 }); // 8
sum2({ a: 5, b: 3, c: 15}); // 23



type Sum3T = (obj: Required<OBJ>) => number
const sum3: Sum3T = (obj) => {
  return obj.a + obj.b + obj.c;
} 


sum3({ a: 5, b: 3, c: 10 }); // 18
// sum3({ a: 5, b: 3 }); // 18










type TestStateT = <T>(a: T) => T;
const useTestState: TestStateT = (a) => {
  return a;
};

const res = useTestState<TodoType[]>([]);
const res2 = useTestState<string>("Hello");

console.log(res);
console.log(res2);

type PropsType = TodoType & {
  // testProps: number
};
const Todo: FC<PropsType> = (props) => {
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
