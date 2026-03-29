import { useState } from "react";
import DiceDisplay from "./DiceDisplay";
// import "./DiceRoller.css";

export default function DiceRoller() {
    const [number, setNumber] = useState(null);
    const [rollkey, setRollkey] = useState(0);

    const generateNum = () => {
        const diceNum = Math.floor(Math.random() * 6) + 1;
        setNumber(diceNum);
        setRollkey(prev => prev + 10);
    };

    return(
        <div className="table">
            <div className="title">Casino Royale</div>
            <div className="title-main">Dice Roller</div>

            <div className="dice-tray">
                {number && (
                    <span className="number-badge">{number}</span>
                )}

                {number 
                  ? <DiceDisplay key={rollkey} number={number}/>
                  : <span className="placeholder-text">Roll the dice...</span>
                }
            </div>

            <button className="roll-btn" onClick={generateNum}>
                ✦ Roll Dice ✦
            </button>

            {number === 6 && (
                <div className="lucky-msg">Congratulation! 🎉 Lucky Roll!</div>
            )}

            <div className="divider">✦ ✦ ✦</div>
        </div>
    )
}