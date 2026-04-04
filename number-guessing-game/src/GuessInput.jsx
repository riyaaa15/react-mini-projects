import { useState } from "react"

export default function GuessInput({onGuess, onReset}) {

    let [userinput, setUserInput] = useState("");

    let matchUserInput = (e) => {
        setUserInput(e.target.value);
    }

    let matchNum = () => {
        if(userinput.trim() === "" )  return;

            onGuess(userinput);
            setUserInput("");
    }

    let handleReset = () => {
        setUserInput("");
        onReset();
    }
    return(
        <div>
            <input 
            type="text" 
            placeholder="guess the number..."
            onChange={matchUserInput}
            value={userinput}
            />

            <button onClick={matchNum}>Guess!</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}