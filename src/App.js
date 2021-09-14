import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom";
import { observer } from "mobx-react";
import CounterStore from "./store/counter";

const CounterContext = createContext();

const CounterView = observer(() => {
  const counter = useContext(CounterContext);
  return (
    <>
      <div>{counter.count}</div>
      <button onClick={() => counter.increase()}>+1</button>
      <button onClick={() => counter.decrease()}>-1</button>
      <button onClick={() => counter.reset()}>reset</button>
    </>
  );
});

// ReactDOM.render(<CounterView counter={myCounter} />, document.body);
export default function App() {
  return (
    <CounterContext.Provider value={new CounterStore()}>
      <CounterView />
    </CounterContext.Provider>
  );
}
