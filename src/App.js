import "./App.css";
import Header from "./components/header/Header";
import CreateTodo from "./components/createTodo/CreateTodo";
import Todo from "./components/todo/Todo";
import { useState } from "react";

const arr = [
  {
    id: 1,
    title: "Купить бананы",
    status: false,
  },
  {
    id: 2,
    title: "Купить пепси",
    status: true,
  },
  {
    id: 3,
    title: "Купить соль",
    status: false,
  },
];

function App() {
  // state here
  const [todosArray, setTodosArray] = useState(arr);

  const addTodo = (str) => {
    setTodosArray([
      ...todosArray,
      {
        id: Date.now(),
        title: str,
        status: false,
      },
    ]);
  };

  const deleteTodo = (id) => {
    const result = todosArray.filter((el) => el.id !== id);
    setTodosArray(result);
  };

  const newTodos = todosArray.map((item) => (
    <Todo
      key={item.id}
      id={item.id}
      title={item.title}
      status={item.status}
      deleteTodo={deleteTodo}
    />
  ));
  const compleatTodos = todosArray.reduce((acc, item) => acc + item.status, 0);
  return (
    <div className="App">
      <Header todos={todosArray.length} compleatTodos={compleatTodos} />
      <div className="content">
        <CreateTodo addTodo={addTodo} />
        <div className="todosWrapper">
          {/* Todo({ title: "Купить сахар", id: "1" }) Example of "props" */}
          {newTodos}
        </div>
      </div>
    </div>
  );
}

export default App;
