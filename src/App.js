import "./App.css";
import Header from "./components/header/Header";
import CreateTodo from "./components/createTodo/CreateTodo";
import Todo from "./components/todo/Todo";

const todosArray = [
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
  const newTodos = todosArray.map((item) => (
    <Todo title={item.title} status={item.status} />
  ));
  const compleatTodos = todosArray.reduce((acc, item) => acc + item.status, 0);
  return (
    <div className="App">
      <Header todos={todosArray.length} compleatTodos={compleatTodos} />
      <div className="content">
        <CreateTodo />
        <div className="todosWrapper">
          {/* Todo({ title: "Купить сахар", id: "1" }) Example of "props" */}
          {newTodos}
        </div>
      </div>
    </div>
  );
}

export default App;
