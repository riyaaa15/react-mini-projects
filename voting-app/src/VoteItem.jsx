import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";


export default function VoteItem({ id, name, votes, countVote}) {
    return(
            <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
                <Stack
                direction= "row"
                justifyContent= "space-between"
                alignItems="center"
                spacing={2}
                >
                  <div>
                    <Typography variant="h6">{name}</Typography>
                    <Typography variant='body2'>
                        Votes: {votes}
                    </Typography>
                  </div>

                  <Button 
                  variant="contained" 
                  size="small"
                  sx={{ minWidth: "70px", borderRadius: 20 }}
                  onClick={() => countVote(id)}
                  >
                    Vote
                  </Button>

                </Stack>
               
                
            </Paper>       
    )
}