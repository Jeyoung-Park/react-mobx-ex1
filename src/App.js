import React from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";
import Counter from "./store/counter";
import CounterStore from "./store/counter";

const myCounter = new CounterStore();

const CounterView = observer(({ counter }) => (
  <>
    <div>{counter.count}</div>
    <button onClick={() => counter.increase()}>+1</button>
    <button onClick={() => counter.decrease()}>-1</button>
    <button onClick={() => counter.reset()}>reset</button>
  </>
));

// ReactDOM.render(<CounterView counter={myCounter} />, document.body);
export default function App() {
  return <CounterView counter={myCounter} />;
}
