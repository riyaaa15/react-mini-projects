import { useState } from "react";
import "./Counter.css";

export default function Counter() {

    let [count, setCount] = useState(0);

    let incCount = () => {
        setCount((currCount) => {
            return currCount + 1;
        });
    }

    let decCount = () => {
        if(count > 0) {
            setCount(count -1);
        }
    };

    let reset = () => {
        setCount(0);
    }

   return (
  <div className="container">
    <h3>{count}</h3>
    <div className="btn-row">                         {/* ← yeh add karo */}
      <button className="btn" onClick={incCount}>Increase +</button>
      <button className="btn" onClick={decCount}>Decrease −</button>
    </div>
    <button className="btn-reset" onClick={reset}>Reset Counter</button>
  </div>
);
}