export default function VoteItem({ id, name, votes, countVote}) {
    return(
            <li>
                <h3>{name}</h3>
                <button onClick={() => countVote(id)}>{votes}</button>
            </li>
    )
}