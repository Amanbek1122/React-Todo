import "./App.css";
import Header from "./components/header/Header";
import CreateTodo from "./components/createTodo/CreateTodo";
import Todo from "./components/todo/Todo";
import { useSelector } from "react-redux";

function App() {
  const todosArray = useSelector((state) => state.data);

  const newTodos = todosArray.map((item) => (
    <Todo key={item.id} id={item.id} title={item.title} status={item.status} />
  ));
  const compleatTodos = todosArray.reduce((acc, item) => acc + item.status, 0);
  return (
    <div className="App">
      <Header todos={todosArray.length} compleatTodos={compleatTodos} />
      <div className="content">
        <CreateTodo />
        <div className="todosWrapper">{newTodos}</div>
      </div>
    </div>
  );
}

export default App;
