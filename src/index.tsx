import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux";

let num: number | string = 10;
num = 5;
num = "asdasd";

let a: number = 1
let b: string = 'Hello'
let s: boolean = false
let u: undefined = undefined
let n: null = null

let arr: Array<number | string> = [1,2,3]
arr.push('asdad')

interface OBJType {
  name: string;
  age: number;
  sayHello: (name: string) => void  
}
let obj:OBJType  = {
  name: 'solid',
  age: 15,
  sayHello: (name: string) => {
    alert("Hello " + name)
  }
}

// obj.sayHello('Aman')

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
