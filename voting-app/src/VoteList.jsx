import { useState } from "react";
import VoteItem from "./VoteItem";
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Stack from '@mui/material/Stack';

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

  if (options[0].votes === 0 && options[1].votes === 0) {
    winner = "No votes yet 🗳️";
  } else if(options[0].votes > options[1].votes){
    winner = `${options[0].name} is Winning! 🏆`;
  } else if (options[1].votes > options[0].votes) {
    winner = `${options[1].name} is Winning! 🏆`;
  } else {
    winner = "It's a Tie 🤝";
  }
    return(
        // <div>
         <Container maxWidth="sm" sx={{ mt: 4, textAlign: "center" }}>
         <Typography variant="h4" gutterBottom>
          Voting App
          </Typography>

             <Stack spacing={2}>
              {options.map((option) => (
                    <VoteItem
                      key={option.id}
                      id={option.id}
                      name={option.name}
                      votes={option.votes}
                      countVote={countVote}
                    />
              ))}     
             </Stack>

            <Typography variant="h6" sx={{ mt: 3, fontWeight: "bold"}}>
              {winner}
            </Typography>
            </Container>
        /* </div> */
    )
}