import React from "react";
import ReactDOM from "react-dom";
import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react";

class Counter {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase() {
    this.count++;
  }

  decrease() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }
}

const myCounter = new Counter();

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
