import "./App.css";
import Header from "./components/header/Header";
import CreateTodo from "./components/createTodo/CreateTodo";
import Todo from "./components/todo/Todo";
import { useEffect, useState } from "react";


const datas = JSON.parse(localStorage.getItem('todos')) || []
function App() {
  // state here
  const [todosArray, setTodosArray] = useState(datas);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todosArray))
  }, [todosArray])

  console.log(todosArray);

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

  const onStatusChange = (id) => {
    const newArr = todosArray.map((item) => {
      if(item.id === id) {
        return { ...item, status: !item.status }
      }
      return item
    })
    setTodosArray(newArr)
  }

  const onEditTodo = (id, newTitle) => {
    const newArr = todosArray.map((item) => {
      if(item.id === id) {
        return {...item, title: newTitle}
      }
      return item
    })
    setTodosArray(newArr);
  }

  const newTodos = todosArray.map((item) => (
    <Todo
      key={item.id}
      id={item.id}
      title={item.title}
      status={item.status}
      deleteTodo={deleteTodo}
      onStatusChange={onStatusChange}
      onEditTodo={onEditTodo}
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
