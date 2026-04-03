import { useState } from "react";
import VoteItem from "./VoteItem";

export default function VoteList() {

    let [options, setOptions] = useState([
        { id: 1, name: "🐶 Dog", votes: 0},
        { id: 2, name: "😺 Cat", votes: 0},
    ]);

    let countVote = (id) => {
    setOptions((prev) =>
      prev.map((option) =>
        option.id === id
          ? { ...option, votes: option.votes + 1 }
          : option
      )
    );
  }

  //Winner logic 
  let winner;
  if(options[0].votes > options[1].votes){
    winner = `${options[0].name} is Winning! 🏆`;
  } else if (options[1].votes > options[0].votes) {
    winner = `${options[1].name} is Winning! 🏆`;
  } else {
    winner = "It's a Tie 🤝";
  }
    return(
        <div>
            <h2>Voting App</h2>

            <ul>
                {options.map((option) => (
                    <VoteItem
                      key={option.id}
                      id={option.id}
                      name={option.name}
                      votes={option.votes}
                      countVote={countVote}
                    />
                ))}
            </ul>

            <p>{winner}</p>
        </div>
    )
}