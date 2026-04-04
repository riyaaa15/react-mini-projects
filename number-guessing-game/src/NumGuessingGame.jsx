import { useState } from "react";
import GuessInput from "./GuessInput";
import ResultDisplay from "./ResultDisplay";

export default function NumGuessingGame() {

  const generateRandom = () => Math.floor(Math.random() * 100) + 1;

  let [secretNum, setSecretNum] = useState(generateRandom());
  let [message, setMessage] = useState("");
  let [attempts, setAttempts] = useState(0);

  let handleGuess = (userNum) => {
    let num = Number(userNum);
    let diff = Math.abs(num - secretNum);

    setAttempts(prev => prev + 1);

    let hint = "";
    if(diff === 0) hint = "";
    else if (diff <= 5) hint = "🔥 Very Close!";
    else if (diff <= 10) hint = "🙂 Close!";
    else if (diff <=20) hint = "😐 Not Close";
    else hint = "😅 Far Away!";

    if(num === secretNum) {
      setMessage(`🎉 Correct! You got it in ${attempts + 1} attempts!`);
    } else if( num < secretNum) {
      setMessage(`📉 Too Low — ${hint}`);
    } else{
      setMessage(`📈 Too High — ${hint}`);
    }
 
  }

  let  handleReset = () => {
    setSecretNum(generateRandom());
    setMessage("");
    setAttempts(0);
  }
  return(
    <>
    <GuessInput onGuess={handleGuess} onReset={handleReset}/>
    <ResultDisplay message={message} attempts={attempts}/>
    </>
  );
};