import { useState } from "react";
import "./Calculator.css";

export default function Calculator() {

   let [NumA, setNumA]= useState("");
   let  [NumB, setNumB] = useState("");
   let [Result, setResult] = useState("");

   let a = Number(NumA);
   let b = Number(NumB);

   let InputNumA= (e) => {
    setNumA(e.target.value);
   }

   let inputNumB = (e) => {
    setNumB(e.target.value);
   }

   let addBtn = () => { setResult(a + b) }
   let subBtn = () => { setResult(a - b) }
   let multBtn = () => { setResult(a * b) }

   let divBtn = () => { 
    if(b === 0) {
        setResult("Cannot divide by zero!");
    } else{
        setResult(a/b);
    }
}

    return(
        <div className="container"> 
        <h2 className="heading">Mini Calculator 🧮</h2>
          <input onChange={InputNumA} className={"input"} type="text" placeholder="Enter num a"/>
          <input onChange={inputNumB}  className={"input"} type="text"  placeholder="Enter num b"/> 

          <button className="btns" onClick={addBtn}>Add</button>
          <button className="btns" onClick={subBtn}>Subtract</button>
          <button className="btns" onClick={multBtn}>Multiply</button>
          <button className="btns" onClick={divBtn}>Divide</button>

          <p className="result">Result: {Result}</p>
        </div>
    );
}