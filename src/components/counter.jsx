import { useState } from "react";

const Counter = () => {
  let [count,setState] = useState(0);
  const add = ()=>{
    setState(count+1)
  }
  const inc = ()=>{
    setState(count-1)
  }
    return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <span>
        <button className="button" onClick={add}>+</button>
        <button className="button" onClick={inc}>-</button>
      </span>
    </div>
  );
};

export default Counter;
